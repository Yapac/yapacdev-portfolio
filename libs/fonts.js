import {
  League_Spartan,
  Open_Sans,
  Fira_Sans_Condensed,
} from "next/font/google";

export const league_Spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["800", "700", "400", "200"],
  display: "swap",
});

export const open_Sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const fira_Sans_Condensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  weight: ["300", "700"],
});
