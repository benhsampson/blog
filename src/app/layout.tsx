import Link from "next/link";
import "./globals.css";
import { Lora } from "next/font/google";

const inter = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "ML Blog",
  description: "Random musings of a wannabe ML engineer",
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
          <header className="py-4">
            <Link href="/">
              <h1 className="text-xl">{metadata.title}</h1>
            </Link>
            <p className="text-base">{metadata.description}</p>
          </header>
          <div className="max-w-5xl w-full self-center">{children}</div>
        </div>
      </body>
    </html>
  );
}
