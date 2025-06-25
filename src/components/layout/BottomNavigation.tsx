"use client";

import { motion } from "framer-motion";
import { Home, Zap, Trophy, BarChart3, Gift, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavigationTab } from "@/types";

interface BottomNavigationProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
}

const navigationItems = [
  {
    id: "home" as const,
    label: "Home",
    icon: Home,
    color: "text-primary-600",
  },
  {
    id: "futbol" as const,
    label: "Fútbol",
    icon: Zap,
    color: "text-success-600",
  },
  {
    id: "tenis" as const,
    label: "Tenis",
    icon: Trophy,
    color: "text-warning-600",
  },
  {
    id: "estadisticas" as const,
    label: "Stats",
    icon: BarChart3,
    color: "text-secondary-600",
  },
  {
    id: "promos" as const,
    label: "Promos",
    icon: Gift,
    color: "text-pink-600",
  },
  {
    id: "nosotros" as const,
    label: "Nosotros",
    icon: Users,
    color: "text-indigo-600",
  },
];

export default function BottomNavigation({
  activeTab,
  onTabChange,
}: BottomNavigationProps) {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-200/50 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="grid grid-cols-6 h-16 px-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex flex-col items-center justify-center space-y-1 rounded-lg transition-all duration-200",
                "hover:bg-gray-100/80 active:scale-95"
              )}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className={cn(
                  "relative p-1 rounded-lg transition-all duration-200",
                  isActive && "bg-primary-50"
                )}
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 transition-colors duration-200",
                    isActive ? item.color : "text-gray-500"
                  )}
                />
                {isActive && (
                  <motion.div
                    className={cn(
                      "absolute -bottom-1 left-1/2 w-1 h-1 rounded-full",
                      item.color.replace("text", "bg")
                    )}
                    layoutId="activeIndicator"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{ x: "-50%" }}
                  />
                )}
              </motion.div>
              <span
                className={cn(
                  "text-xs font-medium transition-colors duration-200",
                  isActive ? item.color : "text-gray-500"
                )}
              >
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Safe area for devices with home indicator */}
      <div className="h-safe-area-inset-bottom bg-white/90" />
    </motion.div>
  );
}
