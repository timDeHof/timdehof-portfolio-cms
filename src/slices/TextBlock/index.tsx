import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="font-display text-slate-400">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className="font-display font-medium md:mb-3">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="font-body mb-4 text-2xl font-normal leading-10 text-slate-200 md:mb-8">
      {children}
    </p>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="text-slate-200 hover:text-slate-400"
    >
      {children}
    </PrismicNextLink>
  ),
};

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <div className="prose max-w-none">
      <PrismicRichText field={slice.primary.text} components={components} />
    </div>
  );
};

export default TextBlock;
