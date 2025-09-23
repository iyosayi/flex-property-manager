// Application constants

export const APP_CONFIG = {
  name: 'Property Management System',
  version: '1.0.0',
  apiUrl: process.env.VITE_API_URL || '/api',
} as const;

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/',
  PROPERTIES: '/properties',
  PROPERTY_DETAILS: '/properties/:id',
  WEBSITE: '/website',
} as const;

export const API_ENDPOINTS = {
  PROPERTIES: '/api/properties',
  REVIEWS: '/api/reviews',
  BOOKINGS: '/api/bookings',
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Add more constants as needed
