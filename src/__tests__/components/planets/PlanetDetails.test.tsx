import { Planet } from '@/lib/types';
import { render, screen } from '@testing-library/react';
import PlanetDetails from '@/components/planets/PlanetDetails';

const mockPlanet: Planet = {
    name: 'Tatooine',
    climate: 'Arid',
    terrain: 'Desert',
    population: '200000',
    diameter: '10465',
    gravity: '1 standard',
    surface_water: '1',
    url: 'https://swapi.dev/api/planets/1/',
    rotation_period: '',
    orbital_period: '',
    residents: [],
    films: [],
    created: '',
    edited: ''
};

const renderComponent = (props: { planet: Planet }) => {
  return render(<PlanetDetails {...props} />);
};

describe('PlanetDetails', () => {
  it('matches snapshot', () => {
    const { container } = renderComponent({ planet: mockPlanet });
    expect(container).toMatchSnapshot();
  });

  it('displays all planet details correctly', () => {
    renderComponent({ planet: mockPlanet });
    
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
    expect(screen.getByText('Arid')).toBeInTheDocument();
    expect(screen.getByText('Desert')).toBeInTheDocument();
    expect(screen.getByText('200000')).toBeInTheDocument();
    expect(screen.getByText('10465 km')).toBeInTheDocument();
    expect(screen.getByText('1 standard')).toBeInTheDocument();
    expect(screen.getByText('1%')).toBeInTheDocument();
  });

  it('renders back link correctly', () => {
    renderComponent({ planet: mockPlanet });
    const backLink = screen.getByText('← Back to Planets');
    expect(backLink).toHaveAttribute('href', '/planets');
  });
});