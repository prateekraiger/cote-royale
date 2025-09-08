import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="footer bg-black text-white">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-12">
          <div className="col-span-12 lg:col-span-4 flex flex-col items-center sm:items-start">
            <Link href="/" aria-label="Côte Royale Home" className="mb-6 sm:mb-8 block">
              <Image
                src="/logo.svg"
                alt="CÔTE ROYALE"
                width={180}
                height={30}
                className="w-40 sm:w-48 h-auto"
              />
            </Link>
            <p className="text-gray-400 max-w-sm text-sm sm:text-base text-center sm:text-left">
              Crafting exceptional fragrances that capture the essence of luxury
              and sophistication.
            </p>
            <div className="mt-6 sm:mt-8 flex space-x-4 sm:space-x-6">
              <a
                href="https://www.instagram.com/dev.prat1k/"
                className="text-gray-400 hover:text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <FaInstagram size={22} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://x.com/mrpratik753"
                className="text-gray-400 hover:text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <FaTwitter size={22} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://pratik-me.pages.dev/"
                className="text-gray-400 hover:text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <FaFacebookF size={22} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-10">
            <NavGroup title="Shop">
              <NavLink href="/fragrance/terra">Terra</NavLink>
              <NavLink href="/fragrance/ignis">Ignis</NavLink>
              <NavLink href="/fragrance/aqua">Aqua</NavLink>
            </NavGroup>

            <NavGroup title="About">
              <NavLink href="/about">Our Story</NavLink>
              <NavLink href="#">Fragrance Quiz</NavLink>
              <NavLink href="#">Contact Us</NavLink>
            </NavGroup>

            <NavGroup title="Support">
              <NavLink href="#">FAQ</NavLink>
              <NavLink href="#">Shipping & Returns</NavLink>
              <NavLink href="#">Track Your Order</NavLink>
            </NavGroup>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-6 sm:gap-8 border-t border-neutral-800 pt-8 sm:pt-10 md:flex-row">
          <p className="text-center text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} Côte Royale Inc. All rights reserved
          </p>
          <ul
            aria-label="Legal"
            className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400"
          >
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Terms &amp; conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

type NavGroupProps = {
  title: string;
  children?: ReactNode;
};

const NavGroup = ({ title, children }: NavGroupProps) => (
  <nav aria-labelledby={`${title.toLowerCase()}-heading`}>
    <h3
      id={`${title.toLowerCase()}-heading`}
      className="mb-4 sm:mb-6 text-lg sm:text-xl font-medium"
    >
      {title}
    </h3>
    <ul className="space-y-2 sm:space-y-4 text-gray-400 text-sm sm:text-base" role="list">
      {children}
    </ul>
  </nav>
);

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <li>
      <Link href={href} className="hover:text-white transition-colors py-1 block">
        {children}
      </Link>
    </li>
  );
};
