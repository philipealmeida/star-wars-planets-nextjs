import Link from 'next/link';
import { Planet } from '@/lib/types';
import styles from '@/styles/components/planets/PlanetDetails.module.css';

interface PlanetDetailsProps {
  planet: Planet;
}

export default function PlanetDetails({ planet }: PlanetDetailsProps) {
  return (
    <div className={styles.details}>
      <h1 className={styles.planetName}>{planet.name}</h1>
      <div className={styles.content}>
        <InfoItem label="Climate" value={planet.climate} />
        <InfoItem label="Terrain" value={planet.terrain} />
        <InfoItem label="Population" value={planet.population} />
        <InfoItem label="Diameter" value={`${planet.diameter} km`} />
        <InfoItem label="Gravity" value={planet.gravity} />
        <InfoItem label="Surface Water" value={`${planet.surface_water}%`} />
      </div>
      <Link href="/planets" className={styles.back}>
        ← Back to Planets
      </Link>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.infoItem}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}