'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import AskClient from './_components/ask-client';

function AskContent() {
  const searchParams = useSearchParams();
  const template = searchParams?.get('template') ?? 'love';
  const question = searchParams?.get('question') ?? '';
  const palette = searchParams?.get('palette') ?? '';
  const font = searchParams?.get('font') ?? 'poppins';
  const emoji = searchParams?.get('emoji') ?? '';

  return (
    <AskClient
      templateId={template}
      questionText={question}
      paletteId={palette}
      fontId={font}
      emojiOverride={emoji}
    />
  );
}

export default function AskPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="text-4xl animate-bounce">💘</div>
      </div>
    }>
      <AskContent />
    </Suspense>
  );
}
