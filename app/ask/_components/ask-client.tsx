'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTemplate, getPalette, getFont } from '@/lib/templates';
import type { PaletteOption } from '@/lib/templates';

interface AskClientProps {
  templateId: string;
  questionText: string;
  paletteId: string;
  fontId: string;
  emojiOverride?: string;
}

const MAX_DODGES = 10;
const SHRINK_START = 5;

export default function AskClient({ templateId, questionText, paletteId, fontId, emojiOverride }: AskClientProps) {
  const template = useMemo(() => getTemplate(templateId), [templateId]);
  const palette = useMemo(() => getPalette(template, paletteId), [template, paletteId]);
  const font = useMemo(() => getFont(fontId), [fontId]);
  const question = questionText || template?.defaultQuestion || 'Will you?';
  const displayEmoji = emojiOverride || template?.emoji || '✨';
  const celebrationEmojis = useMemo(
    () => (emojiOverride ? [emojiOverride, ...(template?.celebrationEmojis ?? [])] : (template?.celebrationEmojis ?? ['🎉'])),
    [emojiOverride, template]
  );

  const [dodgeCount, setDodgeCount] = useState(0);
  const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);
  const [celebrated, setCelebrated] = useState(false);
  const [emojiRain, setEmojiRain] = useState<Array<{ id: number; emoji: string; left: number; delay: number; duration: number; size: number }>>([]);
  const [showEntrance, setShowEntrance] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  // Load font
  useEffect(() => {
    const linkId = 'ask-dynamic-font';
    let existing = document.getElementById(linkId) as HTMLLinkElement | null;
    if (!existing) {
      existing = document.createElement('link');
      existing.id = linkId;
      existing.rel = 'stylesheet';
      document.head.appendChild(existing);
    }
    existing.href = `https://fonts.googleapis.com/css2?family=${font?.url ?? 'Poppins:wght@400;500;600;700'}&display=swap`;
  }, [font]);

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setShowEntrance(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const getRandomPosition = useCallback(() => {
    // Fixed-viewport coordinates for the top-left corner of the No button.
    const vw = typeof window !== 'undefined' ? window.innerWidth : 360;
    const vh = typeof window !== 'undefined' ? window.innerHeight : 640;
    const noRect = noButtonRef?.current?.getBoundingClientRect();
    const btnWidth = noRect?.width ? noRect.width : 120;
    const btnHeight = noRect?.height ? noRect.height : 56;
    const padding = 16;
    const maxX = Math.max(0, vw - btnWidth - padding * 2);
    const maxY = Math.max(0, vh - btnHeight - padding * 2);

    // Area to avoid: the Yes button, expanded by a safety margin so the No
    // button never lands on top of (or touching) it.
    const yesRect = yesButtonRef?.current?.getBoundingClientRect();
    const margin = 24;
    const overlapsYes = (x: number, y: number) => {
      if (!yesRect) return false;
      return (
        x < yesRect.right + margin &&
        x + btnWidth > yesRect.left - margin &&
        y < yesRect.bottom + margin &&
        y + btnHeight > yesRect.top - margin
      );
    };

    let x = 0;
    let y = 0;
    for (let i = 0; i < 30; i++) {
      x = padding + Math.random() * maxX;
      y = padding + Math.random() * maxY;
      if (!overlapsYes(x, y)) return { x, y };
    }
    // Fallback: force it to the opposite vertical half from the Yes button.
    if (yesRect) {
      const yesCenterY = yesRect.top + yesRect.height / 2;
      y = yesCenterY > vh / 2 ? padding : Math.max(padding, vh - btnHeight - padding * 2);
    }
    return { x, y };
  }, []);

  const handleNoDodge = useCallback(() => {
    if (celebrated) return;
    const newCount = dodgeCount + 1;
    setDodgeCount(newCount);
    if (newCount >= MAX_DODGES) {
      // Button becomes Yes after max dodges — snap back to a stable, tappable spot
      setNoPos(null);
      return;
    }
    setNoPos(getRandomPosition());
  }, [dodgeCount, celebrated, getRandomPosition]);

  const triggerCelebration = useCallback(() => {
    if (celebrated) return;
    setCelebrated(true);
    const emojis = celebrationEmojis ?? ['🎉'];
    const particles: Array<{ id: number; emoji: string; left: number; delay: number; duration: number; size: number }> = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        id: i,
        emoji: emojis[i % (emojis?.length ?? 1)] ?? '🎉',
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
        size: 1.5 + Math.random() * 2,
      });
    }
    setEmojiRain(particles);
  }, [celebrated, celebrationEmojis]);

  const handleYes = useCallback(() => {
    triggerCelebration();
  }, [triggerCelebration]);

  const handleConvertedYes = useCallback(() => {
    triggerCelebration();
  }, [triggerCelebration]);

  const noButtonScale = dodgeCount >= SHRINK_START
    ? Math.max(0.5, 1 - (dodgeCount - SHRINK_START) * 0.1)
    : 1;

  const noButtonText = dodgeCount >= MAX_DODGES ? 'Yes 😅' : 'No';
  const isConverted = dodgeCount >= MAX_DODGES;

  const isDark = isColorDark(palette?.bg ?? '#fff');

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center p-4"
      style={{
        background: `linear-gradient(135deg, ${palette?.bgGradientFrom ?? '#fff'}, ${palette?.bgGradientTo ?? '#fff'})`,
        fontFamily: font?.family ?? 'sans-serif',
        color: palette?.text ?? '#333',
      }}
    >
      {/* Ambient floating emojis */}
      {!celebrated && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {(() => {
            const base = celebrationEmojis?.slice?.(0, 6) ?? [];
            const field = base.length ? [...base, ...base].slice(0, 10) : [];
            // Deterministic scattered positions (percent of viewport) so the
            // layout is identical in dev and static export builds.
            const spots = [
              { left: 8, top: 14 }, { left: 82, top: 10 }, { left: 24, top: 70 },
              { left: 68, top: 60 }, { left: 46, top: 8 }, { left: 90, top: 46 },
              { left: 6, top: 48 }, { left: 54, top: 80 }, { left: 34, top: 36 },
              { left: 74, top: 86 },
            ];
            return field.map((emoji: string, i: number) => {
              const spot = spots[i % spots.length];
              return (
                <motion.span
                  key={`ambient-${i}`}
                  className="absolute"
                  style={{
                    fontSize: `${2.2 + (i % 3) * 1.1}rem`,
                    left: `${spot.left}%`,
                    top: `${spot.top}%`,
                    filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.25))',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    y: [0, -22, 0],
                    rotate: i % 2 === 0 ? [0, 12, 0] : [0, -12, 0],
                    opacity: [0.5, 0.85, 0.5],
                    scale: [0.9, 1, 0.9],
                  }}
                  transition={{ duration: 5 + (i % 5), repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
                >
                  {emoji}
                </motion.span>
              );
            });
          })()}
        </div>
      )}

      {/* Main content */}
      <AnimatePresence mode="wait">
        {!celebrated ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="relative z-10 text-center max-w-md w-full"
          >
            {/* Emoji */}
            <motion.div
              className="text-7xl md:text-8xl mb-6"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              {displayEmoji}
            </motion.div>

            {/* Question */}
            <motion.h1
              className="text-3xl md:text-4xl font-extrabold leading-tight mb-10 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ color: palette?.text ?? '#333' }}
            >
              {question}
            </motion.h1>

            {/* Buttons */}
            <div className="relative min-h-[200px] flex flex-col items-center">
              {/* Yes button */}
              <motion.button
                ref={yesButtonRef}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="px-10 py-4 rounded-2xl font-bold text-xl shadow-xl transition-all duration-300 pulse-glow"
                style={{
                  backgroundColor: palette?.primary ?? '#e11d48',
                  color: palette?.primaryForeground ?? '#fff',
                  ['--glow-color' as string]: `${palette?.primary ?? '#e11d48'}66`,
                }}
              >
                Yes! {displayEmoji}
              </motion.button>

              {/* No button */}
              <motion.button
                ref={noButtonRef}
                type="button"
                onMouseEnter={() => {
                  if (!isConverted) handleNoDodge();
                }}
                onPointerDown={(e: React.PointerEvent) => {
                  // Move on touch/pen taps (mouse is handled by hover above)
                  if (e.pointerType !== 'mouse' && !isConverted) {
                    e.preventDefault();
                    handleNoDodge();
                  }
                }}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  if (isConverted) {
                    handleConvertedYes();
                  } else {
                    // Fallback: if it somehow gets clicked before converting, dodge.
                    handleNoDodge();
                  }
                }}
                animate={{ scale: noButtonScale }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="px-8 py-3 rounded-2xl font-bold text-lg shadow-md cursor-pointer touch-none select-none"
                style={{
                  backgroundColor: isConverted ? (palette?.primary ?? '#e11d48') : (palette?.secondary ?? '#fcc'),
                  color: isConverted ? (palette?.primaryForeground ?? '#fff') : (palette?.secondaryForeground ?? '#333'),
                  ...(noPos
                    ? { position: 'fixed' as const, left: noPos.x, top: noPos.y, marginTop: 0, zIndex: 50 }
                    : { marginTop: '1.5rem', position: 'relative' as const }),
                }}
              >
                {noButtonText}
              </motion.button>

              {/* Dodge counter */}
              {dodgeCount > 0 && dodgeCount < MAX_DODGES && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-sm font-medium"
                  style={{ color: palette?.muted ?? '#999', opacity: 0.8 }}
                >
                  {dodgeCount < 3 ? 'Oops! Try again 😏' :
                   dodgeCount < 6 ? "You can't escape! 😄" :
                   dodgeCount < 8 ? 'Almost there... 😂' :
                   'Just say yes already! 🤣'}
                </motion.p>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
            className="relative z-10 text-center max-w-md w-full"
          >
            <div className="celebration-burst text-8xl md:text-9xl mb-6">
              {displayEmoji}
            </div>
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-4"
              style={{ color: palette?.text ?? '#333' }}
            >
              {template?.celebrationMessage ?? 'Yay! 🎉'}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl font-medium"
              style={{ color: palette?.muted ?? '#999' }}
            >
              That was the right choice! 😊
            </motion.p>

            {/* Call to action — let the viewer make their own */}
            <motion.a
              href="/create"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, type: 'spring', bounce: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl"
              style={{
                backgroundColor: palette?.primary ?? '#e11d48',
                color: palette?.primaryForeground ?? '#fff',
              }}
            >
              Create your own {displayEmoji}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Emoji Rain overlay */}
      {celebrated && (emojiRain ?? []).map((p: any) => (
        <span
          key={p?.id}
          className="emoji-rain"
          style={{
            left: `${p?.left ?? 0}%`,
            ['--delay' as string]: `${p?.delay ?? 0}s`,
            ['--duration' as string]: `${p?.duration ?? 3}s`,
            ['--size' as string]: `${p?.size ?? 2}rem`,
          }}
        >
          {p?.emoji}
        </span>
      ))}

      {/* Made with AskMe watermark */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <a
          href="/"
          className="text-xs font-medium transition-opacity hover:opacity-100"
          style={{ color: palette?.muted ?? '#999', opacity: 0.5 }}
        >
          Made with 💘 AskMe
        </a>
      </div>
    </div>
  );
}

function isColorDark(hex: string): boolean {
  try {
    const c = hex?.replace?.('#', '') ?? '000000';
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
  } catch {
    return false;
  }
}
