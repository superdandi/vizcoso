"use client";

import { useEffect } from "react";

export default function ClasesPage() {
  useEffect(() => {
    window.location.replace("/?view=clases");
  }, []);
  return null;
}
