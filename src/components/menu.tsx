import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Logo } from '@/components/logo';
import { Typography } from '@/components/ui/typography';

export function Menu({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <Logo />
      <nav
        className={cn('flex items-center space-x-4 lg:space-x-6', className)}
        {...props}
      >
        <Link
          href='/examples/dashboard'
          className='text-sm font-medium transition-colors hover:text-primary'
        >
          <Typography variant='s3'>Home</Typography>
        </Link>
      </nav>
    </>
  );
}
