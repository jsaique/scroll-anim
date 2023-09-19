import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scroll-Animation",
  description: "Generated by create next app",
};

const MyArray = [
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="lines">
          <div className="line-1">
            <div className="shapes">
              {MyArray.map((shape, index) => (
                <div key={index} className={shape}></div>
              ))}
            </div>
          </div>
          <div className="line-2">
            <div className="shapes">
              {MyArray.map((shape, index) => (
                <div key={index} className={shape}></div>
              ))}
            </div>
          </div>
          <div className="line-3">
            <div className="shapes">
              {MyArray.map((shape, index) => (
                <div key={index} className={shape}></div>
              ))}
            </div>
          </div>
          <div className="line-4">
            <div className="shapes">
              {MyArray.map((shape, index) => (
                <div key={index} className={shape}></div>
              ))}
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
