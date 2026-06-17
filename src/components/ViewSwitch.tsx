"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, type ReactNode } from "react";

function SwitchInner({
  normal,
  viewClases,
}: {
  normal: ReactNode;
  viewClases: ReactNode;
}) {
  const searchParams = useSearchParams();
  return searchParams.get("view") === "clases" ? <>{viewClases}</> : <>{normal}</>;
}

export default function ViewSwitch({
  normal,
  viewClases,
}: {
  normal: ReactNode;
  viewClases: ReactNode;
}) {
  return (
    <Suspense fallback={<>{normal}</>}>
      <SwitchInner normal={normal} viewClases={viewClases} />
    </Suspense>
  );
}
