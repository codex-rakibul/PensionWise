import React from "react";
import HeaderComponent from "../components/header/index";
import FooterComponent from "../components/footer/index";

export default function LayoutComponet({ children }) {
  return (
    <div className="bg-black">
      {/* header */}
      <header>
        <HeaderComponent />
      </header>

      {/* Page content */}
      {children}
      <div className="sm:pb-0 pb-20" />
      {/* Footer */}
      <footer className="sm:block hidden">
        <FooterComponent />
        </footer>
    </div>
  );
}
