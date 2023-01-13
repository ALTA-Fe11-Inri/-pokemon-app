import React, { FC } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-[#0f172a] dark:bg-gray-500 flex flex-col overflow-auto">
      <Navbar />
      <div className="h-full w-full overflow-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
