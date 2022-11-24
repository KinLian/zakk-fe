import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import tw from "twin.macro";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main tw="px-5 h-screen flex flex-col justify-center items-center">
        {children}
      </main>
      <Footer />
    </>
  );
};
