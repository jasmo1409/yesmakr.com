'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Dumbbell, Pizza, Film, PawPrint, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';
import type { TemplateConfig } from '@/lib/templates';

const TEMPLATE_ICONS: Record<string, React.ReactNode> = {
  love: <Heart className="w-8 h-8" />,
  gym: <Dumbbell className="w-8 h-8" />,
  food: <Pizza className="w-8 h-8" />,
  movie: <Film className="w-8 h-8" />,
  friendship: <PawPrint className="w-8 h-8" />,
};

const CARD_GRADIENTS: Record<string, string> = {
  love: 'from-pink-500 to-rose-600',
  gym: 'from-orange-500 to-red-600',
  food: 'from-amber-400 to-orange-500',
  movie: 'from-purple-500 to-indigo-600',
  friendship: 'from-violet-400 to-fuchsia-500',
};

const CARD_BG_LIGHT: Record<string, string> = {
  love: 'bg-rose-50',
  gym: 'bg-orange-50',
  food: 'bg-amber-50',
  movie: 'bg-purple-50',
  friendship: 'bg-fuchsia-50',
};

export default function LandingClient({ templates }: { templates: TemplateConfig[] }) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-rose-100/50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">💘</span>
            <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              YesMakr
            </span>
          </Link>
          <Link
            href="/create"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-rose-200/50 hover:shadow-xl hover:shadow-rose-300/50 transition-all duration-300 hover:scale-105"
          >
            Create Yours
            <Sparkles className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-6xl mb-6 animate-bounce-soft">🤔</div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-gray-900 mb-4">
            Ask Anyone, <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Anything</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create a fun, interactive yes/no question page and share it.
            <br className="hidden md:block" />
            The <strong>No</strong> button has a mind of its own 😏
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/create"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-purple-600 text-white text-lg font-bold shadow-xl shadow-rose-200/60 hover:shadow-2xl hover:shadow-rose-300/60 transition-all duration-300 hover:scale-105"
          >
            Create Your Page
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-display font-bold tracking-tight text-gray-900 mb-10"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '1', emoji: '🎨', title: 'Pick a Template', desc: 'Choose from love, gym, food, movie, or friendship themes' },
            { step: '2', emoji: '✏️', title: 'Customize It', desc: 'Edit the question, pick colors and fonts to match your style' },
            { step: '3', emoji: '🔗', title: 'Share the Link', desc: 'Copy the link and send it — then watch them try to say No!' },
          ].map((item: any, i: number) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-purple-600 text-white text-sm font-bold flex items-center justify-center shadow-lg">
                {item.step}
              </div>
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Template Cards */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-display font-bold tracking-tight text-gray-900 mb-3"
        >
          Choose Your Vibe
        </motion.h2>
        <p className="text-center text-gray-500 mb-10">Pick a template and make it yours</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(templates ?? []).map((t: TemplateConfig, i: number) => (
            <motion.div
              key={t?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredCard(t?.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Link href={`/create?template=${t?.id}`} className="block">
                <div className={`relative overflow-hidden rounded-2xl ${CARD_BG_LIGHT[t?.id] ?? 'bg-gray-50'} p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer`}>
                  {/* Gradient top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${CARD_GRADIENTS[t?.id] ?? 'from-gray-400 to-gray-500'}`} />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${CARD_GRADIENTS[t?.id] ?? 'from-gray-400 to-gray-500'} text-white flex items-center justify-center shadow-lg`}>
                      {TEMPLATE_ICONS[t?.id] ?? <Zap className="w-6 h-6" />}
                    </div>
                    <div>
                      <span className="text-2xl mr-1">{t?.emoji}</span>
                      <span className="font-bold text-gray-900">{t?.label}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 font-medium text-lg italic mb-4">
                    "{t?.defaultQuestion}"
                  </p>

                  <div className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                    <span className={`bg-gradient-to-r ${CARD_GRADIENTS[t?.id] ?? 'from-gray-400 to-gray-500'} bg-clip-text text-transparent`}>
                      Use this template
                    </span>
                    <ArrowRight className={`w-4 h-4 text-rose-500 group-hover:translate-x-1 transition-transform duration-300`} />
                  </div>

                  {/* Floating emojis on hover */}
                  {hoveredCard === t?.id && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {(t?.celebrationEmojis?.slice?.(0, 4) ?? []).map((emoji: string, j: number) => (
                        <motion.span
                          key={j}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: [0, 1, 0], y: -30 }}
                          transition={{ duration: 1.5, delay: j * 0.2 }}
                          className="absolute bottom-4 text-2xl"
                          style={{ left: `${20 + j * 20}%` }}
                        >
                          {emoji}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 py-10 mt-8 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">💘</span>
            <span className="font-display font-bold text-gray-700">YesMakr</span>
          </div>
          <p className="text-sm text-gray-400">Made with 💖 for fun questions</p>
        </div>
      </footer>
    </div>
  );
}
