export interface Team {
  id: string
  name: string
  logo: string
  country: string
}

export interface Match {
  id: string
  homeTeam: Team
  awayTeam: Team
  league: string
  leagueLogo: string
  date: string
  time: string
  status: 'upcoming' | 'live' | 'finished'
  score?: {
    home: number
    away: number
  }
}

export interface Prediction {
  id: string
  match: Match
  type: 'winner' | 'over_under' | 'both_teams_score' | 'handicap'
  prediction: string
  odds: number
  confidence: number
  analysis: string
  sport: 'football' | 'tennis'
  isPremium: boolean
  result?: 'win' | 'loss' | 'pending'
}

export interface Promo {
  id: string
  title: string
  description: string
  discount: number
  validUntil: string
  image: string
  isActive: boolean
}

export interface Statistic {
  label: string
  value: string | number
  trend?: 'up' | 'down' | 'stable'
  period: string
}

export type SportType = 'football' | 'tennis'
export type NavigationTab = 'home' | 'futbol' | 'tenis' | 'estadisticas' | 'promos' | 'nosotros'