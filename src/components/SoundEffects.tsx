"use client";

import useButtonSounds from "@/hooks/useButtonSounds";

export default function SoundEffects() {
  useButtonSounds(".card-glass-action, .card-glass-pulse, footer a, nav button");
  return null;
}
