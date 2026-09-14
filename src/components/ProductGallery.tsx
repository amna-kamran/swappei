"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import ProductOptions from "./ProductOptions";
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

  return (
    <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="flex items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-10">
        <ZoomableProductImage
          src={imageSrc}
          alt={`${product.model} in ${color}`}
          imageWidth={product.imageWidth}
          imageHeight={product.imageHeight}
        />
      </div>

      <div>
        {header}
        <ProductOptions product={product} onColorChange={setColor} />
        {footer}
      </div>
    </div>
  );
}
