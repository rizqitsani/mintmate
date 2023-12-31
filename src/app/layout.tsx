import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/app/globals.css';

import { Menu } from '@/components/menu';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main>
          <div className='layout min-h-screen flex-col md:flex'>
            <div className='border-b'>
              <div className='flex h-16 items-center px-4'>
                <Menu className='mx-6' />
                <div className='ml-auto flex items-center space-x-4'>
                  <Button>Connect</Button>
                </div>
              </div>
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
