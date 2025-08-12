
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();

  const routes = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/documentation', label: 'Documentation' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline sm:inline-block">
              Data Insights Viewer
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === route.href ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
