import type { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** The variant of the button */
  variant?: 'primary' | 'secondary' | 'outline';
  /** The size of the button */
  size?: 'small' | 'medium' | 'large';
};
