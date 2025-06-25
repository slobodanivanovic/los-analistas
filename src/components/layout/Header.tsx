"use client";

import { motion } from "framer-motion";
import { Bell, Search, TrendingUp, Star, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  userName?: string;
}

export default function Header({ userName = "Trader" }: HeaderProps) {
  return (
    <motion.header
      className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 header-pattern" />

      <div className="relative px-4 py-6 pb-8">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <motion.div
              className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="w-5 h-5 text-white" />
            </motion.div>

            <div>
              <motion.p
                className="text-white/80 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Bienvenido de vuelta
              </motion.p>
              <motion.h1
                className="text-white text-lg font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {userName} 👋
              </motion.h1>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <motion.button
              className="relative w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5 text-white" />
            </motion.button>

            <motion.button
              className="relative w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="w-5 h-5 text-white" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-secondary-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Brand Section */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-2">
            <motion.div
              className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <TrendingUp className="w-5 h-5 text-white" />
            </motion.div>
            <h2 className="text-2xl font-bold text-white">Los Analistas</h2>
            <motion.div
              className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Star className="w-3 h-3 text-white" />
            </motion.div>
          </div>
          <p className="text-white/90 text-sm font-medium">
            Pronósticos Deportivos Premium
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-white text-lg font-bold">89%</p>
            <p className="text-white/80 text-xs">Precisión</p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-white text-lg font-bold">2.4x</p>
            <p className="text-white/80 text-xs">ROI Promedio</p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-white text-lg font-bold">15K+</p>
            <p className="text-white/80 text-xs">Seguidores</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-6"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="white"
          />
        </svg>
      </div>
    </motion.header>
  );
}
