import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-xl" {...props} />,
    a: (props) => <a className="text-blue-500" {...props} />,
    p: (props) => <p className="mb-2.5" {...props} />,
    ...components,
  };
}
