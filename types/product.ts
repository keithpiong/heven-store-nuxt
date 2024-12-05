// Define the Alias interface
interface Product {
  id: string;
  title: string;
  description?: string;
  price?: string;
  handle?: string;
  thumbnail?: string;
  images?: ProductImage[];
  options?: ProductOptions[];
  variants?: ProductVariant[];
}

// Define the UserDetails interface
interface ProductImage {
  id: string;
  url: string;
  metadata: string;
  product_id: string;
}

// Define the ContactSuggestion interface
interface ProductOptions {
  id: string;
  title: string;
  product_id: string;
}

interface ProductVariant {
  id: string;
  title: string;
  sku: string;
  options: ProductOptions[];
  product_id: string;
}

export type { Product };
