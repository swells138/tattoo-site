"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const categoriesFrom = (items) => {
  const set = new Set(items.map((i) => i.category || "Uncategorized"));
  return ["All", ...Array.from(set)];
};

export default function GalleryClient({ items }) {
  const categories = useMemo(() => categoriesFrom(items), [items]);
  const [active, setActive] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active, items]
  );

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setLightboxIdx(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Filters */}
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 text-sm ring-1 transition ${
              active === c
                ? "bg-red-600 text-white ring-red-500"
                : "text-red-200 ring-white/15 hover:text-white hover:ring-red-400/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t, idx) => (
          <button
            key={`${t.src}-${idx}`}
            onClick={() => setLightboxIdx(idx)}
            className="group relative block overflow-hidden rounded-xl ring-1 ring-white/10 transition hover:scale-[1.01] hover:ring-red-400/40 focus:outline-none focus:ring-2 focus:ring-red-400"
            aria-label={`Open image: ${t.alt}`}
          >
            <div className="relative w-full aspect-[4/5]">
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition group-hover:scale-[1.02]"
                priority={idx < 3}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
            <div className="pointer-events-none absolute bottom-2 left-2 rounded bg-black/60 px-2 py-1 text-xs text-red-200 opacity-0 transition group-hover:opacity-100">
              {t.category}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute right-2 top-2 rounded-md bg-black/70 px-3 py-1 text-sm ring-1 ring-white/20 hover:ring-red-400/40"
            >
              Close
            </button>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={filtered[lightboxIdx].src}
                alt={filtered[lightboxIdx].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
