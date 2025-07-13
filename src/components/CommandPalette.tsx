'use client';

import React, { useEffect, useRef, useState } from 'react';

const SECTIONS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [open]);

  const filtered = SECTIONS.filter(s =>
    s.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.5)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }} onClick={() => setOpen(false)}>
      <div
        style={{
          background: '#18181b',
          color: '#fff',
          borderRadius: 12,
          minWidth: 320,
          maxWidth: 400,
          boxShadow: '0 4px 32px #0008',
          padding: 24,
        }}
        onClick={e => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Jump to section…"
          style={{
            width: '100%',
            padding: 12,
            borderRadius: 6,
            border: '1px solid #333',
            background: '#222',
            color: '#fff',
            marginBottom: 16,
            fontSize: 16,
          }}
        />
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {filtered.length === 0 && (
            <li style={{ color: '#888', padding: 8 }}>No results</li>
          )}
          {filtered.map(s => (
            <li
              key={s.id}
              style={{
                padding: 10,
                borderRadius: 6,
                cursor: 'pointer',
                background: '#232323',
                marginBottom: 6,
              }}
              onClick={() => handleSelect(s.id)}
            >
              {s.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 