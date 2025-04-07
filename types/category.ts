import { ImageType } from "./product";

export interface CategoryType {
  id: number;
  documentId: string;
  categoryName: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  mainImage: ImageType;
}
