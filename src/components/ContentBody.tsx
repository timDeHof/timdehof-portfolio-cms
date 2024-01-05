import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { Content, DateField, asLinkAttrs, isFilled } from "@prismicio/client";

type Page = { uid: string };

type Links = {
  link: Content.ProjectDocumentDataLinksItem["link"];
  label: Content.ProjectDocumentDataLinksItem["label"];
};

export default function ContentBody({
  page,
  links,
}: {
  page: Content.BlogPostDocument | Content.ProjectDocument;
  links: Links[];
}) {
  function formatDate(date: DateField) {
    if (isFilled.date(date)) {
      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Intl.DateTimeFormat("en-US", dateOptions).format(
        new Date(date),
      );
    }
  }

  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h1">{page.data.title}</Heading>
        <div className="flex gap-4 text-xl font-bold text-yellow-400">
          {page.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Button
              key={link.label}
              linkField={link.link}
              label={link.label}
              className="mt-8"
            />
          ))}
        </div>
        <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
          {formatDate(page.data.date)}
        </p>
        <div className="prose prose-xl prose-invert mt-12 w-full max-w-none md:mt-20">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Bounded>
  );
}
