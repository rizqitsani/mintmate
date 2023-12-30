'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

const TypographyVariant = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  's1',
  's2',
  's3',
  'b1',
  'b2',
  'c1',
  'c2',
] as const;

const TypographyColor = ['primary', 'secondary', 'danger'] as const;

type TypographyProps<T extends React.ElementType> = {
  /** @default <p> tag */
  as?: T;
  className?: string;
  color?: (typeof TypographyColor)[number];
  variant?: (typeof TypographyVariant)[number];
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

/** @see https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/ */
type TypographyComponent = <T extends React.ElementType = 'p'>(
  props: TypographyProps<T>,
) => React.ReactNode | null;

const Typography: TypographyComponent = React.forwardRef(
  <T extends React.ElementType = 'p'>(
    {
      as,
      children,
      className,
      color = 'primary',
      variant = 'b2',
      ...rest
    }: TypographyProps<T>,
    ref?: React.ComponentPropsWithRef<T>['ref'],
  ) => {
    const Component = as || 'p';
    return (
      <Component
        ref={ref}
        className={cn(
          //#region  //*=========== Variants ===========
          [
            variant === 'h1' && ['text-3xl font-extrabold tracking-tight'],
            variant === 'h2' && ['text-2xl font-semibold tracking-tight'],
            variant === 'h3' && ['text-xl font-semibold tracking-tight'],
            variant === 'h4' && ['text-lg font-semibold tracking-tight'],
            variant === 'h5' && ['text-base font-semibold tracking-tight'],
            variant === 'h6' && ['text-sm font-semibold'],
            variant === 's1' && ['text-lg font-medium'],
            variant === 's2' && ['text-base font-medium'],
            variant === 's3' && ['text-sm font-medium'],
            variant === 'b1' && ['text-base'],
            variant === 'b2' && ['text-sm'],
            variant === 'c1' && ['text-xs'],
            variant === 'c2' && ['text-[11px] leading-[14px]'],
          ],
          //#endregion  //*======== Variants ===========
          //#region  //*=========== Color ===========
          [
            color === 'primary' && ['text-primary'],
            color === 'secondary' && ['text-muted-foreground'],
            color === 'danger' && ['text-destructive'],
          ],
          //#endregion  //*======== Color ===========
          className,
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

export { Typography };
