"use client";

import { useEffect } from "react";
import { playHoverEnter, playHoverLeave, playClick } from "@/lib/sounds";

export default function useButtonSounds(selector: string) {
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return;

    const els = document.querySelectorAll<HTMLElement>(selector);
    if (!els.length) return;

    const onEnter = () => playHoverEnter();
    const onLeave = () => playHoverLeave();
    const onClick = () => playClick();

    els.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      el.addEventListener("click", onClick);
    });

    return () => {
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.removeEventListener("click", onClick);
      });
    };
  }, [selector]);
}
