export interface Product {
  id: string; // Unique identifier for the product
  collectionGroup: string; // Name of the relevant collection group
  name?: string; // Name of the product
  description: string; // Short description of the product
  originalPrice: number; // Original Price in KES (Kenyan Shillings)
  discountedPrice: number; // Discounted Price in KES (Kenyan Shillings)
  discount?: number; // Optional discount percentage
  image: string; // Main image of the product
  availability: "in_stock" | "out_of_stock" | "coming_soon"; // Product availability status
  images: string[]; // Array of additional product images
  link: string; // Link to the product page or external store page
}

export interface GearCategory {
  category: string; // The name of the category (e.g., 'Base Layers', 'Tops')
  products?: Product[]; // List of products
  subcategories?: GearCategory[]; // Optional subcategories (e.g., for 'Tops' category)
}

// Define a structure for each collection item
export interface CollectionItem {
  name: string;
  description: string;
}

// Update the Categories interface to use CollectionItem for collections
export interface Categories {
  category: string; // The name of the category (e.g., 'Base Layers', 'Tops')
  description: string;
  collection?: CollectionItem[]; // List of items as objects with name and description
  subcategories?: Categories[]; // Optional subcategories (for categories like 'Tops')
}

/* export interface Testimonial {
  name: string;
  location: string;
  review: string;
  rating: number; // Rating from 1 to 5
  image?: string; // Optional image (avatar)
} */

export interface Location {
  country: string; // Required
  countyOrState: string; // Required
  town?: string; // Optional
  neighborhood?: string; // Optional
  postalCode?: string; // Optional
}

export interface Testimonial {
  name: string;
  location: Location; // Location is now an object
  review: string;
  rating: number;
  image?: string; // Optional image for the testimonial
}
