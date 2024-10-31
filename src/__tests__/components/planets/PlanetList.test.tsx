import PlanetList from '@/components/planets/PlanetList';
import { useSwapiPlanets } from '@/hooks/useSwapiPlanets';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn().mockImplementation((param) => {
      if (param === 'page') return '1';
      if (param === 'search') return '';
      return null;
    }),
  }),
}));

jest.mock('@/hooks/useSwapiPlanets');
jest.mock('@/hooks/useDebounce', () => ({
  useDebounce: (value: string) => value,
}));

const mockPlanets = [
  {
    name: 'Tatooine',
    climate: 'Arid',
    terrain: 'Desert',
    population: '200000',
    url: 'https://swapi.dev/api/planets/1/',
    diameter: '10465',
    gravity: '1 standard',
    surface_water: '1',
  },
];

const renderComponent = () => {
  return render(<PlanetList />);
};

describe('PlanetList', () => {
  beforeEach(() => {
    (useSwapiPlanets as jest.Mock).mockReturnValue({
      planets: mockPlanets,
      count: 1,
      isLoading: false,
      error: null,
    });
  });

  it('matches snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('displays loading state', () => {
    (useSwapiPlanets as jest.Mock).mockReturnValue({
      planets: [],
      count: 0,
      isLoading: true,
      error: null,
    });
    
    renderComponent();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays error state', () => {
    (useSwapiPlanets as jest.Mock).mockReturnValue({
      planets: [],
      count: 0,
      isLoading: false,
      error: new Error('Failed to fetch'),
    });
    
    renderComponent();
    expect(screen.getByText('Failed to load planets')).toBeInTheDocument();
  });

  it('renders planet cards when data is loaded', () => {
    renderComponent();
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
  });

  it('displays no planets found message when empty', () => {
    (useSwapiPlanets as jest.Mock).mockReturnValue({
      planets: [],
      count: 0,
      isLoading: false,
      error: null,
    });
    
    renderComponent();
    expect(screen.getByText('No planets found')).toBeInTheDocument();
  });
});