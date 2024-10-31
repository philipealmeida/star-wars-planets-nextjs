import { render, screen, fireEvent } from '@testing-library/react';
import PlanetSearch from '@/components/planets/PlanetSearch';

const renderComponent = (props: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return render(<PlanetSearch {...props} />);
};

describe('PlanetSearch', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    const { container } = renderComponent({
      value: '',
      onChange: mockOnChange,
    });
    expect(container).toMatchSnapshot();
  });

  it('renders with initial value', () => {
    renderComponent({
      value: 'test',
      onChange: mockOnChange,
    });
    
    const input = screen.getByPlaceholderText('Search planets...');
    expect(input).toHaveValue('test');
  });

  it('calls onChange when input value changes', () => {
    renderComponent({
      value: '',
      onChange: mockOnChange,
    });
    
    const input = screen.getByPlaceholderText('Search planets...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'new value' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('new value');
  });
});