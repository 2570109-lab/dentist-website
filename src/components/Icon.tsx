import React from 'react';

export type IconName = 'arrow' | 'tooth' | 'menu' | 'close' | 'phone' | 'pin' | 'instagram' | 'check' | 'clock' | 'sparkle';

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  tooth: <path d="M8.5 3.5c1.5-1.1 3.5-1.1 5 0 1.3.9 2.4.9 3.5.4 1.2 1.7 1.1 4.1.4 6.2-.7 2.1-1.3 4.4-2.1 6.2-.7 1.6-1.7 2.2-2.5.5-.7-1.5-.9-3.2-1.8-3.2s-1.1 1.7-1.8 3.2c-.8 1.7-1.8 1.1-2.5-.5-.8-1.8-1.4-4.1-2.1-6.2-.7-2.1-.8-4.5.4-6.2 1.1.5 2.2.5 3.5-.4Z" />,
  menu: <><path d="M4 7h16" /><path d="M4 17h16" /></>,
  close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
  phone: <path d="M7 4.5 10 3l2 4-2 1.5a14 14 0 0 0 5.5 5.5L17 12l4 2-1.5 3c-.7 1.4-2.5 2.1-4 1.6A17 17 0 0 1 5.4 8.5C4.9 7 5.6 5.2 7 4.5Z" />,
  pin: <><path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
  instagram: <><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" stroke="none" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  sparkle: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={`icon ${className ?? ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
