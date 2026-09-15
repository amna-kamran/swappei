"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const ZOOM = 2.2;

type ZoomState = {
  lensX: number;
  lensY: number;
  lensW: number;
  lensH: number;
  bgX: number;
  bgY: number;
  bgW: number;
  bgH: number;
};

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
  const boxRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [zoom, setZoom] = useState<ZoomState | null>(null);

  function updateFromEvent(e: React.MouseEvent) {
    const rect = boxRef.current?.getBoundingClientRect();
    if (!rect) return;

    const boxW = rect.width;
    const boxH = rect.height;

    // How the image sits inside the box under object-contain.
    const scale = Math.min(boxW / imageWidth, boxH / imageHeight);
    const dispW = imageWidth * scale;
    const dispH = imageHeight * scale;
    const offsetX = (boxW - dispW) / 2;
    const offsetY = (boxH - dispH) / 2;

    // Cursor position, clamped to the displayed image (not the empty letterbox area).
    const cursorX = Math.min(Math.max(e.clientX - rect.left, offsetX), offsetX + dispW);
    const cursorY = Math.min(Math.max(e.clientY - rect.top, offsetY), offsetY + dispH);

    const lensW = dispW / ZOOM;
    const lensH = dispH / ZOOM;

    // Lens top-left in image-display space, clamped to stay within the image.
    let lensXInImage = cursorX - offsetX - lensW / 2;
    let lensYInImage = cursorY - offsetY - lensH / 2;
    lensXInImage = Math.min(Math.max(lensXInImage, 0), Math.max(dispW - lensW, 0));
    lensYInImage = Math.min(Math.max(lensYInImage, 0), Math.max(dispH - lensH, 0));

    setZoom({
      lensX: lensXInImage + offsetX,
      lensY: lensYInImage + offsetY,
      lensW,
      lensH,
      bgX: -lensXInImage * ZOOM,
      bgY: -lensYInImage * ZOOM,
      bgW: dispW * ZOOM,
      bgH: dispH * ZOOM,
    });
  }

  return (
    <div
      ref={boxRef}
      className="relative h-96 w-full cursor-crosshair"
      onMouseEnter={(e) => {
        setActive(true);
        updateFromEvent(e);
      }}
      onMouseLeave={() => setActive(false)}
      onMouseMove={updateFromEvent}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 420px, 350px"
        className="object-contain"
        priority
      />

      {active && zoom && (
        <>
          <div
            className="pointer-events-none absolute border-2 border-brand-500 bg-brand-500/10"
            style={{
              width: zoom.lensW,
              height: zoom.lensH,
              left: zoom.lensX,
              top: zoom.lensY,
            }}
          />
          <div
            className="pointer-events-none absolute left-full top-0 z-20 ml-4 hidden overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl lg:block"
            style={{
              width: zoom.lensW * ZOOM,
              height: zoom.lensH * ZOOM,
              backgroundImage: `url(${src})`,
              backgroundSize: `${zoom.bgW}px ${zoom.bgH}px`,
              backgroundPosition: `${zoom.bgX}px ${zoom.bgY}px`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </>
      )}
    </div>
  );
}
