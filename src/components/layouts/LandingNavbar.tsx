"use client";

import React, { useState } from "react";
import "../../styles/layouts/LandingNavbar.css";
import Image from "next/image";

function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={`landing-navbar ${menuOpen ? "landing-navbar--open" : ""}`}>
      <div className="navbar__container">
        <div className="landing-navbar__header">
          <Image
            src="/images/logo/royal_kicks_logo.png"
            alt="Royal Kicks Logo"
            width={50}
            height={50}
          />
          <h1 className="landing-navbar__title">Royal Kicks</h1>

          {/* <div className="landing-navbar__menu"> */}
          <div className="landing-navbar__menu-icon" onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* </div> */}

          <button
            className={`landing-navbar__menu-icon${
              menuOpen ? " landing-navbar__menu-icon--active" : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            // aria-expanded={menuOpen ? "true" : "false"}
            type="button"
          >
            <span className="landing-navbar__bar"></span>
            <span className="landing-navbar__bar"></span>
            <span className="landing-navbar__bar"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingNavbar;
