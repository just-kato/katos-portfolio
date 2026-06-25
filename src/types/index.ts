export interface Project {
  title: string;
  meta: string;
  description: string;
  image: string;
  imageBg: string;
  href?: string;
  imagePosition?: string;
}

export interface FeaturedProject {
  title: string;
  meta: string;
  description: string;
  image: string;
  imageBg: string;
  href: string;
}

export interface TrackStat {
  value: number;
  prefix?: '−' | '+';
  suffix?: '%';
  label: string;
  description: string;
  accent: string;
  bars: readonly [number, number, number, number, number];
}

export interface Testimonial {
  quote: string;
  author: string;
  accent: string;
}

export interface BrandMark {
  name: string;
  image: string;
  bg: string;
  pad: number;
}
