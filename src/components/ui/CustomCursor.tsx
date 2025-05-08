import React, { useEffect, useState } from "react";
import "../../styles/ui/CustomCursor.css";

function CustomCursor() {
  // State to control cursor visibility
  const [isVisible, setIsVisible] = useState(false);

  // State to track whether the cursor has moved (triggers scale-in animation)
  const [hasMoved, setHasMoved] = useState(false);

  // State to track when the cursor is clicked (triggers shrink animation)
  const [isClicked, setIsClicked] = useState(false);

  // Prevents animation from running multiple times (avoids double animations)
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    /**
     * Handles mouse movement and updates the cursor position.
     * Also triggers the initial scale-in animation when the cursor moves for the first time.
     */
    const handleMouseMove = (e: MouseEvent) => {
      // Update CSS variables to match cursor position
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${e.clientY}px`
      );

      // If the cursor hasn't moved yet, show it and trigger scale-in animation
      if (!hasMoved) {
        setHasMoved(true);
        setIsVisible(true);

        // Prevent clicks from triggering an animation until scale-in completes
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 400); // Wait for scale-in animation to complete
      }
    };

    /**
     * Handles the click event by triggering the shrink animation.
     * Prevents the animation from running twice in quick succession.
     */
    const handleClick = () => {
      if (!isAnimating) {
        // Ensure animation is not already running
        setIsAnimating(true); // Lock animation to prevent double execution
        setIsClicked(true); // Apply shrink effect

        // Reset the click animation state after it finishes (300ms duration)
        setTimeout(() => {
          setIsClicked(false);
          setIsAnimating(false); // Unlock animation after completion
        }, 300);
      }
    };

    // Attach event listeners for mouse movement and clicks
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    // Cleanup event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, [hasMoved, isAnimating]); // Dependencies ensure correct state updates

  return (
    <div
      className={`custom-cursor 
        ${isVisible ? "visible" : "hidden"} 
        ${isClicked ? "click" : ""} 
        ${hasMoved ? "scale-in" : ""}`}
    />
  );
}

export default CustomCursor;
