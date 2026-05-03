import {
  Heart,
  Brain,
  GraduationCap,
  Smile,
  Wallet,
  Repeat,
  Compass,
  Scale,
  Hammer,
  Sparkles,
  MessageCircle,
  Shield,
  Sprout,
  HandHeart,
  Flame,
  Swords,
  Target,
  Hourglass,
  Clock,
  BookOpen,
  Fence,
  HeartHandshake,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

// Keyed by stable attribute key (see layout.ts ATTRIBUTE_KEYS).
export const ICONS: Record<string, LucideIcon> = {
  // Self
  "physical-health": Heart,
  "mental-health": Brain,
  "intellectual-growth": GraduationCap,
  "emotional-regulation": Smile,
  "financial-stability": Wallet,
  "discipline-habits": Repeat,
  "purpose-meaning": Compass,
  "integrity-values": Scale,
  "skills-mastery": Hammer,
  spirituality: Sparkles,

  // Partner
  communication: MessageCircle,
  "trust-honesty": Shield,
  "shared-values": Sprout,
  "emotional-support": HandHeart,
  intimacy: Flame,
  "conflict-resolution": Swords,
  "shared-goals": Target,
  patience: Hourglass,

  // Children
  "presence-time": Clock,
  education: BookOpen,
  boundaries: Fence,
  "unconditional-love": HeartHandshake,
  "modeling-values": UserCheck,
};
