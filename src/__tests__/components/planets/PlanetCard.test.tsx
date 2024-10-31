import { Planet } from '@/lib/types';
import { render, screen } from '@testing-library/react';
import PlanetCard from '@/components/planets/PlanetCard';

const mockPlanet: Planet = {
    name: 'Tatooine',
    climate: 'Arid',
    terrain: 'Desert',
    population: '200000',
    url: 'https://swapi.dev/api/planets/1/',
    diameter: '10465',
    gravity: '1 standard',
    surface_water: '1',
    rotation_period: '',
    orbital_period: '',
    residents: [],
    films: [],
    created: '',
    edited: ''
};

const renderComponent = (props: { planet: Planet }) => {
  return render(<PlanetCard {...props} />);
};

describe('PlanetCard', () => {
  it('matches snapshot', () => {
    const { container } = renderComponent({ planet: mockPlanet });
    expect(container).toMatchSnapshot();
  });

  it('displays planet information correctly', () => {
    renderComponent({ planet: mockPlanet });
    
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
    expect(screen.getByText('Climate: Arid')).toBeInTheDocument();
    expect(screen.getByText('Terrain: Desert')).toBeInTheDocument();
    expect(screen.getByText('Population: 200000')).toBeInTheDocument();
  });

  it('creates correct link with planet ID', () => {
    renderComponent({ planet: mockPlanet });
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/planets/1');
  });
});