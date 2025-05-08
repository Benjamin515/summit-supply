import React from "react";
import styled from "styled-components";
import { Testimonial } from "@/types/types";
import "../styles/layouts/Testimonial.css";

// Styled component for the avatar, using dynamic background color
const StyledAvatar = styled.div<{ bgColor: string }>`
  width: 50px;
  height: 50px;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${({ bgColor }) => bgColor}; /* Dynamic background color */
`;

// Function to generate a unique color for each user based on their name
const generateColorFromName = (name: string): string => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  const saturation = 60 + Math.abs(hash % 20);
  const lightness = 40 + Math.abs(hash % 20);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { location } = testimonial;

  // Display location, including town (if provided), county, and country
  const locationString = `${location.town ? location.town + ", " : ""}${
    location.countyOrState
  }, ${location.country}`;

  return (
    <div className="testimonial-card">
      <div className="testimonial-card__header">
        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-card__avatar"
          />
        ) : (
          <StyledAvatar bgColor={generateColorFromName(testimonial.name)}>
            {testimonial.name[0]} {/* Show the initial of the user's name */}
          </StyledAvatar>
        )}
        <div>
          <h3 className="testimonial-card__name">{testimonial.name}</h3>
          <p className="testimonial-card__location">{locationString}</p>{" "}
          {/* Display formatted location */}
        </div>
      </div>
      <p className="testimonial-card__review">"{testimonial.review}"</p>
      <div className="testimonial-card__rating">
        {[...Array(testimonial.rating)].map((_, index) => (
          <span key={index} className="testimonial-card__star">
            ⭐
          </span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
