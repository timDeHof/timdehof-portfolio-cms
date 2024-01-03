import clsx from "clsx";
import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { ColorField, Content, isFilled } from "@prismicio/client";
import link from "next/link";
import { color, label } from "three/examples/jsm/nodes/Nodes.js";

type socialLinkProps = {
  link: Content.SettingsDocumentDataSocialLinksItem["link"];
  icon: Content.SettingsDocumentDataSocialLinksItem["icon"];
  label: Content.SettingsDocumentDataSocialLinksItem["label"];
  bgcolor: ColorField;
};

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <Bounded as='footer' className='text-slate-600'>
      <div className='container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row '>
        <div className='name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start'>
          <Link
            href='/'
            className='text-xl font-extrabold tracking-wider text-slate-100 transition-colors duration-150 hover:text-yellow-400'>
            {settings.data.name}
          </Link>
          <span
            className='hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline'
            aria-hidden={true}>
            /
          </span>
          <p className=' text-sm text-slate-300 '>
            © {new Date().getFullYear()} {settings.data.name} All rights
            reserved
          </p>
        </div>
        <nav className='navigation' aria-label='Footer Navigation'>
          <ul className='flex items-center gap-1'>
            {settings.data.nav_item.map(({ link, label }, index) => (
              <React.Fragment key={label}>
                <li>
                  <PrismicNextLink
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400",
                    )}
                    field={link}>
                    {label}
                  </PrismicNextLink>
                </li>
                {index < settings.data.nav_item.length - 1 && (
                  <span
                    className='text-4xl font-thin leading-[0] text-slate-400'
                    aria-hidden='true'>
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className='socials inline-flex justify-center gap-2 sm:justify-end'>
          {settings.data.social_links.map(
            ({ link, icon, label, bgcolor }: socialLinkProps, index) => (
              <span
                key={index}
                className='p-2 flex items-center justify-center rounded-full w-10 h-10 duration-150 hover:scale-125'
                style={{
                  backgroundColor: isFilled.color(bgcolor)
                    ? bgcolor
                    : "inherit",
                }}>
                <PrismicNextLink
                  field={link}
                  aria-label={settings.data.name + " on " + label}>
                  <PrismicNextImage field={icon} className='h-8 w-auto' />
                </PrismicNextLink>
              </span>
            ),
          )}
        </div>
      </div>
    </Bounded>
  );
}
