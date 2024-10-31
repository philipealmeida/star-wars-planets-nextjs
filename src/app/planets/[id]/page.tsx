import styles from '@/app/page.module.css';
import { fetchPlanetById } from '@/lib/api';
import PlanetDetails from '@/components/planets/PlanetDetails';

export default async function PlanetPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const { id } = await params
  const planet = await fetchPlanetById(id);

  return (
    <main className={styles.main}>
      <PlanetDetails planet={planet} />
    </main>
  );
}