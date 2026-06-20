import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      number: "01",
      title: "Deliver with quality",
      description:
        "Every product is crafted with care and attention to detail, ensuring the best for your customers.",
    },
    {
      number: "02",
      title: "Designed to impress",
      description:
        "A modern store that enhances your brand and creates a memorable shopping experience.",
    },
    {
      number: "03",
      title: "Curated for you",
      description:
        "Handpicked selections that reflect the latest trends and timeless essentials.",
    },
  ];

  return (
    <section className=" py-15 md:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
        {features.map((item) => (
          <FeatureCard key={item.number} number={item.number} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default Features;