"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import ProductOptions from "./ProductOptions";
import ProductThumbnails from "./ProductThumbnails";
import ZoomableProductImage from "./ZoomableProductImage";
import ProductImageModal from "./ProductImageModal";

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
  const [modalOpen, setModalOpen] = useState(false);
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
        <div className="flex flex-1 items-center justify-center p-6 sm:p-8">
          <ZoomableProductImage
            src={imageSrc}
            alt={`${product.model} in ${color}`}
            imageWidth={product.imageWidth}
            imageHeight={product.imageHeight}
            onExpand={() => setModalOpen(true)}
          />
        </div>
      </div>

      <div>
        {header}
        <ProductOptions product={product} color={color} onColorChange={setColor} />
        {footer}
      </div>

      {modalOpen && (
        <ProductImageModal
          product={product}
          color={color}
          imageSrc={imageSrc}
          thumbnails={thumbnails}
          onSelectColor={setColor}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
