import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store-management/store";
import { slugify } from "./helpers";

export const selectCategories = (state: RootState) => state.categories;

export const selectCategoryBySlug = (slug: string) =>
  createSelector(selectCategories, (categories) =>
    categories.find((cat) => slugify(cat.category) === slug)
  );

export const selectSubcategoryBySlugs = (
  categorySlug: string,
  subcategorySlug: string
) =>
  createSelector(selectCategoryBySlug(categorySlug), (category) => {
    if (category && "subcategories" in category) {
      return category.subcategories?.find(
        (sub) => slugify(sub.category) === subcategorySlug
      );
    }
    return undefined;
  });
