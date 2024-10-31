import styles from '../page.module.css';
import PlanetList from '@/components/planets/PlanetList';

export default function PlanetsPage() {
  return (
    <main className={styles.main}>
      <PlanetList />
    </main>
  );
}