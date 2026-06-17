"use client";

import { useEffect } from "react";

export default function FormacionPage() {
  useEffect(() => {
    window.location.replace("/?view=formacion");
  }, []);
  return null;
}
