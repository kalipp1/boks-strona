export type GalleryItemSize =
  | "large"
  | "wide"
  | "tall"
  | "standard";

export type GalleryContentKey =
  | "training"
  | "sparring"
  | "club"
  | "community"
  | "technique"
  | "ring";

export interface GalleryItem {
  id: string;
  contentKey: GalleryContentKey;
  image: string | null;
  size: GalleryItemSize;
}