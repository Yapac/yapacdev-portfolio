import "./global.css";
import { Cursor, Header, SmoothScrolling } from "@/components";
import { league_Spartan } from "../libs/fonts";

export const metadata = {
  title: "YapacDev - Senior developer",
  description:
    "Software engineer/ Fullstack developer/ problem solver, my name is Yassine El atlassi known as Yapac..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={league_Spartan.className}>
        <div id="root" className="">
          <Cursor />
          <Header />

          <SmoothScrolling>{children}</SmoothScrolling>
        </div>
      </body>
    </html>
  );
}
