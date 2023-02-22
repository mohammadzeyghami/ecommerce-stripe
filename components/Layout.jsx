import React from "react";
import Link from "next/link";
const Layout = () => {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">Small Text</p>
      <h3>Mid Text</h3>
      <Link href="/product/ID">
        <button type="button">Button Text</button>
      </Link>
      {/* test */}
    </div>
  );
};

export default Layout;
