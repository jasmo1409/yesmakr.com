export type TemplateId = 'love' | 'gym' | 'food' | 'movie' | 'friendship' | 'halloween' | 'friendsgiving' | 'thanksgiving' | 'blackfriday' | 'christmas' | 'christmasmarket' | 'secretsanta' | 'dune' | 'doomsday' | 'custom';

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
  { id: 'fredoka', name: 'Fredoka', family: "'Fredoka', system-ui, sans-serif", url: 'Fredoka:wght@400;500;600;700' },
  { id: 'anton', name: 'Anton', family: "'Anton', system-ui, sans-serif", url: 'Anton' },
  { id: 'greatvibes', name: 'Great Vibes', family: "'Great Vibes', cursive", url: 'Great+Vibes' },
  { id: 'baloo', name: 'Baloo 2', family: "'Baloo 2', system-ui, cursive", url: 'Baloo+2:wght@400;500;600;700;800' },
  { id: 'orbitron', name: 'Orbitron', family: "'Orbitron', system-ui, sans-serif", url: 'Orbitron:wght@400;500;600;700;800;900' },
  { id: 'bungee', name: 'Bungee', family: "'Bungee', system-ui, cursive", url: 'Bungee' },
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
  friendsgiving: {
    id: 'friendsgiving',
    emoji: '🍗',
    label: 'Friendsgiving',
    defaultQuestion: 'Will you come to my Friendsgiving? 🍗',
    celebrationEmojis: ['🍗', '🍂', '🍁', '🌽', '🥧', '🦃', '🧡', '🍽️', '🤎', '🕯️'],
    celebrationMessage: 'Friendsgiving it is! 🍗🍂',
    defaultPalette: 'harvest',
    palettes: [
      { id: 'harvest', name: 'Harvest', bg: '#1C1206', bgGradientFrom: '#2E1C0A', bgGradientTo: '#1C1206', primary: '#EA580C', primaryForeground: '#FFF7ED', secondary: '#4A2C10', secondaryForeground: '#FDBA74', text: '#FFF1DE', muted: '#B45309', accent: '#F59E0B', font: 'fredoka' },
      { id: 'cream-harvest', name: 'Cream', bg: '#FFF8EE', bgGradientFrom: '#FFEFD8', bgGradientTo: '#FFF8EE', primary: '#C2410C', primaryForeground: '#FFFFFF', secondary: '#FDE4C8', secondaryForeground: '#7C2D12', text: '#4A2410', muted: '#D98B4A', accent: '#EA580C', font: 'fredoka' },
      { id: 'maple', name: 'Maple', bg: '#1A0F08', bgGradientFrom: '#3A1D0C', bgGradientTo: '#1A0F08', primary: '#D97706', primaryForeground: '#1A0F08', secondary: '#5B2C0E', secondaryForeground: '#FCD9A8', text: '#FBE8D0', muted: '#92400E', accent: '#F59E0B', font: 'fredoka' },
    ],
  },
  thanksgiving: {
    id: 'thanksgiving',
    emoji: '🦃',
    label: 'Thanksgiving',
    defaultQuestion: 'Will you join us for Thanksgiving dinner? 🦃',
    celebrationEmojis: ['🦃', '🍁', '🍂', '🥧', '🌽', '🙏', '🕯️', '🤎', '🍽️', '🌾'],
    celebrationMessage: 'So much to be thankful for! 🦃🍁',
    defaultPalette: 'autumn-feast',
    palettes: [
      { id: 'autumn-feast', name: 'Autumn Feast', bg: '#1A0808', bgGradientFrom: '#3A0F14', bgGradientTo: '#1A0808', primary: '#E0A526', primaryForeground: '#2A0A0A', secondary: '#4A1218', secondaryForeground: '#F0C97A', text: '#FBEAD0', muted: '#B4531F', accent: '#D4A017', font: 'playfair' },
      { id: 'golden-harvest', name: 'Golden Harvest', bg: '#1E1408', bgGradientFrom: '#3E2810', bgGradientTo: '#1E1408', primary: '#E08A1E', primaryForeground: '#1E1408', secondary: '#5A3410', secondaryForeground: '#FBD9A0', text: '#FBEBD2', muted: '#9A5A16', accent: '#F0A830', font: 'playfair' },
      { id: 'cream-classic', name: 'Cream', bg: '#FBF3E6', bgGradientFrom: '#F3E4CC', bgGradientTo: '#FBF3E6', primary: '#7C2D12', primaryForeground: '#FFFFFF', secondary: '#EBD6B8', secondaryForeground: '#5A2410', text: '#3A1E0E', muted: '#B07A3C', accent: '#B45309', font: 'playfair' },
    ],
  },
  blackfriday: {
    id: 'blackfriday',
    emoji: '🛍️',
    label: 'Black Friday',
    defaultQuestion: 'Shall we go shopping together? 🛍️',
    celebrationEmojis: ['🛍️', '🏷️', '💰', '✨', '🛒', '💳', '🤑', '🎁', '⭐', '💛'],
    celebrationMessage: "Let's SHOP! 🛍️💰",
    defaultPalette: 'blackgold',
    palettes: [
      { id: 'blackgold', name: 'Black & Gold', bg: '#0A0A0A', bgGradientFrom: '#1A1708', bgGradientTo: '#0A0A0A', primary: '#FACC15', primaryForeground: '#0A0A0A', secondary: '#3A2E05', secondaryForeground: '#FDE68A', text: '#FEF9C3', muted: '#A16207', accent: '#EAB308', font: 'anton' },
      { id: 'noir', name: 'Noir', bg: '#000000', bgGradientFrom: '#171717', bgGradientTo: '#000000', primary: '#D4AF37', primaryForeground: '#000000', secondary: '#2A2A2A', secondaryForeground: '#E8C86A', text: '#F5E9C0', muted: '#8A6D1F', accent: '#D4AF37', font: 'anton' },
      { id: 'platinum', name: 'Platinum', bg: '#FAFAF7', bgGradientFrom: '#F0EEE6', bgGradientTo: '#FAFAF7', primary: '#111111', primaryForeground: '#FACC15', secondary: '#E8E4D5', secondaryForeground: '#1A1A1A', text: '#171717', muted: '#A08A3C', accent: '#CA8A04', font: 'anton' },
    ],
  },
  christmas: {
    id: 'christmas',
    emoji: '🎄',
    label: 'Christmas',
    defaultQuestion: 'Will you spend Christmas Eve with me? 🎄',
    celebrationEmojis: ['🎄', '🎅', '🎁', '⭐', '❄️', '🕯️', '🦌', '🔔', '✨', '❤️'],
    celebrationMessage: 'Merry Christmas Eve! 🎄✨',
    defaultPalette: 'candlelight',
    palettes: [
      { id: 'candlelight', name: 'Candlelight', bg: '#1A0505', bgGradientFrom: '#3A0C0C', bgGradientTo: '#1A0505', primary: '#E0B64A', primaryForeground: '#1A0505', secondary: '#5B0E0E', secondaryForeground: '#F3D79A', text: '#FBE9D2', muted: '#B91C1C', accent: '#DC2626', font: 'greatvibes' },
      { id: 'royal-red', name: 'Royal Red', bg: '#200707', bgGradientFrom: '#4A0F0F', bgGradientTo: '#200707', primary: '#F5C542', primaryForeground: '#200707', secondary: '#7F1515', secondaryForeground: '#FBE3A8', text: '#FDECD6', muted: '#A61B1B', accent: '#EF4444', font: 'greatvibes' },
      { id: 'snowy', name: 'Snowy', bg: '#FFF7F3', bgGradientFrom: '#FBE9E4', bgGradientTo: '#FFF7F3', primary: '#B91C1C', primaryForeground: '#FFFFFF', secondary: '#F5D98E', secondaryForeground: '#7C2D12', text: '#4A0A0A', muted: '#C99A3C', accent: '#D4AF37', font: 'greatvibes' },
    ],
  },
  christmasmarket: {
    id: 'christmasmarket',
    emoji: '🎁',
    label: 'Christmas Market',
    defaultQuestion: 'Will you go to the Christmas market with me? 🎁',
    celebrationEmojis: ['🎁', '🎄', '🏮', '🌟', '🍷', '🧣', '🎶', '🕯️', '❄️', '🍪'],
    celebrationMessage: 'To the market! 🎁🎄',
    defaultPalette: 'marketglow',
    palettes: [
      { id: 'marketglow', name: 'Market Glow', bg: '#0A1A0E', bgGradientFrom: '#123018', bgGradientTo: '#0A1A0E', primary: '#DC2626', primaryForeground: '#FFFFFF', secondary: '#14532D', secondaryForeground: '#FCA5A5', text: '#F0F7E8', muted: '#D97706', accent: '#F59E0B', font: 'playfair' },
      { id: 'pinewood', name: 'Pinewood', bg: '#17100A', bgGradientFrom: '#2E2012', bgGradientTo: '#17100A', primary: '#E02424', primaryForeground: '#FFFFFF', secondary: '#1E4D2B', secondaryForeground: '#BBF7D0', text: '#F5ECD8', muted: '#CA8A04', accent: '#16A34A', font: 'playfair' },
      { id: 'frostmarket', name: 'Frost Market', bg: '#F3FAF3', bgGradientFrom: '#E0F2E0', bgGradientTo: '#FFF5F3', primary: '#B91C1C', primaryForeground: '#FFFFFF', secondary: '#BBF7D0', secondaryForeground: '#14532D', text: '#14361D', muted: '#16A34A', accent: '#DC2626', font: 'playfair' },
    ],
  },
  secretsanta: {
    id: 'secretsanta',
    emoji: '🎁',
    label: 'Secret Santa',
    defaultQuestion: 'Will you join our Secret Santa? 🎁',
    celebrationEmojis: ['🎁', '🤫', '⭐', '❄️', '🎀', '✨', '🔔', '💙', '🥳', '🎅'],
    celebrationMessage: 'Ho ho ho! 🤫🎁',
    defaultPalette: 'midnightgift',
    palettes: [
      { id: 'midnightgift', name: 'Midnight Gift', bg: '#070B1A', bgGradientFrom: '#0E1733', bgGradientTo: '#070B1A', primary: '#C0C7D1', primaryForeground: '#070B1A', secondary: '#1E2A4A', secondaryForeground: '#CBD5E1', text: '#E8EEF8', muted: '#64748B', accent: '#93C5FD', font: 'baloo' },
      { id: 'frostblue', name: 'Frost Blue', bg: '#081229', bgGradientFrom: '#12244D', bgGradientTo: '#081229', primary: '#D8DEE9', primaryForeground: '#081229', secondary: '#243B6B', secondaryForeground: '#BFD4F5', text: '#EAF1FB', muted: '#5B7CB5', accent: '#60A5FA', font: 'baloo' },
      { id: 'silverlight', name: 'Silver Light', bg: '#F5F8FD', bgGradientFrom: '#E6EEF9', bgGradientTo: '#F5F8FD', primary: '#1E3A8A', primaryForeground: '#FFFFFF', secondary: '#CBD5E1', secondaryForeground: '#1E293B', text: '#0F1F45', muted: '#64748B', accent: '#3B82F6', font: 'baloo' },
    ],
  },
  dune: {
    id: 'dune',
    emoji: '🏜️',
    label: 'Dune',
    defaultQuestion: 'Will you see Dune: Part Three with me? 🏜️',
    celebrationEmojis: ['🏜️', '🪐', '⚔️', '🌅', '🐛', '✨', '🔥', '🏖️', '☀️', '🌌'],
    celebrationMessage: 'See you on Arrakis! 🏜️🪐',
    defaultPalette: 'desert',
    palettes: [
      { id: 'desert', name: 'Desert', bg: '#1A1209', bgGradientFrom: '#2E2012', bgGradientTo: '#1A1209', primary: '#C2410C', primaryForeground: '#FFF7ED', secondary: '#44341C', secondaryForeground: '#E7C9A0', text: '#F2E3C8', muted: '#B45309', accent: '#EA580C', font: 'orbitron' },
      { id: 'spice', name: 'Spice', bg: '#120C06', bgGradientFrom: '#2A1A0A', bgGradientTo: '#120C06', primary: '#EA580C', primaryForeground: '#120C06', secondary: '#3D2910', secondaryForeground: '#F5C78A', text: '#F6E6CB', muted: '#9A3412', accent: '#F59E0B', font: 'orbitron' },
      { id: 'dunesand', name: 'Dune Sand', bg: '#FBF3E2', bgGradientFrom: '#F3E4C6', bgGradientTo: '#FBF3E2', primary: '#9A3412', primaryForeground: '#FFFFFF', secondary: '#E8D3A8', secondaryForeground: '#5B3410', text: '#3D2A12', muted: '#C2410C', accent: '#EA580C', font: 'orbitron' },
    ],
  },
  doomsday: {
    id: 'doomsday',
    emoji: '💥',
    label: 'Doomsday',
    defaultQuestion: 'Will you see Avengers: Doomsday with me? 💥',
    celebrationEmojis: ['💥', '🦸', '⚡', '🛡️', '🔥', '💢', '🌟', '🤖', '⚙️', '🟢'],
    celebrationMessage: 'Assemble! 💥⚡',
    defaultPalette: 'doomsday',
    palettes: [
      { id: 'doomsday', name: 'Doomsday', bg: '#0A0E0A', bgGradientFrom: '#111A12', bgGradientTo: '#0A0E0A', primary: '#22C55E', primaryForeground: '#0A0E0A', secondary: '#1C2A20', secondaryForeground: '#86EFAC', text: '#E6F2E6', muted: '#4D7C4F', accent: '#4ADE80', font: 'bungee' },
      { id: 'steelstorm', name: 'Steel Storm', bg: '#0B0D10', bgGradientFrom: '#171B20', bgGradientTo: '#0B0D10', primary: '#9CA3AF', primaryForeground: '#0B0D10', secondary: '#1F2937', secondaryForeground: '#D1D5DB', text: '#ECEFF3', muted: '#4B5563', accent: '#34D399', font: 'bungee' },
      { id: 'toxicwar', name: 'Toxic War', bg: '#070A07', bgGradientFrom: '#0E160E', bgGradientTo: '#070A07', primary: '#16A34A', primaryForeground: '#FFFFFF', secondary: '#14281A', secondaryForeground: '#A7F3D0', text: '#DFF5E3', muted: '#3F6F47', accent: '#22C55E', font: 'bungee' },
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
