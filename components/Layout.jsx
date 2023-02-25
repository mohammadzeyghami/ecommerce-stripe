import React from "react";
import { Navbar, Footer } from ".";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Mohammad Zeyghami Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
