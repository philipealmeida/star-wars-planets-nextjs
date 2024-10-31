import useSWR from 'swr';
import { fetchPlanets } from '@/lib/api';
import type { PlanetsResponse } from '@/lib/types';

export function useSwapiPlanets(page: number, search?: string) {
  const { data, error, isLoading } = useSWR<PlanetsResponse>(
    ['planets', page, search],
    () => fetchPlanets(page, search)
  );

  return {
    planets: data?.results,
    count: data?.count,
    isLoading,
    error,
  };
}