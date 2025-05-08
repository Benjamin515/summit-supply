import { Categories } from "@/types/types";

// Define the entire gear data as an array of Categories objects with detailed collection descriptions
export const categories: Categories[] = [
  {
    category: "Tops", // Parent category
    description:
      "Explore base layers, mid layers, and outer layers for all conditions.",
    subcategories: [
      {
        category: "Base Layers",
        description:
          "Essential base layers to keep you comfortable in all conditions.",
        collection: [
          {
            name: "Moisture-wicking T-shirts",
            description:
              "Lightweight and breathable T-shirts that help manage sweat during high-intensity activities.",
          },
          {
            name: "Long-sleeve thermal shirts",
            description:
              "Keep you warm in cold conditions while providing moisture control.",
          },
        ],
      },
      {
        category: "Mid Layers",
        description:
          "Mid layers that provide insulation and comfort in moderate temperatures.",
        collection: [
          {
            name: "Fleece jackets",
            description:
              "Comfortable and insulating fleece jackets perfect for moderate temperatures.",
          },
          {
            name: "Insulated pullovers",
            description:
              "Soft and warm pullovers offering extra insulation for chilly days.",
          },
        ],
      },
      {
        category: "Outer Layers",
        description:
          "Protective outer layers to shield you from wind and rain.",
        collection: [
          {
            name: "Waterproof or rain jackets",
            description:
              "Protective jackets designed to keep you dry in wet weather.",
          },
          {
            name: "Windbreakers",
            description:
              "Lightweight jackets that shield you from wind while maintaining breathability.",
          },
        ],
      },
    ],
  },
  {
    category: "Bottoms",
    description: "Hiking, convertible, and cargo pants built for durability.",
    collection: [
      {
        name: "Hiking pants",
        description: "Durable and flexible pants built for long hikes.",
      },
      {
        name: "Convertible (zip-off) pants",
        description:
          "Versatile pants that convert into shorts, ideal for changing weather.",
      },
      {
        name: "Cargo pants",
        description:
          "Pants with multiple pockets for carrying essentials during outdoor adventures.",
      },
      {
        name: "Rain pants",
        description:
          "Water-resistant pants designed to keep you dry in rainy conditions.",
      },
    ],
  },
  {
    category: "Footwear",
    description: "High-performance hiking boots, trail runners, and more.",
    collection: [
      {
        name: "Hiking boots",
        description: "Sturdy and supportive boots built for rugged terrain.",
      },
      {
        name: "Trail running shoes",
        description:
          "Lightweight and cushioned shoes designed for running on trails.",
      },
      {
        name: "Camp sandals",
        description:
          "Comfortable sandals perfect for camp relaxation after a day of hiking.",
      },
      {
        name: "Moisture-wicking socks",
        description:
          "Socks engineered to keep your feet dry and comfortable during activities.",
      },
    ],
  },
  {
    category: "Headwear",
    description: "Caps, beanies, and other headgear to keep you protected.",
    collection: [
      {
        name: "Caps",
        description: "Casual and protective caps ideal for sunny days.",
      },
      {
        name: "Wide-brim hats",
        description: "Hats with broad brims offering maximum sun protection.",
      },
      {
        name: "Beanies",
        description: "Warm and snug headwear designed for cold weather.",
      },
      {
        name: "Buffs",
        description:
          "Multi-functional headwear that can be worn in various ways for sun and wind protection.",
      },
    ],
  },
  {
    category: "Accessories",
    description: "Gloves, neck gaiters, sunglasses, and other essentials.",
    collection: [
      {
        name: "Insulated or touchscreen-compatible gloves",
        description:
          "Gloves designed to keep your hands warm while allowing touchscreen use.",
      },
      {
        name: "Neck gaiters",
        description:
          "Versatile accessories that can protect your neck from cold and wind.",
      },
      {
        name: "Sunglasses",
        description:
          "High-quality sunglasses to protect your eyes from UV rays.",
      },
      {
        name: "Belts",
        description:
          "Durable belts designed to secure your outdoor gear comfortably.",
      },
    ],
  },
];
