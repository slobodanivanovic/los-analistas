"use client";

import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PredictionCard from "@/components/cards/PredictionCard";
import { TrendingUp, Flame, Clock, ArrowRight, Zap, Star } from "lucide-react";
import type { Prediction } from "@/types";

// Sample data for demonstrations - Professional Examples
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
];

export default function HomePage() {
  return (
    <Layout>
      <div className="px-4 py-6 space-y-6">
        {/* Professional Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <h2 className="text-2xl font-black text-gray-900 mb-2">
              Pronósticos de Hoy
            </h2>
            <p className="text-gray-600 mb-4">
              Predicciones verificadas por nuestros analistas expertos
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-1 text-success-600">
                <div className="w-2 h-2 bg-success-500 rounded-full" />
                <span className="font-semibold">89% Precisión</span>
              </div>
              <div className="flex items-center space-x-1 text-primary-600">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span className="font-semibold">24/7 Monitoreo</span>
              </div>
              <div className="flex items-center space-x-1 text-yellow-600">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="font-semibold">Análisis Experto</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Stats Dashboard */}
        <motion.div
          className="grid grid-cols-3 gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-success-500 to-success-600 rounded-2xl p-4 text-white text-center">
            <div className="text-2xl font-black">89%</div>
            <div className="text-xs font-medium opacity-90">Precisión</div>
            <div className="text-xs opacity-75">Esta semana</div>
          </div>

          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-4 text-white text-center">
            <div className="text-2xl font-black">+24%</div>
            <div className="text-xs font-medium opacity-90">ROI Promedio</div>
            <div className="text-xs opacity-75">Último mes</div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-4 text-white text-center">
            <div className="text-2xl font-black">127</div>
            <div className="text-xs font-medium opacity-90">
              Picks Ganadores
            </div>
            <div className="text-xs opacity-75">Este mes</div>
          </div>
        </motion.div>

        {/* Live Activity Banner */}
        <motion.div
          className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 rounded-2xl p-4 text-white mb-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-white/5 animate-pulse" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-3 h-3 bg-success-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <div>
                <p className="font-bold text-sm">🔥 Pronóstico en Vivo</p>
                <p className="text-xs opacity-90">
                  Manchester City vs Arsenal - Ganando 2-1
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-black">+47%</p>
              <p className="text-xs opacity-90">Ganancia</p>
            </div>
          </div>
        </motion.div>

        {/* Featured Predictions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-black text-gray-900 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-primary-600" />
                <span>Pronósticos de Expertos</span>
                <span className="bg-secondary-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  HOY
                </span>
              </h3>
              <p className="text-xs text-gray-600">
                ⏰ Actualizados hace 3 minutos
              </p>
            </div>
            <div className="text-right">
              <button className="flex items-center space-x-1 text-primary-600 text-sm font-bold hover:text-primary-700 transition-colors">
                <span>Ver todos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-gray-500">🔥 5 picks activos</p>
            </div>
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

        {/* Professional Premium CTA */}
        <motion.div
          className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl p-6 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-transparent" />
          <div className="relative">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5" fill="currentColor" />
                  <span className="text-sm font-bold uppercase tracking-wider">
                    Membresía Premium
                  </span>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full font-bold">
                    50% OFF
                  </span>
                </div>
                <h3 className="text-xl font-black mb-2">
                  Análisis Exclusivos + ROI Garantizado
                </h3>
                <div className="space-y-1 text-sm opacity-90">
                  <p>✅ Pronósticos con 89% de precisión</p>
                  <p>✅ Análisis detallado de cada partido</p>
                  <p>✅ Notificaciones en tiempo real</p>
                  <p>✅ Grupo VIP de Telegram</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs opacity-75 line-through">
                  €49.99/mes
                </div>
                <div className="text-2xl font-black">€24.99</div>
                <div className="text-xs opacity-90">por mes</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xs">
                <span className="bg-white/20 px-2 py-1 rounded-full">
                  ⏰ Oferta termina en 23h 45m
                </span>
              </div>
              <motion.button
                className="bg-white text-yellow-600 px-6 py-3 rounded-xl font-black text-sm hover:bg-gray-100 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                UNIRSE AHORA
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
