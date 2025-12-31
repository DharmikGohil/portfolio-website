'use client';

import React from 'react';
import styles from './Marquee.module.scss';
import classNames from 'classnames';

interface MarqueeProps {
    children: React.ReactNode;
    direction?: 'left' | 'right';
    speed?: number; // Duration in seconds for one full scroll
    className?: string;
    pauseOnHover?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
    children,
    direction = 'left',
    speed = 20,
    className,
    pauseOnHover = true,
}) => {
    return (
        <div
            className={classNames(styles.marqueeContainer, className)}
            style={{
                '--marquee-duration': `${speed}s`,
                '--marquee-direction': direction === 'left' ? 'normal' : 'reverse',
            } as React.CSSProperties}
        >
            <div className={classNames(styles.marqueeContent, { [styles.pauseOnHover]: pauseOnHover })}>
                {children}
                {/* Duplicate content for seamless loop */}
                {children}
            </div>
        </div>
    );
};
