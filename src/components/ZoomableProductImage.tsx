"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const ZOOM = 2.2;
const LENS_SIZE = 100 / ZOOM; // percent of the image's width/height

export default function ZoomableProductImage({
  src,
  alt,
  imageWidth,
  imageHeight,
}: {
  src: string;
  alt: string;
  imageWidth: number;
  imageHeight: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [lens, setLens] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
    const maxPos = 100 - LENS_SIZE;
    setLens({
      x: Math.min(Math.max(xPct - LENS_SIZE / 2, 0), maxPos),
      y: Math.min(Math.max(yPct - LENS_SIZE / 2, 0), maxPos),
    });
  }

  const maxPos = 100 - LENS_SIZE;
  const bgX = maxPos > 0 ? (lens.x / maxPos) * 100 : 0;
  const bgY = maxPos > 0 ? (lens.y / maxPos) * 100 : 0;

  return (
    <div
      ref={wrapperRef}
      className="relative h-80 w-auto cursor-crosshair"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={src}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        className="h-80 w-auto"
        priority
      />

      {active && (
        <>
          <div
            className="pointer-events-none absolute border-2 border-brand-500 bg-brand-500/10"
            style={{
              width: `${LENS_SIZE}%`,
              height: `${LENS_SIZE}%`,
              left: `${lens.x}%`,
              top: `${lens.y}%`,
            }}
          />
          <div
            className="pointer-events-none absolute left-full top-0 z-20 ml-4 hidden h-80 w-80 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl lg:block"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: `${ZOOM * 100}% ${ZOOM * 100}%`,
              backgroundPosition: `${bgX}% ${bgY}%`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </>
      )}
    </div>
  );
}
