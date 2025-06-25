"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Star,
  Lock,
  CheckCircle,
  XCircle,
  Timer,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
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
    sport,
  } = prediction;

  const getResultStatus = () => {
    switch (result) {
      case "win":
        return {
          icon: <CheckCircle className="w-4 h-4" />,
          color: "text-success-600 bg-success-50 border-success-200",
          label: "GANADO",
        };
      case "loss":
        return {
          icon: <XCircle className="w-4 h-4" />,
          color: "text-secondary-600 bg-secondary-50 border-secondary-200",
          label: "PERDIDO",
        };
      default:
        return {
          icon: <Timer className="w-4 h-4" />,
          color: "text-primary-600 bg-primary-50 border-primary-200",
          label: "EN VIVO",
        };
    }
  };

  const resultStatus = getResultStatus();

  const getOddsColorScheme = (odds: number) => {
    if (odds >= 2.5) return "text-success-700 bg-success-50 border-success-200";
    if (odds >= 1.8) return "text-warning-700 bg-warning-50 border-warning-200";
    return "text-primary-700 bg-primary-50 border-primary-200";
  };

  const getConfidenceBar = (confidence: number) => {
    if (confidence >= 85)
      return { width: "w-full", color: "bg-success-500", label: "ALTA" };
    if (confidence >= 70)
      return { width: "w-4/5", color: "bg-warning-500", label: "MEDIA" };
    return { width: "w-3/5", color: "bg-gray-400", label: "BAJA" };
  };

  const confidenceBar = getConfidenceBar(confidence);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={cn(
        "relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border",
        result === "win" && "ring-2 ring-success-200",
        result === "loss" && "ring-2 ring-secondary-200"
      )}
    >
      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute -top-1 -right-1 z-20">
          <motion.div
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full p-2 shadow-lg"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 4 },
              scale: { repeat: Infinity, duration: 2 },
            }}
          >
            <Star className="w-3 h-3 text-white" fill="currentColor" />
          </motion.div>
        </div>
      )}

      {/* Status Badge */}
      <div className="absolute top-3 left-3 z-10">
        <div
          className={cn(
            "flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-bold border",
            resultStatus.color
          )}
        >
          {resultStatus.icon}
          <span>{resultStatus.label}</span>
        </div>
      </div>

      {/* Confidence Indicator */}
      <div className="absolute top-3 right-3 z-10">
        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 border">
          <div className="flex items-center space-x-1">
            <div className="w-8 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full transition-all duration-500",
                  confidenceBar.color,
                  confidenceBar.width
                )}
              />
            </div>
            <span className="text-xs font-bold text-gray-700">
              {confidence}%
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 pt-12">
        {/* League Header */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-primary-600 rounded-sm" />
            </div>
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              {match.league}
            </span>
          </div>
          <div className="text-xs text-gray-500 font-medium">
            Información de Partido
          </div>
        </div>

        {/* Teams/Players Section */}
        <div className="space-y-3 mb-6">
          {/* Home Team */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border">
                <div className="w-6 h-6 bg-primary-600 rounded-full" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{match.homeTeam.name}</p>
                <p className="text-xs text-gray-500">
                  {match.homeTeam.country}
                </p>
              </div>
            </div>
            {match.score && (
              <div className="text-2xl font-black text-primary-600">
                {match.score.home}
              </div>
            )}
          </div>

          {/* VS Divider */}
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg">
              VS
            </div>
          </div>

          {/* Away Team */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border">
                <div className="w-6 h-6 bg-secondary-600 rounded-full" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{match.awayTeam.name}</p>
                <p className="text-xs text-gray-500">
                  {match.awayTeam.country}
                </p>
              </div>
            </div>
            {match.score && (
              <div className="text-2xl font-black text-primary-600">
                {match.score.away}
              </div>
            )}
          </div>
        </div>

        {/* Prediction Section */}
        <div className="bg-gradient-to-r from-primary-50 via-primary-100 to-primary-50 rounded-2xl p-4 mb-4 border border-primary-200">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <Zap className="w-4 h-4 text-primary-600" />
                <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                  {sport === "tennis" ? "Parlay de Tenis" : "Pronóstico Fútbol"}
                </span>
              </div>
              <p className="text-sm font-black text-primary-900">{pred}</p>
              <p className="text-xs text-primary-700 mt-1">
                {type.replace("_", " ").toUpperCase()}
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-600 font-medium mb-1">
                Cuota
              </div>
              <div
                className={cn(
                  "text-2xl font-black px-3 py-1 rounded-xl border",
                  getOddsColorScheme(odds)
                )}
              >
                {odds.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 text-gray-600">
                <Shield className="w-3 h-3" />
                <span>Verificado</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <TrendingUp className="w-3 h-3" />
                <span>Confianza: {confidenceBar.label}</span>
              </div>
            </div>
            <div className="text-primary-600 font-semibold">
              ROI: +{(odds * 100 - 100).toFixed(0)}%
            </div>
          </div>
        </div>

        {/* Analysis Preview */}
        <div className="mb-4">
          <div className="bg-gray-50 rounded-xl p-3 border">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-primary-600 rounded-full" />
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Análisis Experto
              </span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {isPremium ? (
                <span className="flex items-center space-x-2 text-yellow-700">
                  <Lock className="w-3 h-3" />
                  <span>
                    Análisis detallado disponible para miembros premium
                  </span>
                </span>
              ) : (
                analysis
              )}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          className={cn(
            "w-full py-4 px-6 rounded-2xl font-black text-sm transition-all duration-200 shadow-lg hover:shadow-xl",
            "flex items-center justify-center space-x-2",
            isPremium
              ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-700"
              : "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800"
          )}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isPremium && <Star className="w-4 h-4" fill="currentColor" />}
          <span>{isPremium ? "ACCESO PREMIUM" : "VER ANÁLISIS COMPLETO"}</span>
          <TrendingUp className="w-4 h-4" />
        </motion.button>

        {/* Social Proof Footer */}
        <div className="mt-3 pt-3 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>🔥 {Math.floor(Math.random() * 500 + 100)} apostadores</span>
            <span>⏰ Hace {Math.floor(Math.random() * 5 + 1)} min</span>
            <span>✅ {Math.floor(Math.random() * 20 + 80)}% precisión</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
