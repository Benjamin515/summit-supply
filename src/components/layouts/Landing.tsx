"use client";

import React from "react";
import "../../styles/layouts/Landing.css";
import { Menu } from "@mui/icons-material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CustomCursor from "../ui/CustomCursor";
import Button from "../ui/Button";
import NewsletterSection from "./NewsletterSection";
import { testimonials } from "@/data/testimonials";
import { generateAvatarClassFromName, getInitials } from "@/utils/helpers";
import TestimonialCard from "@/styled-components/TestimonialCard";
import LandingNavbar from "./LandingNavbar";
import { heroLandscapeImages, heroPortraitImages } from "@/data/heroImages";
import CategoryShowcase from "./CategoryShowcase";

function Landing() {
  const pathname = usePathname();

  const isLandingPage = pathname === "/"; // Check if user is on landing page

  const brands = [
    // { name: "The North Face", logo: "/images/the-north-face-logo.png" },
    { name: "Patagonia", logo: "/images/brands/logos/patagonia.png" },
    { name: "Columbia", logo: "/images/brands/logos/columbia-black.png" },
    // { name: "Marmot", logo: "/images/marmot-logo.png" },
    { name: "REI", logo: "/images/brands/logos/rei-black.png" },
    {
      name: "Black Diamond",
      logo: "/images/brands/logos/black-diamond-black.png",
    },
    { name: "Osprey", logo: "/images/brands/logos/osprey-black.png" },
  ];

  return (
    <div className="landing">
      {/* Show cursor only on landing page */}
      {isLandingPage && <CustomCursor />}

      <LandingNavbar />

      <div className="landing__hero">
        <div className="landing__hero__intro">
          <h1 className="landing__hero__heading">
            <span>Tactical</span>
            <span>Outdoor</span>
          </h1>
          <h2 className="landing__hero__subheading">
            High-performance outdoor gear built for all conditions
          </h2>
          <Button label="Shop Now" className="landing__hero__cta" />
        </div>

        <div className="landing-hero__image-group landing-hero__image-group--portrait">
          <Image
            src={`${heroPortraitImages.path}${heroPortraitImages.images[0]}`}
            alt="hero image 1"
            width={500}
            height={500}
          />
          {heroPortraitImages.images.map((image) => (
            <div className="landing-hero__image landing-hero__image--portrait"></div>
          ))}
        </div>

        <div className="landing-hero__image-group landing-hero__image-group--landscape">
          <Image
            src={`${heroLandscapeImages.path}${heroLandscapeImages.images[0]}`}
            alt="hero image 1"
            width={500}
            height={500}
          />
          {heroLandscapeImages.images.map((image) => (
            <div className="landing-hero__image landing-hero__image--landscape"></div>
          ))}
        </div>
      </div>

      <section className="landing__brand-showcase">
        <h2 className="landing__brand-showcase__heading">
          Curated Brands for Your Adventures
        </h2>
        <h3 className="landing__brand-showcase__subheading">
          Some of the Top Brands You’ll Find in Our Store
        </h3>
        <div className="landing__brand-showcase__logos">
          {brands.map((brand) => (
            <div className="landing__brand-showcase__item" key={brand.name}>
              <Image
                width={200}
                height={200}
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="landing__brand-showcase__logo"
              />
            </div>
          ))}
        </div>
      </section>

      <CategoryShowcase />

      <section className="landing__customer-testimonials">
        <h2 className="landing__customer-testimonials-heading">
          What Our Customers Are Saying
        </h2>
        <div className="landing__customer-testimonials-list">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}

export default Landing;
