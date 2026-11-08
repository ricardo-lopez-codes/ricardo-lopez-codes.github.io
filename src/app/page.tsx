"use client";

import { useState, useEffect } from "react";
import DesktopPortfolio from "@/components/DesktopPortfolio";
import MobilePortfolio from "@/components/MobilePortfolio";

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Run on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent Next.js hydration mismatches by returning a solid dark placeholder during SSR
  if (isMobile === null) {
    return (
      <div style={{ background: "#020617", minHeight: "100vh", width: "100%" }}></div>
    );
  }

  return isMobile ? <MobilePortfolio /> : <DesktopPortfolio />;
}
