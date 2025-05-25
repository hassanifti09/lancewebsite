import dynamic from 'next/dynamic';

export const LazyMarquee = dynamic(
  () => import('react-fast-marquee'),
  {
    ssr: true,
    loading: () => (
      <div className="h-16 bg-gradient-to-r from-stone-100 to-stone-200 animate-pulse rounded-lg" />
    ),
  }
);