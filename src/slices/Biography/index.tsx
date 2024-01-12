import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="xl"
      className="col-start-1 font-display text-slate-300"
    >
      {children}
    </Heading>
  ),

  paragraph: ({ children }) => (
    <p className="mb-4 max-w-2xl font-body text-xl font-normal leading-10 text-slate-200 md:mb-8">
      {children}
    </p>
  ),
};
/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr_1fr]">
        <div className="prose ">
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
        </div>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <PrismicRichText
            field={slice.primary.description}
            components={components}
          />
        </div>
        <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button_text}
        />

        <Avatar
          image={slice.primary.avatar}
          className="row-start-2 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
