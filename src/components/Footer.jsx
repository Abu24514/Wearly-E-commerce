import { GoDotFill } from "react-icons/go";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/collection", label: "Collection" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <footer className="bg-black text-white overflow-hidden md:mt-25 mt-15">
      {/* Main Content */}
      <div className="px-6 sm:px-10 md:px-16 pt-14 pb-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-6">
          {/* Brand — left on desktop, top on mobile */}
          <div className="flex flex-col gap-5 md:max-w-xs">
            <Link
              to="/"
              className="font-display text-2xl font-bold tracking-wide text-white relative inline-flex items-end gap-0.5 w-fit"
            >
              Wearly
              <span className="mb-1">
                <GoDotFill size={8} className="text-red-500" />
              </span>
            </Link>
            <p className="text-white/95 text-[15px] leading-relaxed">
              A modern fashion destination designed for everyday style and
              effortless confidence.
            </p>
            <button className="w-fit bg-white text-black text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors">
              Contact Wearly
            </button>
          </div>

          {/* Right Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-display font-semibold text-white text-base md:text-[20px]">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-3">
                {navLinks.map(
                  (item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        className="text-neutral-400 text-sm md:text-base hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-4">
              <h3 className="font-display font-semibold text-white text-base md:text-[20px]">
                Follow us:
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Instagram",
                  "Twitter",
                  "Youtube",
                  "LinkedIn",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-neutral-400 text-sm md:text-base hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch — full width on mobile (col-span-2), normal on desktop */}
            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h3 className="font-display font-semibold text-white text-base md:text-[20px]">
                Get in touch
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 md:text-base text-neutral-400 text-sm">
                  <IoMailOutline size={17} className="shrink-0" />
                  <span>wearly@gmail.com</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-400 text-sm">
                  <IoCallOutline size={17} className="shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-400 text-sm">
                  <IoLocationOutline size={17} className="shrink-0" />
                  <span>Lucknow, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Big Brand Text */}
      <div className="overflow-hidden leading-none select-none mt-4 text-center">
        <p className="font-display font-black text-[21vw]  text-white tracking-wide">
          WEARLY
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 sm:px-10 md:px-16 py-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-neutral-500 text-xs">
          © 2026 Wearly. All rights reserved.
        </p>
        <p className="text-neutral-500 text-xs">Made by Abu Hanjala</p>
      </div>
    </footer>
  );
};

export default Footer;
