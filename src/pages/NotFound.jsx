import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { PiWarningCircleLight } from "react-icons/pi";

const NotFound = () => {
  return (
    <section className=" mt-20 min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-neutral-200 rounded-full px-4 py-2">
          <PiWarningCircleLight size={18} />
          <span className="text-sm font-medium">
            Page Not Found
          </span>
        </div>

        {/* 404 */}
        <h1 className="font-display text-[110px] sm:text-[150px] md:text-[190px] leading-none mt-8 font-medium">
          404
        </h1>

        {/* Heading */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-4">
          Looks Like You're Lost
        </h2>

        {/* Description */}
        <p className="text-neutral-500 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          The page you're looking for doesn't exist or may have been
          moved. Let's get you back to exploring our latest collection.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

          <Link
            to="/"
            className="bg-black text-white px-7 py-3.5 rounded-full flex items-center gap-2 hover:bg-neutral-800 transition-colors"
          >
            Back To Home
            <FiArrowRight />
          </Link>

          <Link
            to="/collection"
            className="border border-neutral-300 px-7 py-3.5 rounded-full hover:border-black transition-colors"
          >
            Browse Collection
          </Link>

        </div>

        {/* Decorative Line */}
        <div className="flex items-center gap-4 mt-16 justify-center">
          <div className="h-px w-20 bg-neutral-200"></div>
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-400">
            Wearly
          </span>
          <div className="h-px w-20 bg-neutral-200"></div>
        </div>

      </div>
    </section>
  );
};

export default NotFound;