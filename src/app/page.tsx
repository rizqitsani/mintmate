import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

export default function Home() {
  return (
    <div className='min-h-main flex flex-col items-center justify-center text-center'>
      <Typography
        variant='h1'
        as='h1'
        className='text-balance text-4xl lg:text-5xl'
      >
        Create and Mint Your Own NFTs
      </Typography>
      <Typography
        variant='b1'
        color='secondary'
        className='mt-4 w-2/3 text-balance'
      >
        Mintmate is a decentralized NFT minting platform. Begin your NFT journey
        with us. Create, mint and sell your own NFTs in just a few steps.
      </Typography>

      <Button className='mt-6'>
        Get Started
        <ChevronRight className='ml-1 h-4 w-4' />
      </Button>
    </div>
  );
}
