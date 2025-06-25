"use client";

import { motion } from "framer-motion";
import {
  Clock,
  TrendingUp,
  Star,
  Lock,
  CheckCircle,
  XCircle,
  Timer,
} from "lucide-react";
import { cn, formatTime, getOddsColor, getConfidenceColor } from "@/lib/utils";
import type { Prediction } from "@/types";

interface PredictionCardProps {
  prediction: Prediction;
  index: number;
}

export default function PredictionCard({
  prediction,
  index,
}: PredictionCardProps) {
  const {
    match,
    type,
    prediction: pred,
    odds,
    confidence,
    analysis,
    isPremium,
    result,
  } = prediction;

  const getResultIcon = () => {
    switch (result) {
      case "win":
        return <CheckCircle className="w-4 h-4 text-success-600" />;
      case "loss":
        return <XCircle className="w-4 h-4 text-secondary-600" />;
      default:
        return <Timer className="w-4 h-4 text-warning-600" />;
    }
  };

  const getResultColor = () => {
    switch (result) {
      case "win":
        return "border-success-200 bg-success-50";
      case "loss":
        return "border-secondary-200 bg-secondary-50";
      default:
        return "border-gray-200 bg-white";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className={cn(
        "relative bg-white rounded-2xl border-2 shadow-card hover:shadow-card-hover transition-all duration-300",
        getResultColor()
      )}
    >
      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute -top-2 -right-2 z-10">
          <motion.div
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full p-2 shadow-lg"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Star className="w-3 h-3 text-white" />
          </motion.div>
        </div>
      )}

      <div className="p-4">
        {/* Match Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src={match.leagueLogo}
                alt={match.league}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Ccircle cx="12" cy="12" r="10"/%3E%3Cpath d="M12 6v6l4 2"/%3E%3C/svg%3E';
                }}
              />
            </div>
            <div>
              <p className="text-xs text-gray-600 font-medium">
                {match.league}
              </p>
              <p className="text-xs text-gray-500">{formatTime(match.date)}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {getResultIcon()}
            <motion.div
              className={cn(
                "px-2 py-1 rounded-full text-xs font-bold text-white",
                getConfidenceColor(confidence)
              )}
              whileHover={{ scale: 1.05 }}
            >
              {confidence}%
            </motion.div>
          </div>
        </div>

        {/* Teams */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <img
                  src={match.homeTeam.logo}
                  alt={match.homeTeam.name}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/%3E%3Ccircle cx="12" cy="7" r="4"/%3E%3C/svg%3E';
                  }}
                />
              </div>
              <span className="font-medium text-gray-900">
                {match.homeTeam.name}
              </span>
            </div>
            {match.score && (
              <span className="text-lg font-bold text-gray-900">
                {match.score.home}
              </span>
            )}
          </div>

          <div className="flex items-center justify-center">
            <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              VS
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <img
                  src={match.awayTeam.logo}
                  alt={match.awayTeam.name}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/%3E%3Ccircle cx="12" cy="7" r="4"/%3E%3C/svg%3E';
                  }}
                />
              </div>
              <span className="font-medium text-gray-900">
                {match.awayTeam.name}
              </span>
            </div>
            {match.score && (
              <span className="text-lg font-bold text-gray-900">
                {match.score.away}
              </span>
            )}
          </div>
        </div>

        {/* Prediction */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-3 mb-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-primary-600 font-medium uppercase tracking-wide">
                {type.replace("_", " ")}
              </p>
              <p className="text-sm font-bold text-primary-900">{pred}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600">Cuota</p>
              <p className={cn("text-lg font-bold", getOddsColor(odds))}>
                {odds.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Analysis Preview */}
        <div className="mb-3">
          <p className="text-xs text-gray-600 line-clamp-2">
            {isPremium ? (
              <span className="flex items-center space-x-1">
                <Lock className="w-3 h-3" />
                <span>Análisis premium disponible para suscriptores</span>
              </span>
            ) : (
              analysis
            )}
          </p>
        </div>

        {/* Action Button */}
        <motion.button
          className={cn(
            "w-full py-2 px-4 rounded-xl font-medium text-sm transition-all duration-200",
            isPremium
              ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-700"
              : "bg-primary-600 text-white hover:bg-primary-700"
          )}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isPremium ? "Ver Análisis Premium" : "Ver Detalles"}
        </motion.button>
      </div>
    </motion.div>
  );
}
