import { supabase } from '@/lib/supabase'
import NoiseDisplay from './components/NoiseDisplay'
import NoiseSubmit from './components/NoiseSubmit'

function computeAverages(noiseReports) {
  const grouped = {}
  for (const row of noiseReports) {
    const key = `${row.location}__${row.floor}`
    if (!grouped[key]) grouped[key] = { sum: 0, count: 0, location: row.location, floor: row.floor }
    grouped[key].sum += row.noise_level
    grouped[key].count += 1
  }
  const result = {}
  for (const [key, val] of Object.entries(grouped)) {
    result[key] = { location: val.location, floor: val.floor, avg: val.sum / val.count, count: val.count }
  }
  return result
}

export default async function Home() {
}
