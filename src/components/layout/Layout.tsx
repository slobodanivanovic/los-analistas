"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import BottomNavigation from "./BottomNavigation";
import type { NavigationTab } from "@/types";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [activeTab, setActiveTab] = useState<NavigationTab>("home");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pb-20">
        {" "}
        {/* Bottom padding to account for fixed navigation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
