import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  function formatTimePeriod(
    start_date: Content.ExperienceSliceDefaultItem["start_date"],
    end_date: Content.ExperienceSliceDefaultItem["end_date"],
  ) {
    const dateOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
    };
    let FormattedStartDate = "";
    let FormattedEndDate = "";

    if (isFilled.timestamp(start_date)) {
      FormattedStartDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
        new Date(start_date),
      );
    }
    if (isFilled.timestamp(end_date)) {
      FormattedEndDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
        new Date(end_date),
      );
    } else {
      FormattedEndDate = "Present";
    }
    return `${FormattedStartDate} - ${FormattedEndDate}`;
  }

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <Heading as='h2' size='lg'>
        {slice.primary.heading}
      </Heading>
      {slice.items.map((item, index) => (
        <div key={index} className='ml-6 mt-8 max-w-prose md:ml-12 md:mt-16'>
          <Heading as='h3' size='sm'>
            {item.title}
          </Heading>

          <div className='mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400'>
            <span>{formatTimePeriod(item.start_date, item.end_date)}</span>
            <span className='text-3xl font-extralight'>/</span>{" "}
            <span>{item.institution}</span>
          </div>
          <div className='prose prose-lg prose-invert mt-4'>
            <PrismicRichText field={item.description} />
          </div>
        </div>
      ))}
    </Bounded>
  );
};

export default Experience;
