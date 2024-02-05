import {
  Poppins,
  Cardo,
  Pathway_Gothic_One,
  Open_Sans,
  Fira_Sans_Condensed,
} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "400"],
  display: "swap",
  variable: "--font-poppins",
});

export const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cardo",
});
export const pathway_Gothic_One = Pathway_Gothic_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pathway-gothic-one",
});
export const open_Sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--open-sans",
});

export const fira_Sans_Condensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--fira-sans-condensed",
});
