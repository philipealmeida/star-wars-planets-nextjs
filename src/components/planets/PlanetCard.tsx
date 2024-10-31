import Link from 'next/link';
import type { Planet } from '@/lib/types';
import styles from '@/styles/components/planets/PlanetCard.module.css';

interface PlanetCardProps {
  planet: Planet;
}

export default function PlanetCard({ planet }: PlanetCardProps) {
  const planetId = planet.url.split('/').filter(Boolean).pop();
  
  return (
    <Link href={`/planets/${planetId}`} className={styles.card}>
      <h2>{planet.name}</h2>
      <div className={styles.details}>
        <p>Climate: {planet.climate}</p>
        <p>Terrain: {planet.terrain}</p>
        <p>Population: {planet.population}</p>
      </div>
    </Link>
  );
}