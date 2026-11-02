'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function GTMTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      const search = searchParams?.toString() ? `?${searchParams.toString()}` : '';
      window.dataLayer.push({
        event: 'pageview',
        page: pathname + search,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GTMTracker() {
  return (
    <Suspense fallback={null}>
      <GTMTrackerInner />
    </Suspense>
  );
}
