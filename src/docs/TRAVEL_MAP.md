# Travel Map with City Markers

This document explains how the interactive travel map works and how to customize it.

## Overview

The travel map displays your visited cities as interactive markers on a world map using the Eckert IV projection. Each city appears as a blue dot that glows and shows the city name when hovered.

## Components

### WorldMapWithCities.astro
The main component that renders the world map with city markers overlaid on top.

### cities.ts
Data file containing all city information including coordinates, visit status, and optional notes.

## Adding New Cities

To add a new city to the map:

1. Open `src/data/cities.ts`
2. Add a new city object to the `cities` array:

```typescript
{
  name: "Tokyo",
  country: "Japan", 
  x: 2200, // SVG coordinate (0-2752.77)
  y: 420,  // SVG coordinate (0-1537.63)
  visited: true,
  notes: "Amazing city with great food"
}
```

### Finding Coordinates

The map uses SVG coordinates based on the Eckert IV projection with viewBox="0 0 2752.77 1537.63".

**Approximate coordinate ranges:**
- **Americas**: x: 400-1100
- **Europe/Africa**: x: 1200-1600  
- **Asia/Oceania**: x: 1700-2400
- **Northern cities**: y: 200-400
- **Equatorial cities**: y: 500-700
- **Southern cities**: y: 800-1200

**Tips for finding coordinates:**
1. Use browser dev tools to inspect the SVG and click to get coordinates
2. Look at existing cities in similar geographic regions as reference
3. Test and adjust coordinates by viewing the map

## Customization

### Styling
Modify the CSS in `WorldMapWithCities.astro` to change:
- Marker colors and sizes
- Hover effects
- Label appearance
- Responsive behavior

### Interactivity
The component includes a click handler that currently logs city information. You can extend this to:
- Navigate to travel blog posts
- Open city detail modals
- Show photo galleries
- Display visit statistics

### Data Structure
The `City` interface supports additional fields:
- `visitDate`: When you visited
- Add custom fields as needed

## Future Enhancements

Potential improvements you could add:
- **Travel routes**: Lines connecting cities in visit order
- **Visit duration**: Marker size based on time spent
- **Photo integration**: Show photos when clicking markers
- **Statistics**: Display travel stats (countries visited, total distance, etc.)
- **Filters**: Show/hide cities by region, year, etc.
- **Animation**: Animate markers appearing in chronological order

## Technical Notes

- The map uses an SVG `<image>` element to include the base world map
- City markers are overlaid as SVG circles and text elements
- Coordinates are manually mapped to the Eckert IV projection
- The component is fully responsive and works on mobile devices
- All styling uses CSS custom properties for theme consistency