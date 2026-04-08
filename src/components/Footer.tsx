"use client";

import { useState } from "react";
import "./Footer.css";
import Image from "next/image";

// Simple inline Arrow chevron — no external dependency needed
function Chevron({ up }: { up?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: up ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="footer">
      {/* ── Top ─────────────────────────────────────── */}
      <div className="footer-top">
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p className="newsletter-copy">Sign up for updates from mettā muse.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <div className="contact-block">
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div className="contact-block">
            <h4>CURRENCY</h4>
            <div className="currency-badge">
              <Image src="https://res.cloudinary.com/djae8jgjo/image/upload/v1775660816/United_States_of_America_US_koxafd.png" alt="USD" width={20} height={20} style={{ marginRight: "5px" }} />
              <span>• USD</span>
            </div>
            <p className="currency-note">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Bottom grid ─────────────────────────────── */}
      <div className="footer-bottom">

        {/* mettā muse */}
        <div className={`footer-column ${openSection === "meta" ? "open" : ""}`}>
          <button type="button" className="footer-heading" onClick={() => toggle("meta")}>
            mettā muse
            <span><Chevron up={openSection === "meta"} /></span>
          </button>
          <ul className="footer-list">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className={`footer-column ${openSection === "quick" ? "open" : ""}`}>
          <button type="button" className="footer-heading" onClick={() => toggle("quick")}>
            QUICK LINKS
            <span><Chevron up={openSection === "quick"} /></span>
          </button>
          <ul className="footer-list">
            <li>Orders &amp; Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment &amp; Pricing</li>
            <li>Return &amp; Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms &amp; Conditions</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className={`footer-column ${openSection === "follow" ? "open" : ""}`}>
          <button type="button" className="footer-heading" onClick={() => toggle("follow")}>
            FOLLOW US
            <span><Chevron up={openSection === "follow"} /></span>
          </button>
          <div className="footer-links">
            <div className="social-buttons">
              {/* Instagram */}
              <a href="#" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <line x1="7" y1="10" x2="7" y2="17" strokeLinecap="round" />
                  <circle cx="7" cy="7.5" r="0.5" fill="currentColor" stroke="none" />
                  <path d="M11 17v-3.5c0-1.5 1-2.5 2.5-2.5S16 12 16 13.5V17" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="11" y1="10" x2="11" y2="17" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Accepts — always open */}
        <div className="footer-column open">
          <button type="button" className="footer-heading">
            mettā muse ACCEPTS
          </button>
          <div className="footer-payments">
            <Image className="payment-pill" src="https://res.cloudinary.com/djae8jgjo/image/upload/v1775666796/Gpay_sp10up.png" alt="PayPal" width={60} height={35} />
            <Image className="payment-pill" src="https://res.cloudinary.com/djae8jgjo/image/upload/v1775666796/mastercard_wonnyt.png" alt="Mastercard" width={60} height={35} />
            <Image className="payment-pill" src="https://res.cloudinary.com/djae8jgjo/image/upload/v1775666796/paypal_fdsaw7.png" alt="AMEX" width={60} height={35} />
            <Image className="payment-pill" src="https://res.cloudinary.com/djae8jgjo/image/upload/v1775666796/amex_gviktn.png" alt="amex" width={60} height={35} />
            <Image className="payment-pill" src="https://res.cloudinary.com/djae8jgjo/image/upload/v1775666796/apple_vuyy7y.png" alt="applepay" width={60} height={35} />
            <Image className="payment-pill" src="https://res.cloudinary.com/djae8jgjo/image/upload/v1775666796/opay_tmyu9t.png" alt="opay" width={60} height={35} />
          </div>
        </div>

      </div>

      <div className="footer-copy">Copyright © 2023 mettamuse. All rights reserved.</div>
    </footer>
  );
}