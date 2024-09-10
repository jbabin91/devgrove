import {
  Inter,
  JetBrains_Mono as FontMono,
  Outfit,
  Plus_Jakarta_Sans,
  Raleway,
} from 'next/font/google';

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const fontJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const fontOutfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const fontRaleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export { GeistSans as fontSans } from 'geist/font/sans';
