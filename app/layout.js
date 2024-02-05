import { poppins } from "@/utils/fonts";
import "./global.css";
import { Cursor, Header } from "@/components";
export const metadata = {
  title: "YapacDev - Building Beyond Bounderies",
  description:
    "Software engineer/ Fullstack developer/ problem solver, my name is Yassine El atlassi known as Yapac..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div id="root" className="overflow-hidden">
          <Cursor />
          <Header />

          {children}
        </div>
      </body>
    </html>
  );
}
