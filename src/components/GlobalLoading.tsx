'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Spinner, Flex } from '@/once-ui/components';
import { usePathname } from '@/i18n/routing';

// Simple fade-in/out overlay styles
const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(20, 20, 30, 0.45)',
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.3s',
  pointerEvents: 'all',
};

export default function GlobalLoading() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      setLoading(true);
      // Simulate loading for at least 400ms, or until next render
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setLoading(false);
        prevPath.current = pathname;
      }, 400);
    }
    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pathname]);

  return loading ? (
    <div style={{ ...overlayStyle, opacity: loading ? 1 : 0 }}>
      <Flex direction="column" alignItems="center" gap="8">
        <Spinner size="xl" ariaLabel="Loading page..." />
      </Flex>
    </div>
  ) : null;
} 