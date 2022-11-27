import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import tw, { styled } from "twin.macro";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

