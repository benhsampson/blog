import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import { remarkCodeHike } from "@code-hike/mdx";
import rehypeKatex from "rehype-katex";
import remarkStringify from "rehype-stringify";
import mdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withMdx = mdx({
  options: {
    remarkPlugins: [
      remarkParse,
      remarkGfm,
      [remarkCodeHike, { theme: "dark-plus", lineNumbers: true }],
      remarkMath,
      remarkRehype,
    ],
    rehypePlugins: [rehypeKatex, remarkStringify],
  },
});

export default withMdx(nextConfig);
