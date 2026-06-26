/** Approximate land regions for equirectangular dot-map generation [latMin, latMax, lngMin, lngMax] */
const LAND_REGIONS: [number, number, number, number][] = [
  [25, 72, -168, -52],
  [14, 72, -168, -52],
  [-56, 14, -82, -34],
  [36, 71, -25, 45],
  [-35, 37, -18, 52],
  [5, 77, 25, 180],
  [5, 55, 60, 145],
  [-44, -10, 113, 154],
  [60, 82, -75, 60],
  [-78, -60, -180, 180],
  [64, 72, -25, 30],
  [50, 60, -10, 30],
]

const HUB_CITIES: { name: string; lat: number; lng: number }[] = [
  { name: 'Toronto', lat: 43.65, lng: -79.38 },
  { name: 'Vancouver', lat: 49.28, lng: -123.12 },
  { name: 'New York', lat: 40.71, lng: -74.01 },
  { name: 'London', lat: 51.51, lng: -0.13 },
  { name: 'Frankfurt', lat: 50.11, lng: 8.68 },
  { name: 'Singapore', lat: 1.35, lng: 103.82 },
  { name: 'Tokyo', lat: 35.68, lng: 139.69 },
  { name: 'Sydney', lat: -33.87, lng: 151.21 },
  { name: 'São Paulo', lat: -23.55, lng: -46.63 },
  { name: 'Dubai', lat: 25.2, lng: 55.27 },
]

export function latLngToMapXY(lat: number, lng: number, width: number, height: number) {
  return {
    x: ((lng + 180) / 360) * width,
    y: ((90 - lat) / 180) * height,
  }
}

function seededRandom(seed: number) {
  const x = Math.sin(seed * 127.1 + seed * 311.7) * 43758.5453
  return x - Math.floor(x)
}

export function generateWorldMapDots(width: number, height: number): { x: number; y: number; r: number; o: number }[] {
  const dots: { x: number; y: number; r: number; o: number }[] = []
  let seed = 1

  for (const [latMin, latMax, lngMin, lngMax] of LAND_REGIONS) {
    for (let lat = latMin; lat <= latMax; lat += 2.2) {
      for (let lng = lngMin; lng <= lngMax; lng += 2.2) {
        seed += 1
        const jitterLat = (seededRandom(seed) - 0.5) * 1.8
        const jitterLng = (seededRandom(seed + 1000) - 0.5) * 1.8
        const pLat = lat + jitterLat
        const pLng = lng + jitterLng

        if (seededRandom(seed + 2000) > 0.38) continue

        const { x, y } = latLngToMapXY(pLat, pLng, width, height)
        const r = seededRandom(seed + 3000) > 0.92 ? 2.2 : 1.4
        const o = 0.25 + seededRandom(seed + 4000) * 0.55
        dots.push({ x, y, r, o })
      }
    }
  }

  return dots
}

export { HUB_CITIES }
