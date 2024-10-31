'use client';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import PlanetCard from './PlanetCard';
import PlanetSearch from './PlanetSearch';
import { useRouter } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearchParams } from 'next/navigation';
import { useSwapiPlanets } from '@/hooks/useSwapiPlanets';
import styles from '@/styles/components/planets/PlanetList.module.css';

const SEARCH_DEBOUNCE_DELAY = 500;

export default function PlanetList() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const search = searchParams.get('search') || '';
	const page = Number(searchParams.get('page')) || 1;
	const [lastSearchedTerm, setLastSearchedTerm] = useState(search);
	const [isSearching, setIsSearching] = useState(false);
	const debouncedSearch = useDebounce(search, SEARCH_DEBOUNCE_DELAY);

	const { planets, count, isLoading, error } = useSwapiPlanets(page, debouncedSearch);

	const handleSearch = (value: string) => {
		if (value !== lastSearchedTerm) {
			setLastSearchedTerm(value);
			const params = new URLSearchParams();

			if (value) {
				params.set('search', value);
			}

			params.set('page', '1');
			router.push(`/planets?${params.toString()}`);
		}
	};

	const handlePageChange = (newPage: number) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', newPage.toString());
		router.push(`/planets?${params.toString()}`);
	};

	useEffect(() => {
		if (search !== debouncedSearch) {
			setIsSearching(true);
		} else {
			setIsSearching(false);
		}
	}, [search, debouncedSearch]);

	if (error) return <div className={styles.error}>Failed to load planets</div>;

	return (
		<section className={styles.container}>
			<PlanetSearch value={search} onChange={handleSearch} />
			{(isLoading || isSearching) ? (

				<div className={styles.loading}>Loading...</div>
			) : (
				<>
					<div className={`${styles.content} ${!planets?.length ? styles.empty : ''}`}>
						{planets?.length ? (
							planets.map((planet) => (
								<PlanetCard key={planet.url} planet={planet} />
							))
							) : (
							<div className={styles.empty}>No planets found</div>
						)}
					</div>
					<Pagination
						currentPage={page}
						totalPages={Math.ceil((count || 0) / 10)}
						onPageChange={handlePageChange}
					/>
				</>
			)}
		</section>
	);
}