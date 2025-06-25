"use client";

import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PredictionCard from "@/components/cards/PredictionCard";
import { TrendingUp, Flame, Clock, ArrowRight, Zap } from "lucide-react";
import type { Prediction } from "@/types";

// Update your sample data in src/app/page.tsx with this more professional data:

const samplePredictions: Prediction[] = [
  {
    id: "1",
    match: {
      id: "m1",
      homeTeam: {
        id: "t1",
        name: "ES Tunis",
        logo: "/teams/es-tunis.png",
        country: "Tunisia",
      },
      awayTeam: {
        id: "t2",
        name: "Chelsea",
        logo: "/teams/chelsea.png",
        country: "England",
      },
      league: "Champions League",
      leagueLogo: "/leagues/ucl.png",
      date: "2024-06-25T20:00:00Z",
      time: "20:00",
      status: "upcoming",
    },
    type: "winner",
    prediction: "Chelsea Gana",
    odds: 1.47,
    confidence: 89,
    analysis:
      "Chelsea ha mostrado superioridad técnica y física en enfrentamientos anteriores. El equipo inglés cuenta con mejor plantilla y experiencia en competiciones europeas.",
    sport: "football",
    isPremium: false,
    result: "pending",
  },
  {
    id: "2",
    match: {
      id: "m2",
      homeTeam: {
        id: "t3",
        name: "B. Shelton",
        logo: "/flags/usa.png",
        country: "Estados Unidos",
      },
      awayTeam: {
        id: "t4",
        name: "L. Tien",
        logo: "/flags/usa.png",
        country: "Estados Unidos",
      },
      league: "Mallorca Championships",
      leagueLogo: "/leagues/mallorca.png",
      date: "2024-06-26T17:30:00Z",
      time: "17:30",
      status: "upcoming",
    },
    type: "winner",
    prediction: "B. Shelton Gana",
    odds: 1.47,
    confidence: 82,
    analysis:
      "Shelton ha demostrado mejor forma física en los últimos torneos. Su saque potente será clave en las canchas de Mallorca.",
    sport: "tennis",
    isPremium: true,
    result: "pending",
  },
  {
    id: "3",
    match: {
      id: "m3",
      homeTeam: {
        id: "t5",
        name: "Real Madrid",
        logo: "/teams/real-madrid.png",
        country: "España",
      },
      awayTeam: {
        id: "t6",
        name: "Barcelona",
        logo: "/teams/barcelona.png",
        country: "España",
      },
      league: "La Liga Santander",
      leagueLogo: "/leagues/laliga.png",
      date: "2024-06-27T21:00:00Z",
      time: "21:00",
      status: "upcoming",
    },
    type: "over_under",
    prediction: "Más de 2.5 Goles",
    odds: 1.85,
    confidence: 91,
    analysis:
      "El Clásico siempre produce goles. Ambos equipos necesitan ganar y jugarán al ataque desde el primer minuto.",
    sport: "football",
    isPremium: true,
    result: "pending",
  },
  {
    id: "4",
    match: {
      id: "m4",
      homeTeam: {
        id: "t7",
        name: "Manchester City",
        logo: "/teams/man-city.png",
        country: "Inglaterra",
      },
      awayTeam: {
        id: "t8",
        name: "Arsenal",
        logo: "/teams/arsenal.png",
        country: "Inglaterra",
      },
      league: "Premier League",
      leagueLogo: "/leagues/premier.png",
      date: "2024-06-28T16:00:00Z",
      time: "16:00",
      status: "live",
      score: {
        home: 2,
        away: 1,
      },
    },
    type: "both_teams_score",
    prediction: "Ambos Equipos Marcan",
    odds: 1.65,
    confidence: 87,
    analysis:
      "Ambos equipos tienen ataques letales. City marca en casa y Arsenal necesita empatar para mantenerse en la pelea por el título.",
    sport: "football",
    isPremium: false,
    result: "win",
  },
  {
    id: "5",
    match: {
      id: "m5",
      homeTeam: {
        id: "t9",
        name: "C. Alcaraz",
        logo: "/flags/spain.png",
        country: "España",
      },
      awayTeam: {
        id: "t10",
        name: "N. Djokovic",
        logo: "/flags/serbia.png",
        country: "Serbia",
      },
      league: "Roland Garros",
      leagueLogo: "/leagues/roland-garros.png",
      date: "2024-06-29T15:00:00Z",
      time: "15:00",
      status: "upcoming",
    },
    type: "winner",
    prediction: "Alcaraz en 4 Sets",
    odds: 2.1,
    confidence: 76,
    analysis:
      "Alcaraz está en su mejor momento en tierra batida. Su juventud y energía serán determinantes contra un Djokovic que viene de lesión.",
    sport: "tennis",
    isPremium: true,
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
