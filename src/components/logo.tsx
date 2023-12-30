import { IBM_Plex_Sans } from 'next/font/google';

import { cn } from '@/lib/utils';

import { Typography } from '@/components/ui/typography';

type LogoProps = React.ComponentPropsWithoutRef<'div'>;

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: '700' });

function Logo({ className, ...rest }: LogoProps) {
  return (
    <div className={cn(ibmPlexSans.className, className)} {...rest}>
      <Typography variant='h3'>mintmate.</Typography>
    </div>
  );
}

export { Logo };
