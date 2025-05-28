"use client";

import React, { useEffect, useRef, useState } from "react";
import "../../styles/layouts/CategoryShowcaseNavbar.css";

import { categories } from "@/data/categoriesData";
import { Categories } from "@/types/types";
import styled from "styled-components";

interface CategoryShowcaseNavbarProps {
  isBodyHovered: boolean;
  onCategorySelect: (category: Categories) => void;
}

const TabIndicator = styled.div`
  position: absolute;
  bottom: 0;
  /* width: 3px !important; */
  height: 3px;
  background-color: #000;
  /* border-radius: 3px 3px 0 0; */
  transition: left 0.3s ease, width 0.3s ease;
`;

function CategoryShowcaseNavbar({
  isBodyHovered,
  onCategorySelect,
}: CategoryShowcaseNavbarProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  }>({
    left: 0,
    width: 0,
  });
  const [activeCategory, setActiveCategory] = useState("Tops");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // const categories = ["Tops", "Bottoms", "Footwear", "Headwear", "Accessories"];

  useEffect(() => {
    if (!containerRef.current) return;
    const currentButton = buttonRefs.current[activeIndex];
    if (currentButton) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = currentButton.getBoundingClientRect();
      setIndicatorStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });
    }
  }, [activeIndex, categories]);

  // Update on window resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const currentButton = buttonRefs.current[activeIndex];
      if (currentButton) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const buttonRect = currentButton.getBoundingClientRect();
        setIndicatorStyle({
          left: buttonRect.left - containerRect.left,
          width: buttonRect.width,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  const handleClick = (index: number, category: Categories) => {
    setActiveIndex(index);
    onCategorySelect(category);
  };

  return (
    <div
      ref={containerRef}
      className={`category-showcase__nav ${
        isBodyHovered ? "category-showcase__nav--hidden" : ""
      }`}
      role="tablist"
      aria-label="Category Showcase Navigation"
      // style={{ position: "relative" }} // necessary for absolute TabIndicator
    >
      {categories.map((category, index) => (
        <button
          key={index}
          type="button"
          ref={(el) => {
            buttonRefs.current[index] = el;
          }}
          onClick={() => handleClick(index, category)}
          className={`category-showcase__nav-button ${
            index === activeIndex ? "category-showcase__nav-button--active" : ""
          }`}
          role="tab"
          // aria-selected={index === activeIndex}
          // aria-selected={(index === activeIndex).toString()}
          tabIndex={index === activeIndex ? 0 : -1}
        >
          {category.category}
        </button>
      ))}

      {/* Sliding Tab Indicator */}
      <TabIndicator
        style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
      />
    </div>
  );
}

export default CategoryShowcaseNavbar;
