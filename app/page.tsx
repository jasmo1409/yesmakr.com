import { TEMPLATES } from '@/lib/templates';
import type { TemplateId } from '@/lib/templates';
import LandingClient from './_components/landing-client';

const TEMPLATE_ORDER = ['gym', 'movie', 'food', 'friendship', 'love', 'custom'];

export default function HomePage() {
  const all = Object.values(TEMPLATES);
  const templates = [...all].sort(
    (a, b) => TEMPLATE_ORDER.indexOf(a.id) - TEMPLATE_ORDER.indexOf(b.id)
  );
  return <LandingClient templates={templates} />;
}
