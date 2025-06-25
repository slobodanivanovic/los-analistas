import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('es-ES', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
}

export function formatTime(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function getOddsColor(odds: number): string {
  if (odds >= 2.0) return 'text-success-600'
  if (odds >= 1.5) return 'text-warning-600'
  return 'text-secondary-600'
}

export function getConfidenceColor(confidence: number): string {
  if (confidence >= 80) return 'bg-success-500'
  if (confidence >= 60) return 'bg-warning-500'
  return 'bg-secondary-500'
}