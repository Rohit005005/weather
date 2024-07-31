import { Inter } from "next/font/google";
import "./globals.css";
import "./_components/bg.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather app",
  description: "Created by Rohit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed bg-black top-0 -z-10 h-full w-full">
          <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        </div>
        <div class="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

            {children}
          </ul>
        </div>
      </body>
    </html>
  );
}
