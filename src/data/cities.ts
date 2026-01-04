// City data for world map markers
// Coordinates are based on Eckert IV projection SVG viewBox="0 0 2752.77 1537.63"

export interface City {
  name: string;
  country: string;
  x: number; // SVG coordinate
  y: number; // SVG coordinate
  visited: boolean;
  visitDate?: string; // Optional visit date
}

export const cities: City[] = [
  // North America
  { 
    name: "New York", 
    country: "USA", 
    x: 850, 
    y: 380, 
    visited: true,
  },
  { 
    name: "Los Angeles", 
    country: "USA", 
    x: 650, 
    y: 420, 
    visited: true,
  },
  { 
    name: "Toronto", 
    country: "Canada", 
    x: 820, 
    y: 350, 
    visited: true,
  },
  { 
    name: "Vancouver", 
    country: "Canada", 
    x: 650, 
    y: 320, 
    visited: true,
  },
  
  // Europe
  { 
    name: "Paris", 
    country: "France", 
    x: 1280, 
    y: 340, 
    visited: true,
  },
  { 
    name: "Berlin", 
    country: "Germany", 
    x: 1350, 
    y: 310, 
    visited: true,
  },
  { 
    name: "Vienna", 
    country: "Austria", 
    x: 1380, 
    y: 340, 
    visited: true,
  },
  { 
    name: "Prague", 
    country: "Czechia", 
    x: 1360, 
    y: 330, 
    visited: true,
  },
  { 
    name: "Budapest", 
    country: "Hungary", 
    x: 1400, 
    y: 350, 
    visited: true,
  },
  { 
    name: "Warsaw", 
    country: "Poland", 
    x: 1420, 
    y: 310, 
    visited: true,
  },
  { 
    name: "Rome", 
    country: "Italy", 
    x: 1340, 
    y: 390, 
    visited: true,
  },
  { 
    name: "Madrid", 
    country: "Spain", 
    x: 1220, 
    y: 390, 
    visited: true,
  },
  { 
    name: "Zurich", 
    country: "Switzerland", 
    x: 1310, 
    y: 350, 
    visited: true,
  },
  { 
    name: "Ljubljana", 
    country: "Slovenia", 
    x: 1360, 
    y: 360, 
    visited: true,
  },
  { 
    name: "Bratislava", 
    country: "Slovakia", 
    x: 1390, 
    y: 340, 
    visited: true,
  },
  { 
    name: "Vaduz", 
    country: "Liechtenstein", 
    x: 1315, 
    y: 345, 
    visited: true,
  },
  { 
    name: "Monaco", 
    country: "Monaco", 
    x: 1295, 
    y: 375, 
    visited: true,
  },
  
  // Asia
  { 
    name: "Shanghai", 
    country: "China", 
    x: 2100, 
    y: 430, 
    visited: true,
  },
  { 
    name: "Hong Kong", 
    country: "Hong Kong", 
    x: 2080, 
    y: 480, 
    visited: true,
  },
  { 
    name: "Macau", 
    country: "Macau", 
    x: 2075, 
    y: 485, 
    visited: true,
  },
  { 
    name: "Seoul", 
    country: "South Korea", 
    x: 2150, 
    y: 410, 
    visited: true,
  },
  { 
    name: "New Delhi", 
    country: "India", 
    x: 1850, 
    y: 500, 
    visited: true,
  },
  { 
    name: "Mumbai", 
    country: "India", 
    x: 1820, 
    y: 540, 
    visited: true,
  },
  { 
    name: "Singapore", 
    country: "Singapore", 
    x: 2000, 
    y: 650, 
    visited: true,
  },
  { 
    name: "Kuala Lumpur", 
    country: "Malaysia", 
    x: 1980, 
    y: 630, 
    visited: true,
  },
  
  // Africa & Middle East
  { 
    name: "Cairo", 
    country: "Egypt", 
    x: 1450, 
    y: 500, 
    visited: true,
  },
  
  // Oceania
  { 
    name: "Sydney", 
    country: "Australia", 
    x: 2350, 
    y: 850, 
    visited: true,
  },
  { 
    name: "Melbourne", 
    country: "Australia", 
    x: 2320, 
    y: 880, 
    visited: true,
  },
];

// Helper functions
export const getVisitedCities = () => cities.filter(city => city.visited);
export const getCitiesByCountry = (country: string) => cities.filter(city => city.country === country);
export const getVisitedCountries = () => [...new Set(cities.filter(city => city.visited).map(city => city.country))];