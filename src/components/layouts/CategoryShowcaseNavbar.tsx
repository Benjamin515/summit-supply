"use client";

import React, { useState } from "react";
import "../../styles/layouts/CategoryShowcaseNavbar.css";

import { categories } from "@/data/categoriesData";
import { Categories } from "@/types/types";

interface CategoryShowcaseNavbarProps {
  isBodyHovered: boolean;
  onCategorySelect: (category: Categories) => void;
}

function CategoryShowcaseNavbar({
  isBodyHovered,
  onCategorySelect,
}: CategoryShowcaseNavbarProps) {
  const [activeCategory, setActiveCategory] = useState("Tops");

  // const categories = ["Tops", "Bottoms", "Footwear", "Headwear", "Accessories"];

  return (
    <div
      className={`category-showcase__nav ${
        isBodyHovered ? "category-showcase__nav--hidden" : ""
      }`}
    >
      {categories.map((category) => (
        <button type="button" onClick={() => onCategorySelect(category)}>
          {category.category}
        </button>
      ))}
    </div>
  );
}

export default CategoryShowcaseNavbar;
