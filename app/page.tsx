import { TEMPLATES } from '@/lib/templates';
import LandingClient from './_components/landing-client';

export default function HomePage() {
  const templates = Object.values(TEMPLATES);
  return <LandingClient templates={templates} />;
}
