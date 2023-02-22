import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const Layout = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">{heroBanner.smallText}</p>
      <p className="beats-solo">Small Text</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <img src={urlFor(heroBanner.image)} alt="imageee" />
      <Link href={`/product/${heroBanner.product}`}>
        <button type="button">{heroBanner.buttonText}</button>
      </Link>
      {/* test ssss*/}
    </div>
  );
};

export default Layout;
