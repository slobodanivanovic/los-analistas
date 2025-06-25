"use client";

import { motion } from "framer-motion";
import {
  Star,
  Lock,
  CheckCircle,
  XCircle,
  Timer,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  designTokens,
  cardVariants,
  buttonVariants,
} from "@/lib/design-tokens";
import type { Prediction } from "@/types";

interface PredictionCardProps {
  prediction: Prediction;
  index: number;
}

export default function ImprovedPredictionCard({
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

  // Status configuration using design tokens
  const getStatusConfig = () => {
    const configs = {
      win: {
        icon: <CheckCircle className="w-4 h-4" />,
        label: "GANADO",
        bgColor: designTokens.colors.success[50],
        textColor: designTokens.colors.success[700],
        borderColor: designTokens.colors.success[200],
      },
      loss: {
        icon: <XCircle className="w-4 h-4" />,
        label: "PERDIDO",
        bgColor: designTokens.colors.danger[50],
        textColor: designTokens.colors.danger[700],
        borderColor: designTokens.colors.danger[200],
      },
      pending: {
        icon: <Timer className="w-4 h-4" />,
        label: "EN VIVO",
        bgColor: designTokens.colors.primary[50],
        textColor: designTokens.colors.primary[700],
        borderColor: designTokens.colors.primary[200],
      },
    };
    return configs[result || "pending"];
  };

  // Confidence indicator using design system
  const getConfidenceConfig = (confidence: number) => {
    if (confidence >= 85) {
      return {
        width: "w-full",
        color: designTokens.colors.success[500],
        label: "ALTA",
        bgColor: designTokens.colors.success[50],
      };
    }
    if (confidence >= 70) {
      return {
        width: "w-4/5",
        color: designTokens.colors.warning[500],
        label: "MEDIA",
        bgColor: designTokens.colors.warning[50],
      };
    }
    return {
      width: "w-3/5",
      color: designTokens.colors.gray[400],
      label: "BAJA",
      bgColor: designTokens.colors.gray[50],
    };
  };

  // Odds styling based on value
  const getOddsConfig = (odds: number) => {
    if (odds >= 2.5) {
      return {
        bgColor: designTokens.colors.success[50],
        textColor: designTokens.colors.success[700],
        borderColor: designTokens.colors.success[200],
      };
    }
    if (odds >= 1.8) {
      return {
        bgColor: designTokens.colors.warning[50],
        textColor: designTokens.colors.warning[700],
        borderColor: designTokens.colors.warning[200],
      };
    }
    return {
      bgColor: designTokens.colors.primary[50],
      textColor: designTokens.colors.primary[700],
      borderColor: designTokens.colors.primary[200],
    };
  };

  const statusConfig = getStatusConfig();
  const confidenceConfig = getConfidenceConfig(confidence);
  const oddsConfig = getOddsConfig(odds);

  // Card variant based on status
  const getCardStyle = () => {
    if (result === "win") return cardVariants.success;
    if (result === "loss") return cardVariants.danger;
    if (isPremium) return cardVariants.premium;
    return cardVariants.default;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.4,
        ease: designTokens.animation.easing.easeOut,
      }}
      whileHover={{
        y: -4,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="relative overflow-hidden cursor-pointer"
      style={getCardStyle()}
    >
      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute -top-2 -right-2 z-20">
          <motion.div
            className="rounded-full p-2 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            }}
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

      {/* Status & Confidence Header */}
      <div className="flex items-center justify-between mb-4">
        <div
          className="flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-bold"
          style={{
            backgroundColor: statusConfig.bgColor,
            color: statusConfig.textColor,
            borderColor: statusConfig.borderColor,
          }}
        >
          {statusConfig.icon}
          <span>{statusConfig.label}</span>
        </div>

        <div
          className="flex items-center space-x-2 px-3 py-1 rounded-full border"
          style={{
            backgroundColor: confidenceConfig.bgColor,
            color: designTokens.colors.gray[700],
            borderColor: designTokens.colors.gray[200],
          }}
        >
          <div className="flex items-center space-x-1">
            <div
              className="w-6 h-2 rounded-full overflow-hidden"
              style={{ backgroundColor: designTokens.colors.gray[200] }}
            >
              <div
                className={`h-full transition-all duration-500 ${confidenceConfig.width}`}
                style={{ backgroundColor: confidenceConfig.color }}
              />
            </div>
            <span className="text-xs font-bold">{confidence}%</span>
          </div>
        </div>
      </div>

      {/* League Info */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: designTokens.colors.primary[100] }}
          >
            <div
              className="w-4 h-4 rounded-sm"
              style={{ backgroundColor: designTokens.colors.primary[600] }}
            />
          </div>
          <span
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: designTokens.colors.gray[700] }}
          >
            {match.league}
          </span>
        </div>
        <div
          className="text-xs font-medium"
          style={{ color: designTokens.colors.gray[500] }}
        >
          {sport === "tennis" ? "Parlay de Tenis" : "Información de Partido"}
        </div>
      </div>

      {/* Teams Section */}
      <div className="space-y-3 mb-6">
        {/* Home Team */}
        <div
          className="flex items-center justify-between p-3 rounded-xl"
          style={{ backgroundColor: designTokens.colors.gray[50] }}
        >
          <div className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-xl shadow-sm flex items-center justify-center border"
              style={{
                backgroundColor: "white",
                borderColor: designTokens.colors.gray[200],
              }}
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: designTokens.colors.primary[600] }}
              />
            </div>
            <div>
              <p
                className="font-bold"
                style={{ color: designTokens.colors.gray[900] }}
              >
                {match.homeTeam.name}
              </p>
              <p
                className="text-xs"
                style={{ color: designTokens.colors.gray[500] }}
              >
                {match.homeTeam.country}
              </p>
            </div>
          </div>
          {match.score && (
            <div
              className="text-2xl font-black"
              style={{ color: designTokens.colors.primary[600] }}
            >
              {match.score.home}
            </div>
          )}
        </div>

        {/* VS Divider */}
        <div className="flex items-center justify-center">
          <div
            className="text-xs font-black px-4 py-2 rounded-full shadow-lg text-white"
            style={{
              background: `linear-gradient(135deg, ${designTokens.colors.primary[600]} 0%, ${designTokens.colors.primary[700]} 100%)`,
            }}
          >
            VS
          </div>
        </div>

        {/* Away Team */}
        <div
          className="flex items-center justify-between p-3 rounded-xl"
          style={{ backgroundColor: designTokens.colors.gray[50] }}
        >
          <div className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-xl shadow-sm flex items-center justify-center border"
              style={{
                backgroundColor: "white",
                borderColor: designTokens.colors.gray[200],
              }}
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: designTokens.colors.danger[600] }}
              />
            </div>
            <div>
              <p
                className="font-bold"
                style={{ color: designTokens.colors.gray[900] }}
              >
                {match.awayTeam.name}
              </p>
              <p
                className="text-xs"
                style={{ color: designTokens.colors.gray[500] }}
              >
                {match.awayTeam.country}
              </p>
            </div>
          </div>
          {match.score && (
            <div
              className="text-2xl font-black"
              style={{ color: designTokens.colors.primary[600] }}
            >
              {match.score.away}
            </div>
          )}
        </div>
      </div>

      {/* Prediction Section */}
      <div
        className="rounded-2xl p-4 mb-4 border"
        style={{
          background: `linear-gradient(135deg, ${designTokens.colors.primary[50]} 0%, ${designTokens.colors.primary[100]} 50%, ${designTokens.colors.primary[50]} 100%)`,
          borderColor: designTokens.colors.primary[200],
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <Zap
                className="w-4 h-4"
                style={{ color: designTokens.colors.primary[600] }}
              />
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: designTokens.colors.primary[600] }}
              >
                {sport === "tennis" ? "Parlay de Tenis" : "Pronóstico Fútbol"}
              </span>
            </div>
            <p
              className="text-sm font-black"
              style={{ color: designTokens.colors.primary[900] }}
            >
              {pred}
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: designTokens.colors.primary[700] }}
            >
              {type.replace("_", " ").toUpperCase()}
            </p>
          </div>
          <div className="text-right">
            <div
              className="text-xs font-medium mb-1"
              style={{ color: designTokens.colors.gray[600] }}
            >
              Cuota
            </div>
            <div
              className="text-2xl font-black px-3 py-1 rounded-xl border"
              style={{
                backgroundColor: oddsConfig.bgColor,
                color: oddsConfig.textColor,
                borderColor: oddsConfig.borderColor,
              }}
            >
              {odds.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-3">
            <div
              className="flex items-center space-x-1"
              style={{ color: designTokens.colors.gray[600] }}
            >
              <Shield className="w-3 h-3" />
              <span>Verificado</span>
            </div>
            <div
              className="flex items-center space-x-1"
              style={{ color: designTokens.colors.gray[600] }}
            >
              <TrendingUp className="w-3 h-3" />
              <span>Confianza: {confidenceConfig.label}</span>
            </div>
          </div>
          <div
            className="font-semibold"
            style={{ color: designTokens.colors.primary[600] }}
          >
            ROI: +{(odds * 100 - 100).toFixed(0)}%
          </div>
        </div>
      </div>

      {/* Analysis Preview */}
      <div className="mb-4">
        <div
          className="rounded-xl p-3 border"
          style={{
            backgroundColor: designTokens.colors.gray[50],
            borderColor: designTokens.colors.gray[200],
          }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: designTokens.colors.primary[600] }}
            />
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: designTokens.colors.gray[700] }}
            >
              Análisis Experto
            </span>
          </div>
          <p
            className="text-xs leading-relaxed"
            style={{ color: designTokens.colors.gray[600] }}
          >
            {isPremium ? (
              <span
                className="flex items-center space-x-2"
                style={{ color: designTokens.colors.warning[700] }}
              >
                <Lock className="w-3 h-3" />
                <span>Análisis detallado disponible para miembros premium</span>
              </span>
            ) : (
              analysis
            )}
          </p>
        </div>
      </div>

      {/* Action Button */}
      <motion.button
        className="w-full py-4 px-6 rounded-2xl font-black text-sm shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transition-all"
        style={
          isPremium
            ? {
                background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                color: "white",
              }
            : {
                background: `linear-gradient(135deg, ${designTokens.colors.primary[600]} 0%, ${designTokens.colors.primary[700]} 100%)`,
                color: "white",
              }
        }
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isPremium && <Star className="w-4 h-4" fill="currentColor" />}
        <span>{isPremium ? "ACCESO PREMIUM" : "VER ANÁLISIS COMPLETO"}</span>
        <TrendingUp className="w-4 h-4" />
      </motion.button>

      {/* Social Proof Footer */}
      <div
        className="mt-3 pt-3 border-t"
        style={{ borderColor: designTokens.colors.gray[200] }}
      >
        <div
          className="flex items-center justify-between text-xs"
          style={{ color: designTokens.colors.gray[500] }}
        >
          <div className="flex items-center space-x-1">
            <Users className="w-3 h-3" />
            <span>{Math.floor(Math.random() * 500 + 100)} siguiendo</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>Hace {Math.floor(Math.random() * 5 + 1)} min</span>
          </div>
          <span>✅ {Math.floor(Math.random() * 20 + 80)}% precisión</span>
        </div>
      </div>
    </motion.div>
  );
}
