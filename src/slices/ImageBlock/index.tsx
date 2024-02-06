import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageBlock`.
 */
export type ImageBlockProps = SliceComponentProps<Content.ImageBlockSlice>;

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock = ({ slice }: ImageBlockProps): JSX.Element => {
  return (
    <>
      {slice.variation === "default" && (
        <PrismicNextImage
          field={slice.primary.image}
          imgixParams={{ w: 600, h: 400, q: 90 }}
          alt=""
        />
      )}
      {slice.variation === "banner" && (
        <PrismicNextImage
          field={slice.primary.image}
          imgixParams={{ w: 600, h: 200, q: 90, fit: "crop", ar: "16:9" }}
          alt=""
        />
      )}
    </>
  );
};

export default ImageBlock;
