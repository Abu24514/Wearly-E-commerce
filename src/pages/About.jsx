import React from "react";
import aboutImg from "../assets/clothes.jpg";
import { LuBadgeInfo } from "react-icons/lu";
import SecondHanding from "../components/SecondHanding";
import FeatureCard from "../components/FeatureCard";
import Stats from "../components/Stats";
import Closing from "../components/Closing";

const About = () => {
  const values = [
    {
      number: "01",
      title: "Quality First",
      description:
        "Every item is carefully selected to ensure exceptional quality and lasting value.",
    },
    {
      number: "02",
      title: "Customer Focused",
      description:
        "We create experiences that make shopping simple, enjoyable, and reliable.",
    },
    {
      number: "03",
      title: "Timeless Style",
      description:
        "Our collections blend modern trends with everyday essentials that never go out of fashion.",
    },
    {
      number: "04",
      title: "Trust & Transparency",
      description:
        "Clear communication, honest pricing, and a commitment to doing what is right.",
    },
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
      {/* Hero */}
      <SecondHanding
        text="About Wearly"
        title="More Than Fashion."
        para=" Wearly was created with a simple vision: to make quality fashion
                accessible, timeless, and effortless."
        icon={<LuBadgeInfo size={14} />}
      />

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[50%_48%] gap-12 lg:gap-20 items-center mt-24">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={aboutImg}
            alt="Wearly Fashion"
            className="w-full h-87.5 sm:h-112.5 lg:h-150 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="max-w-lg">
          <p className="uppercase tracking-[0.2em] text-neutral-500 text-sm">
            Our Story
          </p>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium mt-4">
            Crafted For Modern Living
          </h2>

          <p className="mt-8 text-lg text-neutral-500 leading-relaxed">
            We believe fashion should feel effortless, comfortable, and
            timeless. Every collection is thoughtfully curated to help people
            express confidence through everyday style.
          </p>

          <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
            From wardrobe essentials to statement pieces, our goal is to deliver
            products that combine quality craftsmanship with modern design while
            staying true to simplicity and elegance.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-28">
        <Stats />
      </div>

      {/* Values */}
      <div className="mt-28 border-t border-neutral-200 pt-20">
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-16">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24">
          {values.map((item) => (
            <FeatureCard key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* Closing */}
      <Closing />
    </section>
  );
};

export default About;
