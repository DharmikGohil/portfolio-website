'use client';

import React, { useEffect, useState } from 'react';

const BOOT_KEY = 'boot_intro_shown';

export default function BootIntro() {
  const [show, setShow] = useState(false);
  const [typed, setTyped] = useState('');
  const text = 'Booting Dharmik v2025…';

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!sessionStorage.getItem(BOOT_KEY)) {
      setShow(true);
      let i = 0;
      const interval = setInterval(() => {
        setTyped((prev) => prev + text[i]);
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 60);
      setTimeout(() => {
        setShow(false);
        sessionStorage.setItem(BOOT_KEY, '1');
      }, 2500);
      return () => clearInterval(interval);
    }
  }, []);

  if (!show) return null;
  return (
    <div style={{
      position: 'fixed',
      zIndex: 9999,
      inset: 0,
      background: '#111',
      color: '#0f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Source Code Pro, monospace',
      fontSize: '2rem',
      letterSpacing: '0.05em',
      transition: 'opacity 0.6s',
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
    }}>
      <span style={{
        borderRight: '0.15em solid #0f0',
        animation: 'blink 1s steps(1) infinite',
      }}>{typed}</span>
      <style>{`
        @keyframes blink {
          0%, 100% { border-color: #0f0; }
          50% { border-color: transparent; }
        }
      `}</style>
    </div>
  );
} 