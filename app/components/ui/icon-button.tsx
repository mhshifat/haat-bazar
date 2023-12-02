import {cva} from 'class-variance-authority';
import type {ButtonHTMLAttributes, PropsWithChildren} from 'react';
import {cn} from '~/lib/utils';
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'primary-outlined';
}
const variantClasses = cva(
  'w-[2.5rem] h-[2.5rem] border-[0.125rem] rounded-full flex items-center justify-center shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary border-primary text-primary-foreground',
        'primary-outlined': 'bg-transparent border-primary',
        outlined: 'bg-transparent border-container-foreground',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
export default function IconButton({
  children,
  variant,
  className,
}: PropsWithChildren<IconButtonProps>) {
  return (
    <button className={cn(variantClasses({variant, className}))}>
      {children}
    </button>
  );
}
