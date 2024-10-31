import { redirect } from 'next/navigation';
import Home from '@/app/page';

jest.mock('next/navigation', () => ({
  redirect: jest.fn()
}));

describe('Home Component', () => {
  it('should redirect to /planets', () => {
    Home();

    expect(redirect).toHaveBeenCalledWith('/planets');
  });
});