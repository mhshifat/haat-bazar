import {cva} from 'class-variance-authority';
import type {HTMLAttributes, PropsWithChildren} from 'react';
import {cn} from '~/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default';
  size?: 'default';
}

const variantClasses = cva(
  'rounded-xl flex items-center justify-center w-max',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
      },
      size: {
        default: 'py-[0.125rem] px-[0.375rem] text-[0.875rem]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export default function Badge({
  children,
  variant,
  className,
  size,
  ...props
}: PropsWithChildren<BadgeProps>) {
  return (
    <span className={cn(variantClasses({variant, size, className}))} {...props}>
      {children}
    </span>
  );
}
