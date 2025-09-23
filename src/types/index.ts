// Global TypeScript type definitions

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  amenities: string[];
  images: string[];
  rating: number;
  reviews: number;
}

export interface Review {
  id: string;
  propertyId: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

// Add more types as needed
