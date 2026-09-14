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
  imageWidth: number;
  imageHeight: number;
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
    image: "/products/iphone-15-pro.jpg",
    imageWidth: 753,
    imageHeight: 928,
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
    image: "/products/iphone-14.jpg",
    imageWidth: 664,
    imageHeight: 879,
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
    imageWidth: 480,
    imageHeight: 480,
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
    image: "/products/galaxy-s23.jpg",
    imageWidth: 823,
    imageHeight: 990,
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
    image: "/products/galaxy-s22.jpg",
    imageWidth: 830,
    imageHeight: 1000,
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
    imageWidth: 480,
    imageHeight: 480,
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
    imageWidth: 480,
    imageHeight: 480,
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
    imageWidth: 480,
    imageHeight: 480,
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
  {
    slug: "iphone-13",
    manufacturer: "Apple",
    model: "iPhone 13",
    storageOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Midnight", "Starlight", "Blue", "Pink", "(PRODUCT)RED"],
    conditions: ["Excellent", "Good", "Fair"],
    priceFrom: 279,
    releaseYear: 2021,
    image: "/products/iphone-13.jpg",
    imageWidth: 679,
    imageHeight: 922,
    shortDescription: "Dependable dual-camera performance at a lower price.",
    description:
      "The iPhone 13 pairs the A15 Bionic chip with a capable dual-camera system in a durable, well-priced package. Every unit we list is fully tested across battery health, screen, cameras, and connectivity before it's graded and priced.",
    specs: {
      display: "6.1\" Super Retina XDR, 60Hz",
      chip: "A15 Bionic",
      camera: "12MP main + 12MP ultra-wide",
      battery: "Up to 19 hours video playback",
      connectivity: "5G, Lightning, Wi-Fi 6",
    },
  },
  {
    slug: "iphone-13-pro",
    manufacturer: "Apple",
    model: "iPhone 13 Pro",
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    colorOptions: ["Graphite", "Gold", "Silver", "Sierra Blue"],
    conditions: ["Excellent", "Good", "Fair"],
    priceFrom: 399,
    releaseYear: 2021,
    image: "/products/iphone-13-pro.jpg",
    imageWidth: 679,
    imageHeight: 868,
    shortDescription: "ProMotion display with a versatile triple-camera system.",
    description:
      "The iPhone 13 Pro brings a smooth 120Hz ProMotion display and a triple-camera system with LiDAR to a compact body. Fully inspected and graded before it's listed.",
    specs: {
      display: "6.1\" Super Retina XDR, ProMotion 120Hz",
      chip: "A15 Bionic",
      camera: "12MP main + 12MP ultra-wide + 12MP telephoto",
      battery: "Up to 22 hours video playback",
      connectivity: "5G, Lightning, Wi-Fi 6",
    },
  },
  {
    slug: "iphone-13-pro-max",
    manufacturer: "Apple",
    model: "iPhone 13 Pro Max",
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    colorOptions: ["Graphite", "Gold", "Silver", "Sierra Blue"],
    conditions: ["Excellent", "Good", "Fair"],
    priceFrom: 439,
    releaseYear: 2021,
    image: "/products/iphone-13-pro-max.jpg",
    imageWidth: 679,
    imageHeight: 864,
    shortDescription: "The largest 13-series display with all-day battery life.",
    description:
      "The iPhone 13 Pro Max pairs a large 6.7\" ProMotion display with the longest battery life in the 13 lineup, plus a triple-camera system with LiDAR. Every unit is graded and tested before listing.",
    specs: {
      display: "6.7\" Super Retina XDR, ProMotion 120Hz",
      chip: "A15 Bionic",
      camera: "12MP main + 12MP ultra-wide + 12MP telephoto",
      battery: "Up to 28 hours video playback",
      connectivity: "5G, Lightning, Wi-Fi 6",
    },
  },
  {
    slug: "iphone-14-pro",
    manufacturer: "Apple",
    model: "iPhone 14 Pro",
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    colorOptions: ["Space Black", "Silver", "Gold", "Deep Purple"],
    conditions: ["Excellent", "Good", "Fair"],
    priceFrom: 549,
    releaseYear: 2022,
    image: "/products/iphone-14-pro.jpg",
    imageWidth: 679,
    imageHeight: 835,
    shortDescription: "Dynamic Island and a 48MP main camera in a Pro body.",
    description:
      "The iPhone 14 Pro introduces the Dynamic Island and a 48MP main camera alongside the A16 Bionic chip, all in a durable stainless steel frame. Fully inspected and graded before it's listed.",
    specs: {
      display: "6.1\" Super Retina XDR, ProMotion 120Hz",
      chip: "A16 Bionic",
      camera: "48MP main + 12MP ultra-wide + 12MP telephoto",
      battery: "Up to 23 hours video playback",
      connectivity: "5G, Lightning, Wi-Fi 6",
    },
  },
  {
    slug: "iphone-14-pro-max",
    manufacturer: "Apple",
    model: "iPhone 14 Pro Max",
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    colorOptions: ["Space Black", "Silver", "Gold", "Deep Purple"],
    conditions: ["Excellent", "Good", "Fair"],
    priceFrom: 599,
    releaseYear: 2022,
    image: "/products/iphone-14-pro-max.jpg",
    imageWidth: 679,
    imageHeight: 847,
    shortDescription: "The biggest display and battery life in the 14 lineup.",
    description:
      "The iPhone 14 Pro Max combines the Dynamic Island and 48MP main camera with a large 6.7\" display and the longest battery life in the 14 series. Every unit we list is fully tested before it's graded and priced.",
    specs: {
      display: "6.7\" Super Retina XDR, ProMotion 120Hz",
      chip: "A16 Bionic",
      camera: "48MP main + 12MP ultra-wide + 12MP telephoto",
      battery: "Up to 29 hours video playback",
      connectivity: "5G, Lightning, Wi-Fi 6",
    },
  },
  {
    slug: "iphone-15",
    manufacturer: "Apple",
    model: "iPhone 15",
    storageOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Black", "Blue", "Green", "Yellow", "Pink"],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 499,
    releaseYear: 2023,
    image: "/products/iphone-15.jpg",
    imageWidth: 670,
    imageHeight: 879,
    shortDescription: "USB-C and a 48MP main camera in an everyday iPhone.",
    description:
      "The iPhone 15 brings USB-C, a 48MP main camera, and the Dynamic Island to Apple's mainstream lineup, backed by the A16 Bionic chip. Each listing includes a full condition grade and battery health reading.",
    specs: {
      display: "6.1\" Super Retina XDR, 60Hz",
      chip: "A16 Bionic",
      camera: "48MP main + 12MP ultra-wide",
      battery: "Up to 20 hours video playback",
      connectivity: "5G, USB-C, Wi-Fi 6",
    },
  },
  {
    slug: "iphone-15-pro-max",
    manufacturer: "Apple",
    model: "iPhone 15 Pro Max",
    storageOptions: ["256GB", "512GB", "1TB"],
    colorOptions: [
      "Natural Titanium",
      "Blue Titanium",
      "White Titanium",
      "Black Titanium",
    ],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 849,
    releaseYear: 2023,
    image: "/products/iphone-15-pro-max.jpg",
    imageWidth: 679,
    imageHeight: 834,
    shortDescription: "Titanium design with a 5x telephoto camera.",
    description:
      "The iPhone 15 Pro Max pairs a lightweight titanium frame with the A17 Pro chip and a 5x telephoto camera, in Apple's largest Pro display size. Every unit we list is fully tested across battery health, screen, cameras, and connectivity before it's graded and priced.",
    specs: {
      display: "6.7\" Super Retina XDR, ProMotion 120Hz",
      chip: "A17 Pro",
      camera: "48MP main + 12MP ultra-wide + 12MP telephoto (5x)",
      battery: "Up to 29 hours video playback",
      connectivity: "5G, USB-C, Wi-Fi 6E",
    },
  },
  {
    slug: "iphone-16",
    manufacturer: "Apple",
    model: "iPhone 16",
    storageOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Black", "White", "Pink", "Teal", "Ultramarine"],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 579,
    releaseYear: 2024,
    image: "/products/iphone-16.jpg",
    imageWidth: 544,
    imageHeight: 667,
    shortDescription: "A18 chip and a dedicated Camera Control button.",
    description:
      "The iPhone 16 introduces the A18 chip and a dedicated Camera Control button alongside a 48MP main camera and USB-C. Each listing includes a full condition grade and battery health reading.",
    specs: {
      display: "6.1\" Super Retina XDR, 60Hz",
      chip: "A18",
      camera: "48MP main + 12MP ultra-wide",
      battery: "Up to 22 hours video playback",
      connectivity: "5G, USB-C, Wi-Fi 7",
    },
  },
  {
    slug: "iphone-16-plus",
    manufacturer: "Apple",
    model: "iPhone 16 Plus",
    storageOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Black", "White", "Pink", "Teal", "Ultramarine"],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 629,
    releaseYear: 2024,
    image: "/products/iphone-16-plus.jpg",
    imageWidth: 1226,
    imageHeight: 1500,
    shortDescription: "The A18 chip with a larger display and longer battery life.",
    description:
      "The iPhone 16 Plus offers the same A18 chip and Camera Control button as the iPhone 16, with a larger 6.7\" display and longer battery life. Fully inspected and graded before it's listed.",
    specs: {
      display: "6.7\" Super Retina XDR, 60Hz",
      chip: "A18",
      camera: "48MP main + 12MP ultra-wide",
      battery: "Up to 27 hours video playback",
      connectivity: "5G, USB-C, Wi-Fi 7",
    },
  },
  {
    slug: "iphone-16-pro",
    manufacturer: "Apple",
    model: "iPhone 16 Pro",
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    colorOptions: [
      "Black Titanium",
      "White Titanium",
      "Natural Titanium",
      "Desert Titanium",
    ],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 779,
    releaseYear: 2024,
    image: "/products/iphone-16-pro.jpg",
    imageWidth: 971,
    imageHeight: 1200,
    shortDescription: "A18 Pro with a 5x telephoto camera in a titanium frame.",
    description:
      "The iPhone 16 Pro pairs the A18 Pro chip with a 48MP ultra-wide and 5x telephoto camera, in a lightweight titanium frame with a larger 6.3\" ProMotion display. Every unit we list is fully tested before it's graded and priced.",
    specs: {
      display: "6.3\" Super Retina XDR, ProMotion 120Hz",
      chip: "A18 Pro",
      camera: "48MP main + 48MP ultra-wide + 12MP telephoto (5x)",
      battery: "Up to 27 hours video playback",
      connectivity: "5G, USB-C, Wi-Fi 7",
    },
  },
  {
    slug: "iphone-16-pro-max",
    manufacturer: "Apple",
    model: "iPhone 16 Pro Max",
    storageOptions: ["256GB", "512GB", "1TB"],
    colorOptions: [
      "Black Titanium",
      "White Titanium",
      "Natural Titanium",
      "Desert Titanium",
    ],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 879,
    releaseYear: 2024,
    image: "/products/iphone-16-pro-max.jpg",
    imageWidth: 973,
    imageHeight: 1200,
    shortDescription: "Apple's largest display with all-day battery life.",
    description:
      "The iPhone 16 Pro Max combines the A18 Pro chip and 5x telephoto camera with Apple's largest 6.9\" display and longest battery life. Every unit we list is fully tested across battery health, screen, cameras, and connectivity before it's graded and priced.",
    specs: {
      display: "6.9\" Super Retina XDR, ProMotion 120Hz",
      chip: "A18 Pro",
      camera: "48MP main + 48MP ultra-wide + 12MP telephoto (5x)",
      battery: "Up to 33 hours video playback",
      connectivity: "5G, USB-C, Wi-Fi 7",
    },
  },
  {
    slug: "iphone-15-plus",
    manufacturer: "Apple",
    model: "iPhone 15 Plus",
    storageOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Black", "Blue", "Green", "Yellow", "Pink"],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 549,
    releaseYear: 2023,
    image: "/products/iphone-15-plus.jpg",
    imageWidth: 679,
    imageHeight: 906,
    shortDescription: "The iPhone 15's larger display with all-day battery life.",
    description:
      "The iPhone 15 Plus brings USB-C, a 48MP main camera, and the Dynamic Island to a larger 6.7\" display with longer battery life than the standard iPhone 15. Each listing includes a full condition grade and battery health reading.",
    specs: {
      display: "6.7\" Super Retina XDR, 60Hz",
      chip: "A16 Bionic",
      camera: "48MP main + 12MP ultra-wide",
      battery: "Up to 26 hours video playback",
      connectivity: "5G, USB-C, Wi-Fi 6",
    },
  },
  {
    slug: "galaxy-s22-ultra",
    manufacturer: "Samsung",
    model: "Galaxy S22 Ultra",
    storageOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Phantom Black", "Phantom White", "Burgundy", "Green"],
    conditions: ["Excellent", "Good", "Fair"],
    priceFrom: 449,
    releaseYear: 2022,
    image: "/products/galaxy-s22-ultra.jpg",
    imageWidth: 971,
    imageHeight: 1000,
    shortDescription: "Built-in S Pen with a versatile quad-camera system.",
    description:
      "The Galaxy S22 Ultra pairs a built-in S Pen with a quad-camera system covering ultra-wide, wide, and two telephoto lenses, in a large 6.8\" display. Fully inspected and graded before listing.",
    specs: {
      display: "6.8\" Dynamic AMOLED 2X, 120Hz",
      chip: "Snapdragon 8 Gen 1",
      camera: "108MP main + 12MP ultra-wide + 10MP telephoto (3x) + 10MP telephoto (10x)",
      battery: "5,000 mAh",
      connectivity: "5G, USB-C, Wi-Fi 6",
    },
  },
  {
    slug: "galaxy-s23-ultra",
    manufacturer: "Samsung",
    model: "Galaxy S23 Ultra",
    storageOptions: ["256GB", "512GB", "1TB"],
    colorOptions: ["Phantom Black", "Cream", "Green", "Lavender"],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 649,
    releaseYear: 2023,
    image: "/products/galaxy-s23-ultra.jpg",
    imageWidth: 1000,
    imageHeight: 1021,
    shortDescription: "A 200MP main camera with a built-in S Pen.",
    description:
      "The Galaxy S23 Ultra steps up to a 200MP main camera alongside a built-in S Pen and a quad-camera system with two telephoto lenses. Every unit we list is fully tested before it's graded and priced.",
    specs: {
      display: "6.8\" Dynamic AMOLED 2X, 120Hz",
      chip: "Snapdragon 8 Gen 2 for Galaxy",
      camera: "200MP main + 12MP ultra-wide + 10MP telephoto (3x) + 10MP telephoto (10x)",
      battery: "5,000 mAh",
      connectivity: "5G, USB-C, Wi-Fi 6E",
    },
  },
  {
    slug: "galaxy-s24",
    manufacturer: "Samsung",
    model: "Galaxy S24",
    storageOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow"],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 549,
    releaseYear: 2024,
    image: "/products/galaxy-s24.jpg",
    imageWidth: 818,
    imageHeight: 1000,
    shortDescription: "A compact flagship with Galaxy AI features.",
    description:
      "The Galaxy S24 brings Galaxy AI features and a sharper triple-camera system to a compact, flat-edged design with a bright 120Hz display. Each listing includes a full condition grade and battery health reading.",
    specs: {
      display: "6.2\" Dynamic AMOLED 2X, 120Hz",
      chip: "Snapdragon 8 Gen 3 for Galaxy",
      camera: "50MP main + 12MP ultra-wide + 10MP telephoto (3x)",
      battery: "4,000 mAh",
      connectivity: "5G, USB-C, Wi-Fi 6E",
    },
  },
  {
    slug: "galaxy-s24-ultra",
    manufacturer: "Samsung",
    model: "Galaxy S24 Ultra",
    storageOptions: ["256GB", "512GB", "1TB"],
    colorOptions: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 799,
    releaseYear: 2024,
    image: "/products/galaxy-s24-ultra.jpg",
    imageWidth: 1490,
    imageHeight: 1500,
    shortDescription: "Titanium frame with a 5x periscope telephoto camera.",
    description:
      "The Galaxy S24 Ultra brings a titanium frame, a built-in S Pen, and a 5x periscope telephoto camera to Samsung's largest flagship display. Every unit we list is fully tested across battery health, screen, cameras, and connectivity before it's graded and priced.",
    specs: {
      display: "6.8\" Dynamic AMOLED 2X, 120Hz",
      chip: "Snapdragon 8 Gen 3 for Galaxy",
      camera: "200MP main + 12MP ultra-wide + 50MP telephoto (5x) + 10MP telephoto (3x)",
      battery: "5,000 mAh",
      connectivity: "5G, USB-C, Wi-Fi 7",
    },
  },
  {
    slug: "galaxy-s25",
    manufacturer: "Samsung",
    model: "Galaxy S25",
    storageOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Navy", "Icyblue", "Silver Shadow", "Mint"],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 649,
    releaseYear: 2025,
    image: "/products/galaxy-s25.jpg",
    imageWidth: 1078,
    imageHeight: 1302,
    shortDescription: "Samsung's latest compact flagship with Galaxy AI.",
    description:
      "The Galaxy S25 pairs the latest Snapdragon chip with expanded Galaxy AI features in a compact, durable design. Fully inspected and graded before listing.",
    specs: {
      display: "6.2\" Dynamic AMOLED 2X, 120Hz",
      chip: "Snapdragon 8 Elite for Galaxy",
      camera: "50MP main + 12MP ultra-wide + 10MP telephoto (3x)",
      battery: "4,000 mAh",
      connectivity: "5G, USB-C, Wi-Fi 7",
    },
  },
  {
    slug: "galaxy-s25-ultra",
    manufacturer: "Samsung",
    model: "Galaxy S25 Ultra",
    storageOptions: ["256GB", "512GB", "1TB"],
    colorOptions: [
      "Titanium Black",
      "Titanium Gray",
      "Titanium Silverblue",
      "Titanium Whitesilver",
    ],
    conditions: ["Like New", "Excellent", "Good"],
    priceFrom: 899,
    releaseYear: 2025,
    image: "/products/galaxy-s25-ultra.jpg",
    imageWidth: 822,
    imageHeight: 1000,
    shortDescription: "Samsung's flagship with a built-in S Pen and 5x zoom.",
    description:
      "The Galaxy S25 Ultra tops Samsung's lineup with a titanium frame, built-in S Pen, and a quad-camera system with 5x periscope zoom. Every unit we list is fully tested before it's graded and priced.",
    specs: {
      display: "6.9\" Dynamic AMOLED 2X, 120Hz",
      chip: "Snapdragon 8 Elite for Galaxy",
      camera: "200MP main + 50MP ultra-wide + 50MP telephoto (5x) + 10MP telephoto (3x)",
      battery: "5,000 mAh",
      connectivity: "5G, USB-C, Wi-Fi 7",
    },
  },
];

export function getManufacturers() {
  return Array.from(new Set(products.map((p) => p.manufacturer)));
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

const STORAGE_STEP = 0.12;
const CONDITION_STEP = 0.08;

// priceFrom is the floor price: smallest storage, worst listed condition.
// Larger storage and better condition each add a percentage on top of that floor.
export function getPrice(
  product: Product,
  storage: string,
  condition: Condition
) {
  const storageIndex = Math.max(0, product.storageOptions.indexOf(storage));
  const conditionsWorstFirst = [...product.conditions].reverse();
  const conditionIndex = Math.max(0, conditionsWorstFirst.indexOf(condition));

  const price =
    product.priceFrom *
    (1 + storageIndex * STORAGE_STEP) *
    (1 + conditionIndex * CONDITION_STEP);

  return Math.round(price);
}
