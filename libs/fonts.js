import {
  Poppins,
  Cardo,
  Open_Sans,
  Fira_Sans_Condensed,
} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "400"],
  display: "swap",
});

export const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400"],
});
export const open_Sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const fira_Sans_Condensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  weight: ["300", "700"],
});
