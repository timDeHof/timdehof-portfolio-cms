// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogPostDocumentDataSlicesSlice = ImageBlockSlice | TextBlockSlice;

/**
 * Content for Blog Post documents
 */
interface BlogPostDocumentData {
  /**
   * Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * date field in *Blog Post*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Hover Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.hover_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hover_image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Blog Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPostDocumentDataSlicesSlice> /**
   * Meta Description field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog_post",
    Lang
  >;

type ContactDocumentDataSlicesSlice = ContactFormSlice;

/**
 * Content for Contact documents
 */
interface ContactDocumentData {
  /**
   * Slice Zone field in *Contact*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ContactDocumentDataSlicesSlice> /**
   * Meta Description field in *Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: contact.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Contact*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: contact.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ContactDocumentData>,
    "contact",
    Lang
  >;

type HomepageDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | TechStackSlice
  | ExperienceSlice
  | ContentIndexSlice
  | TechListSlice
  | BiographySlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Project → Links*
 */
export interface ProjectDocumentDataLinksItem {
  /**
   * Link field in *Project → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: project.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Project → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

type ProjectDocumentDataSlicesSlice = ImageBlockSlice | TextBlockSlice;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date field in *Project*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: project.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Hover Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.hover_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hover_image: prismic.ImageField<never>;

  /**
   * Links field in *Project*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<ProjectDocumentDataLinksItem>>;

  /**
   * Slice Zone field in *Project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice> /**
   * Meta Description field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

/**
 * Item in *Settings → Nav Item*
 */
export interface SettingsDocumentDataNavItemItem {
  /**
   * Link field in *Settings → Nav Item*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Nav Item*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Settings → Social Links*
 */
export interface SettingsDocumentDataSocialLinksItem {
  /**
   * Link field in *Settings → Social Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Social Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * icon field in *Settings → Social Links*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_links[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * BGColor field in *Settings → Social Links*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_links[].bgcolor
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  bgcolor: prismic.ColorField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Name field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Brand Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.brand_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  brand_logo: prismic.ImageField<never>;

  /**
   * Nav Item field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  nav_item: prismic.GroupField<Simplify<SettingsDocumentDataNavItemItem>>;

  /**
   * cta link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * cta label field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * Social Links field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_links: prismic.GroupField<
    Simplify<SettingsDocumentDataSocialLinksItem>
  > /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_title
   * - **Tab**: SEO & METADATA
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: SEO & METADATA
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: SEO & METADATA
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

/**
 * Item in *technology → Technologies*
 */
export interface TechnologyDocumentDataTechnologiesItem {
  /**
   * Icon field in *technology → Technologies*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: technology.technologies[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<
    | "Nextjs"
    | "Reactjs"
    | "TypeScript"
    | "JavaScript"
    | "HTML5"
    | "CSS3"
    | "Tailwind"
    | "Postgres"
    | "Express"
    | "Nodejs"
    | "ReactQuery"
    | "Redux"
    | "Webpack"
    | "ESLint"
    | "Prettier"
    | "NPM"
    | "Vercel"
    | "Firebase"
    | "Git"
    | "Prisma"
    | "Prismic"
    | "AppwriteIo"
    | "FramerMotion"
    | "Jotai"
  >;

  /**
   * Name field in *technology → Technologies*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: technology.technologies[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;
}

/**
 * Content for technology documents
 */
interface TechnologyDocumentData {
  /**
   * Field field in *technology*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: technology.field
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  field: prismic.TitleField;

  /**
   * SubHeading field in *technology*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: technology.subheading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.RichTextField;

  /**
   * Technologies field in *technology*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: technology.technologies[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  technologies: prismic.GroupField<
    Simplify<TechnologyDocumentDataTechnologiesItem>
  >;
}

/**
 * technology document from Prismic
 *
 * - **API ID**: `technology`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TechnologyDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<TechnologyDocumentData>,
    "technology",
    Lang
  >;

export type AllDocumentTypes =
  | BlogPostDocument
  | ContactDocument
  | HomepageDocument
  | PageDocument
  | ProjectDocument
  | SettingsDocument
  | TechnologyDocument;

/**
 * Primary content in *Biography → Primary*
 */
export interface BiographySliceDefaultPrimary {
  /**
   * Heading field in *Biography → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: biography.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Description field in *Biography → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: biography.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Button text field in *Biography → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: biography.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Biography → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: biography.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Avatar field in *Biography → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: biography.primary.avatar
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;
}

/**
 * Default variation for Biography Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BiographySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BiographySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Biography*
 */
type BiographySliceVariation = BiographySliceDefault;

/**
 * Biography Shared Slice
 *
 * - **API ID**: `biography`
 * - **Description**: Biography
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BiographySlice = prismic.SharedSlice<
  "biography",
  BiographySliceVariation
>;

/**
 * Primary content in *ContactForm → Primary*
 */
export interface ContactFormSliceDefaultPrimary {
  /**
   * Name field in *ContactForm → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Email field in *ContactForm → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Message field in *ContactForm → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.message
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  message: prismic.RichTextField;
}

/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactFormSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactForm*
 */
type ContactFormSliceVariation = ContactFormSliceDefault;

/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: ContactForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSlice = prismic.SharedSlice<
  "contact_form",
  ContactFormSliceVariation
>;

/**
 * Primary content in *ContentIndex → Primary*
 */
export interface ContentIndexSliceDefaultPrimary {
  /**
   * Heading field in *ContentIndex → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Content Type field in *ContentIndex → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.primary.content_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  content_type: prismic.SelectField<"Blog" | "Project">;

  /**
   * Description field in *ContentIndex → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * View More Text field in *ContentIndex → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.primary.view_more_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  view_more_text: prismic.KeyTextField;

  /**
   * Fallback Image field in *ContentIndex → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.primary.fallback_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fallback_image: prismic.ImageField<never>;
}

/**
 * Default variation for ContentIndex Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentIndexSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContentIndexSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContentIndex*
 */
type ContentIndexSliceVariation = ContentIndexSliceDefault;

/**
 * ContentIndex Shared Slice
 *
 * - **API ID**: `content_index`
 * - **Description**: ContentIndex
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentIndexSlice = prismic.SharedSlice<
  "content_index",
  ContentIndexSliceVariation
>;

/**
 * Primary content in *Experience → Primary*
 */
export interface ExperienceSliceDefaultPrimary {
  /**
   * Heading field in *Experience → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;
}

/**
 * Primary content in *Experience → Items*
 */
export interface ExperienceSliceDefaultItem {
  /**
   * Title field in *Experience → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Start Date field in *Experience → Items*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.items[].start_date
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  start_date: prismic.TimestampField;

  /**
   * End Date field in *Experience → Items*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.items[].end_date
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  end_date: prismic.TimestampField;

  /**
   * Institution field in *Experience → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.items[].institution
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  institution: prismic.KeyTextField;

  /**
   * Description field in *Experience → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for Experience Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ExperienceSliceDefaultPrimary>,
  Simplify<ExperienceSliceDefaultItem>
>;

/**
 * Slice variation for *Experience*
 */
type ExperienceSliceVariation = ExperienceSliceDefault;

/**
 * Experience Shared Slice
 *
 * - **API ID**: `experience`
 * - **Description**: Experience
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSlice = prismic.SharedSlice<
  "experience",
  ExperienceSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * First Name field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.first_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_name: prismic.KeyTextField;

  /**
   * Last Name field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.last_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  last_name: prismic.KeyTextField;

  /**
   * Tag Line field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.tag_line
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag_line: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *ImageBlock → Primary*
 */
export interface ImageBlockSliceDefaultPrimary {
  /**
   * Image field in *ImageBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_block.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ImageBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageBlockSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *ImageBlock → Primary*
 */
export interface ImageBlockSliceBannerPrimary {
  /**
   * Image field in *ImageBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_block.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Banner variation for ImageBlock Slice
 *
 * - **API ID**: `banner`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSliceBanner = prismic.SharedSliceVariation<
  "banner",
  Simplify<ImageBlockSliceBannerPrimary>,
  never
>;

/**
 * Slice variation for *ImageBlock*
 */
type ImageBlockSliceVariation = ImageBlockSliceDefault | ImageBlockSliceBanner;

/**
 * ImageBlock Shared Slice
 *
 * - **API ID**: `image_block`
 * - **Description**: ImageBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSlice = prismic.SharedSlice<
  "image_block",
  ImageBlockSliceVariation
>;

/**
 * Primary content in *TechList → Primary*
 */
export interface TechListSliceDefaultPrimary {
  /**
   * Heading field in *TechList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;
}

/**
 * Primary content in *TechList → Items*
 */
export interface TechListSliceDefaultItem {
  /**
   * Tech Name field in *TechList → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.items[].tech_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tech_name: prismic.KeyTextField;

  /**
   * Tech Color field in *TechList → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.items[].tech_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  tech_color: prismic.ColorField;
}

/**
 * Default variation for TechList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TechListSliceDefaultPrimary>,
  Simplify<TechListSliceDefaultItem>
>;

/**
 * Slice variation for *TechList*
 */
type TechListSliceVariation = TechListSliceDefault;

/**
 * TechList Shared Slice
 *
 * - **API ID**: `tech_list`
 * - **Description**: TechList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechListSlice = prismic.SharedSlice<
  "tech_list",
  TechListSliceVariation
>;

/**
 * Primary content in *TechStack → Primary*
 */
export interface TechStackSliceDefaultPrimary {
  /**
   * Heading field in *TechStack → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_stack.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;
}

/**
 * Primary content in *TechStack → Items*
 */
export interface TechStackSliceDefaultItem {
  /**
   * Technologies field in *TechStack → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_stack.items[].technologies
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  technologies: prismic.ContentRelationshipField<"technology">;
}

/**
 * Default variation for TechStack Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechStackSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TechStackSliceDefaultPrimary>,
  Simplify<TechStackSliceDefaultItem>
>;

/**
 * Slice variation for *TechStack*
 */
type TechStackSliceVariation = TechStackSliceDefault;

/**
 * TechStack Shared Slice
 *
 * - **API ID**: `tech_stack`
 * - **Description**: TechStack
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechStackSlice = prismic.SharedSlice<
  "tech_stack",
  TechStackSliceVariation
>;

/**
 * Primary content in *TextBlock → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * Text field in *TextBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataSlicesSlice,
      ContactDocument,
      ContactDocumentData,
      ContactDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ProjectDocument,
      ProjectDocumentData,
      ProjectDocumentDataLinksItem,
      ProjectDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavItemItem,
      SettingsDocumentDataSocialLinksItem,
      TechnologyDocument,
      TechnologyDocumentData,
      TechnologyDocumentDataTechnologiesItem,
      AllDocumentTypes,
      BiographySlice,
      BiographySliceDefaultPrimary,
      BiographySliceVariation,
      BiographySliceDefault,
      ContactFormSlice,
      ContactFormSliceDefaultPrimary,
      ContactFormSliceVariation,
      ContactFormSliceDefault,
      ContentIndexSlice,
      ContentIndexSliceDefaultPrimary,
      ContentIndexSliceVariation,
      ContentIndexSliceDefault,
      ExperienceSlice,
      ExperienceSliceDefaultPrimary,
      ExperienceSliceDefaultItem,
      ExperienceSliceVariation,
      ExperienceSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ImageBlockSlice,
      ImageBlockSliceDefaultPrimary,
      ImageBlockSliceBannerPrimary,
      ImageBlockSliceVariation,
      ImageBlockSliceDefault,
      ImageBlockSliceBanner,
      TechListSlice,
      TechListSliceDefaultPrimary,
      TechListSliceDefaultItem,
      TechListSliceVariation,
      TechListSliceDefault,
      TechStackSlice,
      TechStackSliceDefaultPrimary,
      TechStackSliceDefaultItem,
      TechStackSliceVariation,
      TechStackSliceDefault,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
    };
  }
}
