import {cva} from 'class-variance-authority';
import type {ButtonHTMLAttributes, PropsWithChildren} from 'react';
import {cn} from '~/lib/utils';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'primary-outlined' | 'outlined';
}

const variantClasses = cva(
  'w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center relative before:content-[""] before:absolute before:rounded-full before:w-[calc(100%-3px)] before:h-[calc(100%-3px)] before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%]',
  {
    variants: {
      variant: {
        primary: 'bg-primary  text-primary-foreground',
        'primary-outlined': 'bg-transparent bg-primary before:bg-container',
        outlined: 'bg-transparent bg-container-foreground before:bg-container',
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
  style,
  ...props
}: PropsWithChildren<IconButtonProps>) {
  return (
    <button
      className={cn(variantClasses({variant, className}))}
      style={{
        ...(style?.background ? {background: style?.background} : {}),
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
