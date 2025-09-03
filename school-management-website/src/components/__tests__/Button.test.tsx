import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/Button';

// Mock Next.js Link component
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Button Component', () => {
  it('renders button with text', () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders button with href as link', () => {
    renderWithTheme(<Button href="/test">Link Button</Button>);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies size variants correctly', () => {
    renderWithTheme(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('applies variant styles correctly', () => {
    renderWithTheme(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});