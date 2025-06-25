"use client";

import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PredictionCard from "@/components/cards/PredictionCard";
import { TrendingUp, Flame, Clock, ArrowRight, Zap } from "lucide-react";
import type { Prediction } from "@/types";

// Sample data for demonstrations
const samplePredictions: Prediction[] = [
  {
    id: "1",
    match: {
      id: "m1",
      homeTeam: {
        id: "t1",
        name: "Real Madrid",
        logo: "https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png",
        country: "España",
      },
      awayTeam: {
        id: "t2",
        name: "Barcelona",
        logo: "https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png",
        country: "España",
      },
      league: "La Liga",
      leagueLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/la-liga-vector-logo.png",
      date: "2024-06-25T20:00:00Z",
      time: "20:00",
      status: "upcoming",
    },
    type: "winner",
    prediction: "Real Madrid Gana",
    odds: 2.1,
    confidence: 85,
    analysis:
      "Real Madrid ha mostrado una forma excepcional en casa, ganando 8 de sus últimos 10 partidos. Barcelona tiene bajas importantes en defensa.",
    sport: "football",
    isPremium: true,
    result: "pending",
  },
  {
    id: "2",
    match: {
      id: "m2",
      homeTeam: {
        id: "t3",
        name: "Manchester City",
        logo: "https://logos-world.net/wp-content/uploads/2020/06/Manchester-City-Logo.png",
        country: "Inglaterra",
      },
      awayTeam: {
        id: "t4",
        name: "Liverpool",
        logo: "https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png",
        country: "Inglaterra",
      },
      league: "Premier League",
      leagueLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/premier-league-vector-logo.png",
      date: "2024-06-26T17:30:00Z",
      time: "17:30",
      status: "upcoming",
    },
    type: "over_under",
    prediction: "Más de 2.5 Goles",
    odds: 1.8,
    confidence: 78,
    analysis:
      "Ambos equipos promedian más de 2 goles por partido. Historial de enfrentamientos con muchos goles.",
    sport: "football",
    isPremium: false,
    result: "pending",
  },
  {
    id: "3",
    match: {
      id: "m3",
      homeTeam: {
        id: "t5",
        name: "Novak Djokovic",
        logo: "https://example.com/djokovic.jpg",
        country: "Serbia",
      },
      awayTeam: {
        id: "t6",
        name: "Rafael Nadal",
        logo: "https://example.com/nadal.jpg",
        country: "España",
      },
      league: "Roland Garros",
      leagueLogo: "https://example.com/rg-logo.png",
      date: "2024-06-27T15:00:00Z",
      time: "15:00",
      status: "upcoming",
    },
    type: "winner",
    prediction: "Djokovic en 4 Sets",
    odds: 2.5,
    confidence: 72,
    analysis:
      "Djokovic ha derrotado a Nadal en sus últimos 3 enfrentamientos en canchas duras.",
    sport: "tennis",
    isPremium: true,
    result: "pending",
  },
  {
    id: "4",
    match: {
      id: "m4",
      homeTeam: {
        id: "t7",
        name: "PSG",
        logo: "https://logos-world.net/wp-content/uploads/2020/06/PSG-Logo.png",
        country: "Francia",
      },
      awayTeam: {
        id: "t8",
        name: "Bayern Munich",
        logo: "https://logos-world.net/wp-content/uploads/2020/06/Bayern-Munich-Logo.png",
        country: "Alemania",
      },
      league: "Champions League",
      leagueLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/uefa-champions-league-vector-logo.png",
      date: "2024-06-28T21:00:00Z",
      time: "21:00",
      status: "upcoming",
    },
    type: "both_teams_score",
    prediction: "Ambos Equipos Marcan",
    odds: 1.6,
    confidence: 82,
    analysis:
      "Ambos equipos tienen ataques prolíficos y defensas vulnerables en competiciones europeas.",
    sport: "football",
    isPremium: false,
    result: "pending",
  },
];

export default function HomePage() {
  return (
    <Layout>
      <div className="px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Pronósticos de Hoy
          </h2>
          <p className="text-gray-600">
            Las mejores predicciones de nuestros expertos
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-success-500 to-success-600 rounded-2xl p-4 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">Racha Ganadora</span>
            </div>
            <p className="text-2xl font-bold">7 días</p>
            <p className="text-xs opacity-90">+12.4% ROI</p>
          </div>

          <div className="bg-gradient-to-br from-warning-500 to-warning-600 rounded-2xl p-4 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Flame className="w-5 h-5" />
              <span className="text-sm font-medium">Picks Calientes</span>
            </div>
            <p className="text-2xl font-bold">4</p>
            <p className="text-xs opacity-90">Disponibles hoy</p>
          </div>
        </motion.div>

        {/* Featured Predictions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
              <Zap className="w-5 h-5 text-primary-600" />
              <span>Pronósticos Destacados</span>
            </h3>
            <button className="flex items-center space-x-1 text-primary-600 text-sm font-medium">
              <span>Ver todos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {samplePredictions.map((prediction, index) => (
              <PredictionCard
                key={prediction.id}
                prediction={prediction}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Live Updates Banner */}
        <motion.div
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center space-x-3">
            <motion.div
              className="w-3 h-3 bg-success-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <div className="flex-1">
              <p className="font-medium">Actualizaciones en Vivo</p>
              <p className="text-sm opacity-90">
                Sigue los resultados en tiempo real
              </p>
            </div>
            <Clock className="w-5 h-5" />
          </div>
        </motion.div>

        {/* Premium Upgrade Banner */}
        <motion.div
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-lg">¡Hazte Premium!</p>
              <p className="text-sm opacity-90">
                Accede a análisis exclusivos y estadísticas avanzadas
              </p>
            </div>
            <motion.button
              className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Upgrade
            </motion.button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
