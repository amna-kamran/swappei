"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import ProductOptions from "./ProductOptions";
import ProductThumbnails from "./ProductThumbnails";
import ZoomableProductImage from "./ZoomableProductImage";

export default function ProductGallery({
  product,
  header,
  footer,
}: {
  product: Product;
  header: React.ReactNode;
  footer: React.ReactNode;
}) {
  const [color, setColor] = useState<string>(product.colorOptions[0]);
  const imageSrc = product.imagesByColor?.[color] ?? product.image;

  const thumbnails = product.imagesByColor
    ? product.colorOptions
        .filter((c) => product.imagesByColor?.[c])
        .map((c) => ({ color: c, src: product.imagesByColor![c] }))
    : [];

  return (
    <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="flex flex-col gap-3 sm:flex-row">
        {thumbnails.length > 1 && (
          <ProductThumbnails
            images={thumbnails}
            selected={color}
            onSelect={setColor}
          />
        )}
        <div className="flex-1 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <ZoomableProductImage
            src={imageSrc}
            alt={`${product.model} in ${color}`}
            imageWidth={product.imageWidth}
            imageHeight={product.imageHeight}
          />
        </div>
      </div>

      <div>
        {header}
        <ProductOptions product={product} color={color} onColorChange={setColor} />
        {footer}
      </div>
    </div>
  );
}
