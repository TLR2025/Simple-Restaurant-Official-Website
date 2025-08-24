export type IMG = {
  url: string;
  width: number;
  height: number;
  alt: string;
  blurDataURL: string;
} & Record<string, any>