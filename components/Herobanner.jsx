import React from "react";
import Link from "next/link";

const Herobanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <div className="products-heading">
          <h2>Best Seller Products</h2>
          <p>speaker There are many variations passages</p>
        </div>
        <img src="" alt="headphones" className="hero-banner-image" />
        <div>
          <Link href="/product/ID">
            <button type="button">Button Text</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>Description </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
