import { asLink, LinkField, PrismicDocument } from "@prismicio/client";
import Link from "next/link";

export type TransitionLinkProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
} & (
  | { field: LinkField | null; document?: never; href?: never }
  | { field?: never; document: PrismicDocument | null; href?: never }
  | { field?: never; document?: never; href: string }
);

export const TransitionLink = ({
  field,
  document: doc,
  href,
  children,
  className,
  onClick,
  tabIndex,
}: TransitionLinkProps) => {
  let url = href ?? asLink(field ?? doc);
  
  // Fix fragnance URLs to use fragrance route
  if (url && url.includes('/fragnance/')) {
    url = url.replace('/fragnance/', '/fragrance/');
  }

  if (!url) {
    console.warn("TransitionLink: No URL Found");
    return null;
  }

  return (
    <Link
      href={url}
      className={className}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {children}
    </Link>
  );
};
