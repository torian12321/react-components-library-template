import type { FC } from 'react';

import { baseStyles, sizeStyles, variantStyles } from './Button.styles';
import type { ButtonProps } from './Button.types';

/**
 * A basic Button component
 */
export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  const classes =
    `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
