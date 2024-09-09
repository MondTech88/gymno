import { config } from "@fortawesome/fontawesome-svg-core";
import { Poppins } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Gymno",
  description: "Gymn App UI With React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
