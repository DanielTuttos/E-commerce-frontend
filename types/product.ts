export type ProductType = {
  id: number;
  productName: string;
  slug: string;
  description: string;
  active: boolean;
  isFeatured: boolean;
  origin: string;
  taste: string;
  price: number;
  images: ImageType[];
  category: CategoryType;
};

export type ImageType = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: {
    large: FormatsType;
    small: FormatsType;
    medium: FormatsType;
    thumbnail: FormatsType;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type FormatsType = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

export type CategoryType = {
  id: number;
  documentId: string;
  categoryName: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
