export type Condition = "Like New" | "Excellent" | "Good" | "Fair";

export type Product = {
  slug: string;
  manufacturer: string;
  model: string;
  storageOptions: string[];
  colorOptions: string[];
  conditions: Condition[];
  priceFrom: number;
  releaseYear: number;
  image: string;
  shortDescription: string;
  description: string;
  specs: {
    display: string;
    chip: string;
    camera: string;
    battery: string;
    connectivity: string;
  };
};

export const manufacturers = ["Apple", "Samsung", "Google"] as const;

export const products: Product[] = [
  {
    slug: "iphone-15-pro",
    manufacturer: "Apple",
    model: "iPhone 15 Pro",
    storageOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Natural Titanium", "Blue Titanium", "Black Titanium"],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 649,
    releaseYear: 2023,
    image: "/products/iphone-15-pro.svg",
    shortDescription: "Titanium design with A17 Pro chip and pro camera system.",
    description:
      "The iPhone 15 Pro brings a lightweight titanium frame, the A17 Pro chip, and a versatile pro camera system. Every unit we list is fully tested across battery health, screen, cameras, and connectivity before it's graded and priced.",
    specs: {
      display: "6.1\" Super Retina XDR, 120Hz",
      chip: "A17 Pro",
      camera: "48MP main + 12MP ultra-wide + 12MP telephoto",
      battery: "Up to 23 hours video playback",
      connectivity: "5G, USB-C, Wi-Fi 6E",
    },
  },
  {
    slug: "iphone-14",
    manufacturer: "Apple",
    model: "iPhone 14",
    storageOptions: ["128GB", "256GB"],
    colorOptions: ["Midnight", "Starlight", "Blue", "Purple"],
    conditions: ["Excellent", "Good", "Fair"],
    priceFrom: 379,
    releaseYear: 2022,
    image: "/products/iphone-14.svg",
    shortDescription: "Reliable everyday performance with a dual-camera system.",
    description:
      "The iPhone 14 offers a dependable A15 Bionic chip and a capable dual-camera system, making it a great value pick for everyday use. Each listing includes a full condition grade and battery health reading.",
    specs: {
      display: "6.1\" Super Retina XDR, 60Hz",
      chip: "A15 Bionic",
      camera: "12MP main + 12MP ultra-wide",
      battery: "Up to 20 hours video playback",
      connectivity: "5G, Lightning, Wi-Fi 6",
    },
  },
  {
    slug: "iphone-se-2022",
    manufacturer: "Apple",
    model: "iPhone SE (2022)",
    storageOptions: ["64GB", "128GB"],
    colorOptions: ["Midnight", "Starlight", "Red"],
    conditions: ["Excellent", "Good", "Fair"],
    priceFrom: 189,
    releaseYear: 2022,
    image: "/products/iphone-se-2022.svg",
    shortDescription: "Compact and affordable with a familiar home-button design.",
    description:
      "A compact, budget-friendly option that pairs the classic home-button design with the A15 Bionic chip. A solid entry point for anyone upgrading from an older device.",
    specs: {
      display: "4.7\" Retina HD",
      chip: "A15 Bionic",
      camera: "12MP main",
      battery: "Up to 15 hours video playback",
      connectivity: "5G, Lightning, Wi-Fi 6",
    },
  },
  {
    slug: "galaxy-s23",
    manufacturer: "Samsung",
    model: "Galaxy S23",
    storageOptions: ["128GB", "256GB"],
    colorOptions: ["Phantom Black", "Cream", "Lavender"],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 429,
    releaseYear: 2023,
    image: "/products/galaxy-s23.svg",
    shortDescription: "Compact flagship with a sharp display and strong cameras.",
    description:
      "The Galaxy S23 packs flagship performance into a compact body, with a bright AMOLED display and a versatile triple-camera setup. Fully inspected and graded before listing.",
    specs: {
      display: "6.1\" Dynamic AMOLED 2X, 120Hz",
      chip: "Snapdragon 8 Gen 2",
      camera: "50MP main + 12MP ultra-wide + 10MP telephoto",
      battery: "3,900 mAh",
      connectivity: "5G, USB-C, Wi-Fi 6E",
    },
  },
  {
    slug: "galaxy-s22",
    manufacturer: "Samsung",
    model: "Galaxy S22",
    storageOptions: ["128GB", "256GB"],
    colorOptions: ["Phantom Black", "Phantom White", "Green"],
    conditions: ["Excellent", "Good", "Fair"],
    priceFrom: 329,
    releaseYear: 2022,
    image: "/products/galaxy-s22.svg",
    shortDescription: "A well-rounded flagship with a bright, compact display.",
    description:
      "A well-rounded flagship experience with a sharp compact display and dependable triple-camera system, now available at a lower price point.",
    specs: {
      display: "6.1\" Dynamic AMOLED 2X, 120Hz",
      chip: "Snapdragon 8 Gen 1",
      camera: "50MP main + 12MP ultra-wide + 10MP telephoto",
      battery: "3,700 mAh",
      connectivity: "5G, USB-C, Wi-Fi 6",
    },
  },
  {
    slug: "galaxy-a54",
    manufacturer: "Samsung",
    model: "Galaxy A54",
    storageOptions: ["128GB", "256GB"],
    colorOptions: ["Awesome Graphite", "Awesome Lime", "Awesome Violet"],
    conditions: ["Excellent", "Good", "Fair"],
    priceFrom: 189,
    releaseYear: 2023,
    image: "/products/galaxy-a54.svg",
    shortDescription: "Mid-range value pick with a long-lasting battery.",
    description:
      "A dependable mid-range option offering a smooth 120Hz display and long battery life, ideal for buyers who want solid daily performance at a lower cost.",
    specs: {
      display: "6.4\" Super AMOLED, 120Hz",
      chip: "Exynos 1380",
      camera: "50MP main + 12MP ultra-wide + 5MP macro",
      battery: "5,000 mAh",
      connectivity: "5G, USB-C, Wi-Fi 6",
    },
  },
  {
    slug: "pixel-8",
    manufacturer: "Google",
    model: "Pixel 8",
    storageOptions: ["128GB", "256GB"],
    colorOptions: ["Obsidian", "Hazel", "Rose"],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 399,
    releaseYear: 2023,
    image: "/products/pixel-8.svg",
    shortDescription: "Clean Android experience with a standout camera.",
    description:
      "The Pixel 8 delivers a clean, near-stock Android experience backed by Google's computational photography. A great choice for buyers who want a reliable camera and long software support.",
    specs: {
      display: "6.2\" Actua OLED, 120Hz",
      chip: "Google Tensor G3",
      camera: "50MP main + 12MP ultra-wide",
      battery: "4,575 mAh",
      connectivity: "5G, USB-C, Wi-Fi 7",
    },
  },
  {
    slug: "pixel-7a",
    manufacturer: "Google",
    model: "Pixel 7a",
    storageOptions: ["128GB"],
    colorOptions: ["Charcoal", "Sea", "Snow"],
    conditions: ["Excellent", "Good", "Fair"],
    priceFrom: 249,
    releaseYear: 2023,
    image: "/products/pixel-7a.svg",
    shortDescription: "Flagship-grade camera in a mid-range body.",
    description:
      "The Pixel 7a brings flagship-level camera performance to a mid-range price point, making it one of our best value picks for photography-focused buyers.",
    specs: {
      display: "6.1\" OLED, 90Hz",
      chip: "Google Tensor G2",
      camera: "64MP main + 13MP ultra-wide",
      battery: "4,385 mAh",
      connectivity: "5G, USB-C, Wi-Fi 6E",
    },
  },
];

export function getManufacturers() {
  return Array.from(new Set(products.map((p) => p.manufacturer)));
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
