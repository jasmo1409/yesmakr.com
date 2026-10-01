export type TemplateId = 'love' | 'gym' | 'food' | 'movie' | 'friendship' | 'halloween' | 'custom';

export interface PaletteOption {
  id: string;
  name: string;
  bg: string;
  bgGradientFrom: string;
  bgGradientTo: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  text: string;
  muted: string;
  accent: string;
  font: string; // font id from FONT_OPTIONS — the font travels with the palette
}

export interface TemplateConfig {
  id: TemplateId;
  emoji: string;
  label: string;
  defaultQuestion: string;
  celebrationEmojis: string[];
  celebrationMessage: string;
  palettes: PaletteOption[];
  defaultPalette: string;
  customizable?: boolean; // when true, the user can pick their own emoji
}

export const FONT_OPTIONS = [
  { id: 'playfair', name: 'Playfair Display', family: "'Playfair Display', serif", url: 'Playfair+Display:wght@400;600;700;800' },
  { id: 'pacifico', name: 'Pacifico', family: "'Pacifico', cursive", url: 'Pacifico' },
  { id: 'poppins', name: 'Poppins', family: "'Poppins', sans-serif", url: 'Poppins:wght@400;500;600;700' },
  { id: 'dancing', name: 'Dancing Script', family: "'Dancing Script', cursive", url: 'Dancing+Script:wght@400;500;600;700' },
  { id: 'nunito', name: 'Nunito', family: "'Nunito', sans-serif", url: 'Nunito:wght@400;500;600;700;800' },
  { id: 'creepster', name: 'Creepster', family: "'Creepster', system-ui, cursive", url: 'Creepster' },
] as const;

// Emoji choices for the "Build Your Own" (custom) template
export const EMOJI_OPTIONS = [
  '💘', '💖', '😍', '🥰', '💍', '🎉', '🥳', '✨',
  '⭐', '🔥', '💪', '🏋️', '🍕', '🍔', '🍰', '☕',
  '🎬', '🍿', '🎮', '🎸', '🎨', '🐾', '🌸', '🌈',
  '🏝️', '✈️', '🎂', '🎁', '👑', '💎', '🚀', '⚽',
] as const;

export const TEMPLATES: Record<TemplateId, TemplateConfig> = {
  love: {
    id: 'love',
    emoji: '💘',
    label: 'Love / Date',
    defaultQuestion: 'Do you love me?',
    celebrationEmojis: ['💖', '💕', '❤️', '💗', '💘', '😍', '🥰', '💞', '💝', '🌹'],
    celebrationMessage: 'Yay! 💖 They said YES!',
    defaultPalette: 'rose',
    palettes: [
      { id: 'rose', name: 'Rose', bg: '#FFF0F5', bgGradientFrom: '#FFE4EC', bgGradientTo: '#FFF0F5', primary: '#E11D48', primaryForeground: '#FFFFFF', secondary: '#FFC0CB', secondaryForeground: '#9F1239', text: '#4A0020', muted: '#F9A8C9', accent: '#FB7185', font: 'dancing' },
      { id: 'deep-red', name: 'Deep Red', bg: '#1A0000', bgGradientFrom: '#2D0A0A', bgGradientTo: '#1A0000', primary: '#EF4444', primaryForeground: '#FFFFFF', secondary: '#7F1D1D', secondaryForeground: '#FCA5A5', text: '#FEE2E2', muted: '#991B1B', accent: '#F87171', font: 'playfair' },
      { id: 'lavender-love', name: 'Lavender', bg: '#F5F0FF', bgGradientFrom: '#EDE4FF', bgGradientTo: '#F5F0FF', primary: '#A855F7', primaryForeground: '#FFFFFF', secondary: '#E9D5FF', secondaryForeground: '#6B21A8', text: '#3B0764', muted: '#C4B5FD', accent: '#C084FC', font: 'dancing' },
      { id: 'blush', name: 'Blush', bg: '#FFF5F5', bgGradientFrom: '#FFE8E8', bgGradientTo: '#FFF5F5', primary: '#F43F5E', primaryForeground: '#FFFFFF', secondary: '#FFD1D1', secondaryForeground: '#BE123C', text: '#500724', muted: '#FDA4AF', accent: '#FB7185', font: 'pacifico' },
    ],
  },
  gym: {
    id: 'gym',
    emoji: '🏋️',
    label: 'Gym / Trainer',
    defaultQuestion: 'Will you come to the gym with me?',
    celebrationEmojis: ['💪', '🏋️', '🔥', '⚡', '💥', '🦾', '🏆', '👊', '🎯', '🔱'],
    celebrationMessage: "LET'S GO! 💪🔥",
    defaultPalette: 'inferno',
    palettes: [
      { id: 'inferno', name: 'Inferno', bg: '#0F0F0F', bgGradientFrom: '#1A1005', bgGradientTo: '#0F0F0F', primary: '#F97316', primaryForeground: '#FFFFFF', secondary: '#431407', secondaryForeground: '#FDBA74', text: '#FFF7ED', muted: '#9A3412', accent: '#FB923C', font: 'poppins' },
      { id: 'neon-green', name: 'Neon', bg: '#0A0F0A', bgGradientFrom: '#0D1A0D', bgGradientTo: '#0A0F0A', primary: '#22C55E', primaryForeground: '#FFFFFF', secondary: '#14532D', secondaryForeground: '#86EFAC', text: '#F0FDF4', muted: '#166534', accent: '#4ADE80', font: 'poppins' },
      { id: 'steel', name: 'Steel', bg: '#111827', bgGradientFrom: '#1F2937', bgGradientTo: '#111827', primary: '#60A5FA', primaryForeground: '#FFFFFF', secondary: '#1E3A5F', secondaryForeground: '#93C5FD', text: '#F0F9FF', muted: '#1E40AF', accent: '#3B82F6', font: 'nunito' },
      { id: 'crimson-dark', name: 'Crimson', bg: '#0F0505', bgGradientFrom: '#1A0A0A', bgGradientTo: '#0F0505', primary: '#DC2626', primaryForeground: '#FFFFFF', secondary: '#450A0A', secondaryForeground: '#FCA5A5', text: '#FEF2F2', muted: '#7F1D1D', accent: '#EF4444', font: 'poppins' },
    ],
  },
  food: {
    id: 'food',
    emoji: '🍕',
    label: 'Food Date',
    defaultQuestion: 'Will you grab food with me?',
    celebrationEmojis: ['🍕', '🍔', '🌮', '🍩', '🍰', '🍟', '🧁', '🍣', '🥑', '🍝'],
    celebrationMessage: 'FOOOOOD TIME! 🍕🎉',
    defaultPalette: 'warm',
    palettes: [
      { id: 'warm', name: 'Warm', bg: '#FFFBF0', bgGradientFrom: '#FFF3D6', bgGradientTo: '#FFFBF0', primary: '#EA580C', primaryForeground: '#FFFFFF', secondary: '#FED7AA', secondaryForeground: '#9A3412', text: '#431407', muted: '#FDBA74', accent: '#F97316', font: 'nunito' },
      { id: 'mint-fresh', name: 'Mint', bg: '#F0FFF4', bgGradientFrom: '#E6FFED', bgGradientTo: '#F0FFF4', primary: '#059669', primaryForeground: '#FFFFFF', secondary: '#A7F3D0', secondaryForeground: '#065F46', text: '#064E3B', muted: '#6EE7B7', accent: '#10B981', font: 'nunito' },
      { id: 'cherry', name: 'Cherry', bg: '#FFF5F5', bgGradientFrom: '#FFE8E8', bgGradientTo: '#FFF5F5', primary: '#DC2626', primaryForeground: '#FFFFFF', secondary: '#FECACA', secondaryForeground: '#991B1B', text: '#450A0A', muted: '#FCA5A5', accent: '#EF4444', font: 'poppins' },
      { id: 'golden', name: 'Golden', bg: '#FFFDF0', bgGradientFrom: '#FEF9C3', bgGradientTo: '#FFFDF0', primary: '#CA8A04', primaryForeground: '#FFFFFF', secondary: '#FEF08A', secondaryForeground: '#854D0E', text: '#422006', muted: '#FDE047', accent: '#EAB308', font: 'playfair' },
    ],
  },
  movie: {
    id: 'movie',
    emoji: '🎬',
    label: 'Movie Night',
    defaultQuestion: 'Will you watch a movie with me?',
    celebrationEmojis: ['🍿', '🎬', '⭐', '✨', '🌟', '🎥', '🎞️', '🎭', '🎪', '💫'],
    celebrationMessage: 'Movie Night! 🍿✨',
    defaultPalette: 'cinema',
    palettes: [
      { id: 'cinema', name: 'Cinema', bg: '#0F0720', bgGradientFrom: '#1A0A3E', bgGradientTo: '#0F0720', primary: '#A855F7', primaryForeground: '#FFFFFF', secondary: '#3B0764', secondaryForeground: '#D8B4FE', text: '#FAF5FF', muted: '#7C3AED', accent: '#C084FC', font: 'playfair' },
      { id: 'midnight', name: 'Midnight', bg: '#020617', bgGradientFrom: '#0F172A', bgGradientTo: '#020617', primary: '#3B82F6', primaryForeground: '#FFFFFF', secondary: '#1E3A5F', secondaryForeground: '#93C5FD', text: '#F0F9FF', muted: '#1D4ED8', accent: '#60A5FA', font: 'poppins' },
      { id: 'retro', name: 'Retro', bg: '#1A1A2E', bgGradientFrom: '#16213E', bgGradientTo: '#1A1A2E', primary: '#E94560', primaryForeground: '#FFFFFF', secondary: '#533483', secondaryForeground: '#F8B4C8', text: '#EAEAEA', muted: '#0F3460', accent: '#F06292', font: 'playfair' },
      { id: 'spotlight', name: 'Spotlight', bg: '#1C1C1C', bgGradientFrom: '#2D2D2D', bgGradientTo: '#1C1C1C', primary: '#FBBF24', primaryForeground: '#1C1C1C', secondary: '#422006', secondaryForeground: '#FDE68A', text: '#FEF3C7', muted: '#92400E', accent: '#F59E0B', font: 'playfair' },
    ],
  },
  friendship: {
    id: 'friendship',
    emoji: '🐾',
    label: 'Friendship',
    defaultQuestion: 'Will you be my friend?',
    celebrationEmojis: ['🌈', '🎉', '🎊', '✨', '💫', '🦋', '🌸', '🎈', '🎀', '⭐'],
    celebrationMessage: 'New bestie! 🌈🎉',
    defaultPalette: 'rainbow',
    palettes: [
      { id: 'rainbow', name: 'Rainbow', bg: '#FEFCE8', bgGradientFrom: '#FEF3C7', bgGradientTo: '#FEFCE8', primary: '#8B5CF6', primaryForeground: '#FFFFFF', secondary: '#FDE68A', secondaryForeground: '#6D28D9', text: '#1E1B4B', muted: '#C4B5FD', accent: '#A78BFA', font: 'pacifico' },
      { id: 'bubblegum', name: 'Bubblegum', bg: '#FFF0F6', bgGradientFrom: '#FFE0EB', bgGradientTo: '#FFF0F6', primary: '#EC4899', primaryForeground: '#FFFFFF', secondary: '#FBCFE8', secondaryForeground: '#BE185D', text: '#500724', muted: '#F9A8D4', accent: '#F472B6', font: 'pacifico' },
      { id: 'ocean', name: 'Ocean', bg: '#F0F9FF', bgGradientFrom: '#E0F2FE', bgGradientTo: '#F0F9FF', primary: '#0EA5E9', primaryForeground: '#FFFFFF', secondary: '#BAE6FD', secondaryForeground: '#0369A1', text: '#0C4A6E', muted: '#7DD3FC', accent: '#38BDF8', font: 'nunito' },
      { id: 'forest', name: 'Forest', bg: '#F0FDF4', bgGradientFrom: '#DCFCE7', bgGradientTo: '#F0FDF4', primary: '#16A34A', primaryForeground: '#FFFFFF', secondary: '#BBF7D0', secondaryForeground: '#15803D', text: '#14532D', muted: '#86EFAC', accent: '#4ADE80', font: 'nunito' },
    ],
  },
  halloween: {
    id: 'halloween',
    emoji: '🎃',
    label: 'Halloween',
    defaultQuestion: 'Will you join my Halloween party? 🎃',
    celebrationEmojis: ['🎃', '👻', '🕷️', '🕸️', '💀', '🦇', '🧛', '🧙', '⚰️', '🍬'],
    celebrationMessage: 'SPOOKY YES! 🎃👻',
    defaultPalette: 'pumpkin',
    palettes: [
      { id: 'pumpkin', name: 'Pumpkin', bg: '#140A02', bgGradientFrom: '#2A1405', bgGradientTo: '#140A02', primary: '#F97316', primaryForeground: '#140A02', secondary: '#431407', secondaryForeground: '#FDBA74', text: '#FFEDD5', muted: '#9A3412', accent: '#FB923C', font: 'creepster' },
      { id: 'haunted', name: 'Haunted Night', bg: '#0E0618', bgGradientFrom: '#1E0B33', bgGradientTo: '#0E0618', primary: '#FB923C', primaryForeground: '#0E0618', secondary: '#3B0764', secondaryForeground: '#E9D5FF', text: '#F5F3FF', muted: '#7C3AED', accent: '#A855F7', font: 'creepster' },
      { id: 'witch', name: "Witch's Brew", bg: '#04140A', bgGradientFrom: '#0A2A16', bgGradientTo: '#04140A', primary: '#84CC16', primaryForeground: '#04140A', secondary: '#1A2E05', secondaryForeground: '#D9F99D', text: '#ECFCCB', muted: '#4D7C0F', accent: '#A3E635', font: 'creepster' },
      { id: 'ghost', name: 'Friendly Ghost', bg: '#FBF7FF', bgGradientFrom: '#F3EEFF', bgGradientTo: '#FFF7ED', primary: '#EA580C', primaryForeground: '#FFFFFF', secondary: '#EDE9FE', secondaryForeground: '#6D28D9', text: '#2E1065', muted: '#C4B5FD', accent: '#F97316', font: 'nunito' },
    ],
  },
  custom: {
    id: 'custom',
    emoji: '✨',
    label: 'Build Your Own',
    defaultQuestion: 'Will you...?',
    celebrationEmojis: ['🎉', '🎊', '✨', '⭐', '💫', '🌟', '🎈', '🥳', '💖', '🔥'],
    celebrationMessage: 'YES! 🎉',
    defaultPalette: 'classic',
    customizable: true,
    palettes: [
      { id: 'classic', name: 'Classic', bg: '#FFFDFB', bgGradientFrom: '#F5F3FF', bgGradientTo: '#FFFDFB', primary: '#4F46E5', primaryForeground: '#FFFFFF', secondary: '#E0E7FF', secondaryForeground: '#3730A3', text: '#1E1B4B', muted: '#A5B4FC', accent: '#818CF8', font: 'playfair' },
      { id: 'midnight-custom', name: 'Midnight', bg: '#0B1120', bgGradientFrom: '#111827', bgGradientTo: '#0B1120', primary: '#38BDF8', primaryForeground: '#0B1120', secondary: '#1E293B', secondaryForeground: '#BAE6FD', text: '#F1F5F9', muted: '#334155', accent: '#7DD3FC', font: 'poppins' },
      { id: 'sunset-custom', name: 'Sunset', bg: '#FFF7ED', bgGradientFrom: '#FFEDD5', bgGradientTo: '#FFE4E6', primary: '#F43F5E', primaryForeground: '#FFFFFF', secondary: '#FED7AA', secondaryForeground: '#9A3412', text: '#7C2D12', muted: '#FDBA74', accent: '#FB7185', font: 'pacifico' },
      { id: 'ocean-custom', name: 'Ocean', bg: '#F0FDFA', bgGradientFrom: '#CCFBF1', bgGradientTo: '#F0F9FF', primary: '#0D9488', primaryForeground: '#FFFFFF', secondary: '#99F6E4', secondaryForeground: '#115E59', text: '#134E4A', muted: '#5EEAD4', accent: '#2DD4BF', font: 'nunito' },
      { id: 'mono-custom', name: 'Mono', bg: '#FAFAFA', bgGradientFrom: '#F4F4F5', bgGradientTo: '#FAFAFA', primary: '#18181B', primaryForeground: '#FFFFFF', secondary: '#E4E4E7', secondaryForeground: '#27272A', text: '#18181B', muted: '#A1A1AA', accent: '#52525B', font: 'poppins' },
      { id: 'candy-custom', name: 'Candy', bg: '#FFF1F8', bgGradientFrom: '#FCE7F3', bgGradientTo: '#F5F3FF', primary: '#DB2777', primaryForeground: '#FFFFFF', secondary: '#FBCFE8', secondaryForeground: '#9D174D', text: '#831843', muted: '#F9A8D4', accent: '#F472B6', font: 'dancing' },
    ],
  },
};

export function getTemplate(id: string): TemplateConfig {
  return TEMPLATES[id as TemplateId] ?? TEMPLATES.love;
}

export function getPalette(template: TemplateConfig, paletteId: string): PaletteOption {
  return template.palettes?.find?.((p: PaletteOption) => p?.id === paletteId) ?? template.palettes?.[0] ?? template.palettes[0];
}

export function getFont(fontId: string) {
  return FONT_OPTIONS?.find?.((f) => f?.id === fontId) ?? FONT_OPTIONS[2]; // default Poppins
}

export function buildShareUrl(params: {
  template: string;
  question: string;
  palette: string;
  font: string;
  emoji?: string;
}): string {
  const sp = new URLSearchParams();
  sp.set('template', params?.template ?? 'love');
  sp.set('question', params?.question ?? '');
  sp.set('palette', params?.palette ?? '');
  sp.set('font', params?.font ?? 'poppins');
  if (params?.emoji) sp.set('emoji', params.emoji);
  return `/ask?${sp.toString()}`;
}
