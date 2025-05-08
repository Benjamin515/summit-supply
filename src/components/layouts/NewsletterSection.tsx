"use client";

import React, { useState } from "react";
import "../../styles/layouts/NewsletterSection.css";

function NewsletterSection() {
  const [selectedMethod, setSelectedMethod] = useState<string>("email");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handlePushSubscription = () => {
    // Add logic to enable push notifications
    alert("Push notifications enabled!");
  };

  const handleWhatsAppSubscription = () => {
    // Add logic to subscribe via WhatsApp
    alert("Subscribed via WhatsApp!");
  };

  const handleSubscribe = () => {
    if (selectedMethod === "email" && email) {
      alert(`Subscribed with email: ${email}`);
    } else if (selectedMethod === "sms" && phone) {
      alert(`Subscribed with phone: ${phone}`);
    } else if (selectedMethod === "push") {
      alert("Push notifications enabled!");
    } else if (selectedMethod === "whatsapp") {
      alert("Subscribed via WhatsApp!");
    }
  };

  return (
    <div className="newsletter-section">
      <h2>Join Our Community</h2>
      <p>Get updates, exclusive offers, and the latest news—your way.</p>

      <div className="subscription-options">
        <div className="subscription-option">
          <input
            type="radio"
            id="email"
            name="subscription-method"
            value="email"
            checked={selectedMethod === "email"}
            onChange={handleOptionChange}
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="subscription-option">
          <input
            type="radio"
            id="sms"
            name="subscription-method"
            value="sms"
            checked={selectedMethod === "sms"}
            onChange={handleOptionChange}
          />
          <label htmlFor="sms">SMS/Text Message</label>
        </div>

        <div className="subscription-option">
          <input
            type="radio"
            id="push"
            name="subscription-method"
            value="push"
            checked={selectedMethod === "push"}
            onChange={handleOptionChange}
          />
          <label htmlFor="push">Push Notifications</label>
        </div>

        <div className="subscription-option">
          <input
            type="radio"
            id="whatsapp"
            name="subscription-method"
            value="whatsapp"
            checked={selectedMethod === "whatsapp"}
            onChange={handleOptionChange}
          />
          <label htmlFor="whatsapp">WhatsApp/Messenger</label>
        </div>
      </div>

      <div className="input-section">
        {selectedMethod === "email" && (
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        )}

        {selectedMethod === "sms" && (
          <div>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
        )}

        {selectedMethod === "push" && (
          <div>
            <button onClick={handlePushSubscription}>
              Enable Push Notifications
            </button>
          </div>
        )}

        {selectedMethod === "whatsapp" && (
          <div>
            <button onClick={handleWhatsAppSubscription}>
              Subscribe via WhatsApp
            </button>
          </div>
        )}

        <button className="cta-button" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsletterSection;
