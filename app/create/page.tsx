'use client';

import { useState, useEffect, useCallback, useMemo, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Copy, Check, Eye, Palette, Type, Sparkles, ExternalLink, Smile } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { TEMPLATES, EMOJI_OPTIONS, getTemplate, getPalette, getFont, buildShareUrl } from '@/lib/templates';
import type { TemplateId, TemplateConfig, PaletteOption } from '@/lib/templates';

export default function CreatePageWrapper() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="text-4xl animate-bounce">🎨</div>
      </div>
    }>
      <CreatePage />
    </Suspense>
  );
}

function CreatePage() {
  const searchParams = useSearchParams();
  const initialTemplate = (searchParams?.get?.('template') as TemplateId) ?? 'custom';

  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>(initialTemplate);
  const [questionText, setQuestionText] = useState('');
  const [selectedPalette, setSelectedPalette] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const template = useMemo(() => getTemplate(selectedTemplate), [selectedTemplate]);
  const palette = useMemo(() => getPalette(template, selectedPalette), [template, selectedPalette]);
  const font = useMemo(() => getFont(palette?.font ?? 'poppins'), [palette]);
  const isCustom = selectedTemplate === 'custom';
  const displayEmoji = isCustom ? (selectedEmoji || template?.emoji || '✨') : (template?.emoji ?? '✨');

  // Load the Google font
  useEffect(() => {
    const linkId = 'dynamic-google-font';
    let existing = document.getElementById(linkId) as HTMLLinkElement | null;
    if (!existing) {
      existing = document.createElement('link');
      existing.id = linkId;
      existing.rel = 'stylesheet';
      document.head.appendChild(existing);
    }
    existing.href = `https://fonts.googleapis.com/css2?family=${font?.url ?? 'Poppins:wght@400;500;600;700'}&display=swap`;
  }, [font]);

  // Reset question, palette & emoji when template changes
  useEffect(() => {
    setQuestionText(template?.defaultQuestion ?? '');
    setSelectedPalette(template?.defaultPalette ?? '');
    setSelectedEmoji(template?.emoji ?? '');
  }, [template]);

  const shareUrl = useMemo(() => {
    return buildShareUrl({
      template: selectedTemplate,
      question: questionText,
      palette: selectedPalette,
      font: palette?.font ?? 'poppins',
      emoji: isCustom ? displayEmoji : undefined,
    });
  }, [selectedTemplate, questionText, selectedPalette, palette, isCustom, displayEmoji]);

  const fullUrl = useMemo(() => {
    if (typeof window === 'undefined') return '';
    return `${window?.location?.origin ?? ''}${shareUrl}`;
  }, [shareUrl]);

  const handleCopy = useCallback(async () => {
    try {
      const url = `${window?.location?.origin ?? ''}${shareUrl}`;
      await navigator?.clipboard?.writeText?.(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const url = `${window?.location?.origin ?? ''}${shareUrl}`;
      const textarea = document.createElement('textarea');
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [shareUrl]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-rose-100/50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </Link>
          <span className="font-display font-bold text-lg tracking-tight bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Create Your Page
          </span>
          <div className="w-20" />
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-6">
            {/* Template picker */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-500" />
                Choose Template
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.values(TEMPLATES ?? {}).map((t: TemplateConfig) => (
                  <button
                    key={t?.id}
                    onClick={() => setSelectedTemplate(t?.id)}
                    className={`relative p-3 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedTemplate === t?.id
                        ? 'border-purple-500 bg-purple-50 shadow-md'
                        : 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{t?.emoji}</span>
                    <span className="text-sm font-semibold text-gray-800 block">{t?.label}</span>
                    {selectedTemplate === t?.id && (
                      <motion.div
                        layoutId="templateCheck"
                        className="absolute top-2 right-2 w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center"
                      >
                        <Check className="w-3 h-3" />
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Question text */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
                <Type className="w-5 h-5 text-purple-500" />
                Your Question
              </h3>
              <input
                type="text"
                value={questionText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuestionText(e?.target?.value ?? '')}
                maxLength={120}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all text-gray-800 text-lg"
                placeholder="Type your question..."
              />
              <p className="text-xs text-gray-400 mt-2 text-right">{questionText?.length ?? 0}/120</p>
            </div>

            {/* Color palette */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-purple-500" />
                Color Palette
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {(template?.palettes ?? []).map((p: PaletteOption) => (
                  <button
                    key={p?.id}
                    onClick={() => setSelectedPalette(p?.id)}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                      selectedPalette === p?.id
                        ? 'border-purple-500 shadow-md'
                        : 'border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex gap-1 mb-2">
                      {[p?.bg, p?.primary, p?.secondary, p?.accent].map((c: string | undefined, ci: number) => (
                        <div
                          key={ci}
                          className="w-6 h-6 rounded-full border border-gray-200"
                          style={{ backgroundColor: c ?? '#ccc' }}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{p?.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Emoji picker — only for the Build Your Own template */}
            {isCustom && (
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <Smile className="w-5 h-5 text-purple-500" />
                  Choose Emoji
                </h3>
                <div className="grid grid-cols-8 gap-2">
                  {(EMOJI_OPTIONS ?? []).map((em: string) => (
                    <button
                      key={em}
                      onClick={() => setSelectedEmoji(em)}
                      className={`aspect-square rounded-xl border-2 text-2xl flex items-center justify-center transition-all duration-200 ${
                        displayEmoji === em
                          ? 'border-purple-500 bg-purple-50 shadow-md scale-105'
                          : 'border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {em}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3">This emoji shows on your page and in the celebration.</p>
              </div>
            )}
          </div>

          {/* Preview & Share */}
          <div className="space-y-6">
            {/* Live Preview */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-purple-500" />
                Live Preview
              </h3>
              <div
                className="rounded-2xl p-8 min-h-[320px] flex flex-col items-center justify-center text-center transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${palette?.bgGradientFrom ?? '#fff'}, ${palette?.bgGradientTo ?? '#fff'})`,
                  fontFamily: font?.family,
                  color: palette?.text ?? '#333',
                }}
              >
                <motion.div
                  key={`${selectedTemplate}-${selectedPalette}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="text-5xl animate-bounce-soft">{displayEmoji}</div>
                  <h2 className="text-2xl font-bold leading-snug" style={{ color: palette?.text ?? '#333' }}>
                    {questionText || 'Your question here...'}
                  </h2>
                  <div className="flex gap-4 justify-center">
                    <div
                      className="px-8 py-3 rounded-xl font-bold text-lg shadow-lg"
                      style={{
                        backgroundColor: palette?.primary ?? '#e11d48',
                        color: palette?.primaryForeground ?? '#fff',
                      }}
                    >
                      Yes! {displayEmoji}
                    </div>
                    <div
                      className="px-8 py-3 rounded-xl font-bold text-lg shadow-md opacity-80"
                      style={{
                        backgroundColor: palette?.secondary ?? '#fcc',
                        color: palette?.secondaryForeground ?? '#333',
                      }}
                    >
                      No
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Share link */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
                <ExternalLink className="w-5 h-5 text-purple-500" />
                Share Link
              </h3>
              <div className="flex gap-2">
                <div className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-600 truncate font-mono">
                  {fullUrl || shareUrl}
                </div>
                <button
                  onClick={handleCopy}
                  className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-rose-500 to-purple-600 text-white hover:shadow-lg'
                  }`}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <Link
                href={shareUrl}
                target="_blank"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Preview Your Page
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
