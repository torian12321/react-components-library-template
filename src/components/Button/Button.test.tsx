import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from './Button';

describe('components/Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole('button', { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it('forwards additional HTML button props', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<Button className='custom-class'>Custom Button</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('custom-class');
  });

  describe('variants', () => {
    it('applies primary variant by default', () => {
      render(<Button>Primary Button</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('bg-blue-600');
    });

    it('applies secondary variant when specified', () => {
      render(<Button variant='secondary'>Secondary Button</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('bg-gray-600');
    });

    it('applies outline variant when specified', () => {
      render(<Button variant='outline'>Outline Button</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('border-2');
    });
  });

  describe('sizes', () => {
    it('applies medium size by default', () => {
      render(<Button>Medium Button</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('px-4 py-2');
    });

    it('applies small size when specified', () => {
      render(<Button size='small'>Small Button</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('px-3 py-1.5');
    });

    it('applies large size when specified', () => {
      render(<Button size='large'>Large Button</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('px-6 py-3');
    });
  });
});
