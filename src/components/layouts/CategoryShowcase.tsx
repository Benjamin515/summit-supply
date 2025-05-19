"use client";

import React, { useEffect, useRef, useState } from "react";
import "../../styles/layouts/CategoryShowcase.css";
import { useAutoVerticalScroll } from "@/hooks/useAutoVerticalScroll";
import Button from "../ui/Button";
import { categories } from "@/data/categoriesData";

function CategoryShowcase() {
  const [activeCategory, setActiveCategory] = useState("Tops");
  const scrollRef = useRef<HTMLDivElement>(null);
  // Refs for the three scroll tracks
  const scrollRef1 = useRef<HTMLDivElement | null>(null);
  const scrollRef2 = useRef<HTMLDivElement | null>(null);
  const scrollRef3 = useRef<HTMLDivElement | null>(null);
  // Refs for the first and last item cards
  const firstCardRef = useRef<HTMLDivElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [scrollDirection1, setScrollDirection1] = useState<"up" | "down">(
    "down"
  );
  const [scrollDirection2, setScrollDirection2] = useState<"up" | "down">("up");
  const [scrollDirection3, setScrollDirection3] = useState<"up" | "down">(
    "down"
  );
  const [isHovered, setIsHovered] = useState(false);
  const [isBodyHovered, setIsBodyHovered] = useState(false);
  const [isTextBoxVisible, setIsTextBoxVisible] = useState(false);
  // Initial dynamic data (this can be fetched or updated as needed)
  const [dataArray, setDataArray] = useState<string[]>([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ]);

  // Create 3 empty items at the beginning and 3 empty items at the end
  const emptyItems = Array(3).fill(""); // Array with 3 empty items

  // Combine the empty items at the start, the original array in the middle, and empty items at the end
  const combinedArray = [...emptyItems, ...dataArray, ...emptyItems];

  const { onMouseEnter, onMouseLeave } = useAutoVerticalScroll(scrollRef, {
    externalDirection: scrollDirection,
    setExternalDirection: setScrollDirection,
    externalIsHovered: isHovered,
    scrollSpeed: 30,
  });

  // Initialize the custom hook for each scroll track
  useAutoVerticalScroll(scrollRef1, {
    externalDirection: scrollDirection1,
    setExternalDirection: setScrollDirection1,
    externalIsHovered: isHovered,
    scrollSpeed: 1,
  });
  useAutoVerticalScroll(scrollRef2, {
    externalDirection: scrollDirection2,
    setExternalDirection: setScrollDirection2,
    externalIsHovered: isHovered,
    scrollSpeed: 1,
  });
  useAutoVerticalScroll(scrollRef3, {
    externalDirection: scrollDirection3,
    setExternalDirection: setScrollDirection3,
    externalIsHovered: isHovered,
    scrollSpeed: 1,
  });

  // const scrollSpeed = 1; // Adjust scroll speed here
  const scrollSpeed = 20; // Adjust scroll speed here

  // Handle scroll event to toggle visibility of the text box
  /* const handleScroll2 = () => {
    if (scrollRef.current) {
      const scrollTop = scrollRef.current.scrollTop;
      const scrollHeight = scrollRef.current.scrollHeight;
      const clientHeight = scrollRef.current.clientHeight;

      if (scrollTop === 0 || scrollTop + clientHeight === scrollHeight) {
        setIsTextBoxVisible(true); // Show text box when scrolled to top or bottom
      } else {
        setIsTextBoxVisible(false); // Hide text box when not at the top or bottom
      }
    }
  }; */

  // Function to handle the scroll event
  const handleScroll = () => {
    // Define a ref for the scroll container
    // const scrollRef = scrollRef1 | scrollRef2 | scrollRef3;

    if (scrollRef.current && firstCardRef.current && lastCardRef.current) {
      const scrollTop = scrollRef.current.scrollTop;
      const scrollHeight = scrollRef.current.scrollHeight;
      const clientHeight = scrollRef.current.clientHeight;

      // Get the positions of the first and last card elements
      const firstCardTop = firstCardRef.current.offsetTop;
      const lastCardTop = lastCardRef.current.offsetTop;
      const lastCardHeight = lastCardRef.current.offsetHeight;

      // Show the text box when the first or last card is in view
      if (
        (scrollTop >= firstCardTop &&
          scrollTop < firstCardTop + firstCardRef.current.offsetHeight) || // First card in view
        scrollTop + clientHeight >= lastCardTop + lastCardHeight // Last card in view
      ) {
        setIsTextBoxVisible(true);
      } else {
        setIsTextBoxVisible(false);
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      // Add scroll listener to the scrollRef element
      scrollRef.current.addEventListener("scroll", handleScroll);
    }
    // Cleanup the event listener on unmount
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // This effect is just an example for changing the data after 5 seconds (you can remove or replace it)
  useEffect(() => {
    setTimeout(() => {
      setDataArray([
        "New Item 1",
        "New Item 2",
        "New Item 3",
        "New Item 4",
        "New Item 5",
        "New Item 6",
      ]);
    }, 5000);
  }, []);

  // 👇 Scroll the first track to bottom on mount
  useEffect(() => {
    const container = scrollRef1.current;
    if (container) {
      container.scrollTop = 0;
    }
  }, []);

  // 👇 Scroll the second track to bottom on mount
  useEffect(() => {
    const container = scrollRef2.current;
    if (container) {
      container.scrollTop = container.scrollHeight - container.clientHeight;
    }
  }, []);

  // 👇 Scroll the third track to bottom on mount
  useEffect(() => {
    const container = scrollRef3.current;
    if (container) {
      container.scrollTop = 0;
    }
  }, []);

  // Auto-scroll logic that will run depending on scroll direction
  /* useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scroll = () => {
      if (isHovered || !container) return;

      const atTop = container.scrollTop <= 0;
      const atBottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight;

      if (atBottom) {
        setScrollDirection("up");
      } else if (atTop) {
        setScrollDirection("down");
      }

      if (scrollDirection === "down") {
        container.scrollTop += scrollSpeed;
      } else {
        container.scrollTop -= scrollSpeed;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isHovered, scrollDirection]); */

  // Function to set the scroll direction to 'down'
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    setScrollDirection("down"); // Ensure scrolling continues down after manual trigger
  };

  // Function to set the scroll direction to 'up'
  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
    setScrollDirection("up"); // Change scroll direction to up after manual trigger
  };

  return (
    <div className="category-showcase">
      <div className="category-showcase__left">
        <div
          className={`category-showcase__nav ${
            isBodyHovered ? "category-showcase__nav--hidden" : ""
          }`}
        >
          {categories.map((category) => (
            <button
              type="button"
              onClick={() => setActiveCategory(category.category)}
            >
              {category.category}
            </button>
          ))}
        </div>

        <div
          className="category-showcase__left__body"
          onMouseEnter={() => setIsBodyHovered(true)}
          onMouseLeave={() => setIsBodyHovered(false)}
        >
          <div className="category-showcase__left__body--background"></div>
          <div className="category-showcase__category--active">
            <p>{activeCategory}</p>
            <p>{activeCategory}</p>
            <p>{activeCategory}</p>
            <ul className="category-showcase__categories">
              {categories[1].collection?.map((collection) => (
                <li>{collection.name}</li>
              ))}
            </ul>
            <Button label="Shop Now" className="category-showcase__cta" />
          </div>
        </div>
      </div>

      <div
        className="category-showcase__right"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <div className="category-showcase__text-boxes">
          <p>Top</p>
          <p>Top</p>
          <p>Top</p>
          <p>Top</p>
          <p>Top</p>
          <p>Top</p>
          <p>Top</p>
          <p>Top</p>
          <p>Top</p>
        </div> */}
        <div className="category-showcase__image-grid" ref={scrollRef1}>
          {/* <div className="category-showcase__text-container"> */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              className="category-showcase__text-box"
              key={`text-box-${index}`}
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <p key={index}>Tops</p>
              ))}
            </div>
          ))}
          {/* </div> */}
          {/* <div className="category-showcase__image-grid--images"> */}
          {dataArray.map((item, index) => {
            // Dynamically add refs for the first and last items
            const isFirst = index === 4;
            const isLast = index === combinedArray.length - 5;

            return (
              <>
                <div
                  key={`category-image-card${index}`}
                  className={`category-image-grid__card ${
                    item === "" ? "category-image-grid__empty" : ""
                  }`}
                  ref={isFirst ? firstCardRef : isLast ? lastCardRef : null}
                >
                  {item || ""}
                </div>
                {/* <div className="category-image-card--separator"></div> */}
              </>
            );
          })}
          {/* </div> */}
        </div>

        <div className="category-showcase__image-grid" ref={scrollRef2}>
          {/* <div className="category-showcase__text-container"> */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              className="category-showcase__text-box"
              key={`text-box-${index}`}
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <p key={index}>Tops</p>
              ))}
            </div>
          ))}
          {/* </div> */}
          {dataArray.map((item, index) => (
            <div
              key={`category-image-card${index}`}
              className={`category-image-grid__card ${
                item === "" ? "category-image-grid__empty" : ""
              }`}
            >
              {item || ""}
            </div>
          ))}
        </div>

        <div className="category-showcase__image-grid" ref={scrollRef3}>
          {/* <div className="category-showcase__text-container"> */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              className="category-showcase__text-box"
              key={`text-box-${index}`}
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <p key={index}>Tops</p>
              ))}
            </div>
          ))}
          {/* </div> */}
          {dataArray.map((item, index) => (
            <div
              key={`category-image-card${index}`}
              className={`category-image-grid__card ${
                item === "" ? "category-image-grid__empty" : ""
              }`}
            >
              {item || ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryShowcase;
