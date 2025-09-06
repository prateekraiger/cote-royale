import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-black text-white">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="w-full px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="col-span-12 lg:col-span-4">
            <Link href="/" aria-label="Côte Royale Home" className="mb-8 block">
              <Image src="/logo.svg" alt="CÔTE ROYALE" width={180} height={30} />
            </Link>
            <p className="text-gray-400 max-w-sm">
              Crafting exceptional fragrances that capture the essence of luxury and sophistication.
            </p>
            <div className="mt-8 flex space-x-6">
              <a href="https://www.instagram.com/dev.prat1k/" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
              <a href="https://x.com/mrpratik753" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={24} /></a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
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

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-neutral-800 pt-8 md:flex-row">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Côte Royale Inc. All rights reserved
          </p>
          <ul
            aria-label="Legal"
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <li>
              <Link href="#" className="hover:text-white">
                Terms &amp; conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
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
      className="mb-6 text-xl font-medium"
    >
      {title}
    </h3>
    <ul className="space-y-4 text-gray-400" role="list">
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
      <Link href={href} className="hover:text-white">
        {children}
      </Link>
    </li>
  );
};
