import Link from "next/link";
import { Nanum_Gothic_Coding } from "next/font/google";
import "./globals.css";
import "@code-hike/mdx/dist/index.css";

const inter = Nanum_Gothic_Coding({
  subsets: ["latin"],
  adjustFontFallback: true,
  weight: ["400", "700"],
});

export const metadata = {
  title: "Ben Sampson blog",
  description: "Ramblings of a software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container w-full mx-auto flex flex-col">
          <header className="py-8 flex flex-col items-start">
            <Link href="/">
              <h1 className="text-xl font-medium">{metadata.title}</h1>
            </Link>
            <p className="text-base">{metadata.description}</p>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
