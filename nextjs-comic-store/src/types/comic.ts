export interface Comic {
  _id: string;
  title: string;
  issue: number;
  slug: { current: string };
  description?: string;
  price: number;
  stock: number;
  releaseDate?: string;
  coverImage?: string;
  categories?: string[];
  authors?: string[];
  artists?: string[];
  publisher?: string;
}