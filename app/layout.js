import "./global.css";
import { Header, SmoothScrolling } from "@/components";
import { league_Spartan } from "../libs/fonts";

export const metadata = {
  title: {
    default: "Yapacdev - Crafting digital experiences",
    template: "Yapacdev - %s",
  },
  description:
    "My name is Yassine El atlassi, i am a skilled Developer proficient in both front-end and back-end technologies, along with a solid design and 3D modeling foundation... ",
  keywords: [
    "Developer in tangier",
    "Yassine El atlassi",
    "full stack freelancer tangier",
  ],
};

export const revalidate = 3600;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={league_Spartan.className}>
        <div id="root" className="">
          <Header />

          <SmoothScrolling>{children}</SmoothScrolling>
        </div>
      </body>
    </html>
  );
}
