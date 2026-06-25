import type { FeaturedProject, Project, TrackStat, Testimonial, BrandMark } from '../types';
import { T } from '../tokens';

import toastedsesametherapyImg from '../assets/toastedsesametherapy.png';
import controllerfxImg from '../assets/controllerfx.png';
import mochiTimerImg from '../assets/mochi-timer.png';
import financeAppImg from '../assets/finance-app.png';
import toastyTidbitsImg from '../assets/toasty-tidbits.png';
import pothosImg from '../assets/pothos.jpg';
import mrMochiImg from '../assets/mr-mochi.png';
import hffImg from '../assets/hff.png';
import ooriImg from '../assets/oori.png';

export const FEATURED: FeaturedProject = {
  title: 'Toasted Sesame Therapy',
  meta: 'HEALTHCARE SERVICES · TYPESCRIPT · FULL STACK',
  description:
    'A booking and intake site for a private therapy practice. I built the entire full stack and was the client\'s sole point of contact, turning a brand-new idea into a calm, working product.',
  image: toastedsesametherapyImg,
  imageBg: T.imageBgWarm,
  href: 'https://toastedsesametherapy.com',
};

export const PROJECTS: Project[] = [
  {
    title: 'Controller FX',
    meta: 'EDUCATION SERVICES · WEBFLOW',
    description:
      'Educational hub for Controller FX, a Forex trading brand. Learning materials, "Forex Playbook" strategy guides, and links to live trading streams.',
    image: controllerfxImg,
    imageBg: T.ink,
    href: 'https://controllerfx.com',
    imagePosition: 'top',
  },
  {
    title: 'Mochi Timer',
    meta: 'PRODUCTIVITY APP · TYPESCRIPT',
    description:
      'A playful Pomodoro focus timer. Custom presets, streaks that survive a refresh, sound cues.',
    image: mochiTimerImg,
    imageBg: T.imageBgLight,
    imagePosition: 'top',
  },
  {
    title: 'Finance Dashboard',
    meta: 'PERSONAL FINANCE APP · TYPESCRIPT ',
    description:
      'Budgeting and net-worth tracker. The project that pulled me toward real-estate finance.',
    image: financeAppImg,
    imageBg: T.ink,
    imagePosition: 'top left',
  },
];

export const TRACK_STATS: TrackStat[] = [
  {
    value: 25,
    prefix: '−',
    suffix: '%',
    label: 'Customer drop-off',
    description: 'Reworked how we welcomed & followed up with people.',
    accent: T.pink,
    bars: [92, 76, 60, 46, 34],
  },
  {
    value: 30,
    prefix: '+',
    suffix: '%',
    label: 'Newcomers retained',
    description: 'Made the first experience feel personal and easy.',
    accent: T.lavender,
    bars: [34, 50, 64, 80, 95],
  },
  {
    value: 80,
    suffix: '%',
    label: 'Caught before customers',
    description: 'Put checks in place to fix issues before anyone hit them.',
    accent: T.mint,
    bars: [58, 72, 66, 84, 90],
  },
  {
    value: 20,
    prefix: '−',
    suffix: '%',
    label: 'Sign-up friction',
    description: 'Designed sign-on so signing up was effortless.',
    accent: T.butter,
    bars: [88, 72, 60, 50, 40],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      `She came in, figured out what the business actually needed, and rebuilt the whole thing. I didn't have to chase her once. She just handled it.`,
    author: '- Owner, Toasted Sesame Therapy',
    accent: T.pink,
  },
  {
    quote:
      'She made everything easy to understand without making me feel like I was behind. Patient, clear, and actually cared about getting it right for me',
    author: '- COO, Hawkins Family Finds',
    accent: T.lavender,
  },
  {
    quote:
      `Our previous engineer left us with a broken site, a bugged course, and over a thousand people who couldn't access what they paid for. She came in, figured out the entire system, and had everything running in two days. Reliable doesn't cover it.`,
    author: '- Founder, Controller FX',
    accent: T.mint,
  },
];

export const BRAND_MARKS: BrandMark[] = [
  { name: 'Toasty Tidbits',    image: toastyTidbitsImg, bg: T.white, pad: 20 },
  { name: 'Pothos',            image: pothosImg,         bg: T.white, pad: 18 },
  { name: 'Mr. Mochi',         image: mrMochiImg,        bg: T.white, pad: 20 },
  { name: 'Hawkins Family Finds', image: hffImg,         bg: T.white, pad: 18 },
  { name: 'OORI Apparel',      image: ooriImg,           bg: T.ink,    pad: 16 },
];
