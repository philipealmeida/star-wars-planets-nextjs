import Pagination from '@/components/planets/Pagination';
import { render, screen, fireEvent } from '@testing-library/react';

const renderComponent = (props: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  return render(<Pagination {...props} />);
};

describe('Pagination', () => {
  const mockOnPageChange = jest.fn();

  it('matches snapshot', () => {
    const { container } = renderComponent({
      currentPage: 1,
      totalPages: 5,
      onPageChange: mockOnPageChange,
    });
    expect(container).toMatchSnapshot();
  });

  it('disables previous button on first page', () => {
    renderComponent({
      currentPage: 1,
      totalPages: 5,
      onPageChange: mockOnPageChange,
    });
    
    const prevButton = screen.getByText('Previous');
    expect(prevButton).toBeDisabled();
  });

  it('disables next button on last page', () => {
    renderComponent({
      currentPage: 5,
      totalPages: 5,
      onPageChange: mockOnPageChange,
    });
    
    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeDisabled();
  });

  it('calls onPageChange with correct values', () => {
    renderComponent({
      currentPage: 2,
      totalPages: 5,
      onPageChange: mockOnPageChange,
    });
    
    fireEvent.click(screen.getByText('Next'));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);

    fireEvent.click(screen.getByText('Previous'));
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });
});