import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ContactForm from "@/components/Form";

/**
 * Props for `Form`.
 */
export type FormProps = SliceComponentProps<Content.FormSlice>;

/**
 * Component for "Form" Slices.
 */
const Form = ({ slice }: FormProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ContactForm />
    </Bounded>
  );
};

export default Form;
