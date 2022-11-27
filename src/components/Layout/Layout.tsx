import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import tw, { styled } from "twin.macro";
import { useRequireAuth } from "@/hooks/useRequireAuth";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const authorized = useRequireAuth();

  return authorized ? (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  ) : (
    <div tw="flex items-center">Loading...</div>
  );
};
