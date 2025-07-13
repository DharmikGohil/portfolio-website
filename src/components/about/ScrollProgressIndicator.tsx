'use client';

import React, { useEffect, useState } from 'react';
import { Flex, Text } from '@/once-ui/components';
import styles from './about.module.scss';

interface ScrollProgressIndicatorProps {
    sections: {
        title: string;
        display: boolean;
        items: string[];
    }[];
}

const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorProps> = ({ sections = [] }) => {
    const [progress, setProgress] = useState(0);
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Calculate overall scroll progress (0 to 1)
            const scrollProgress = Math.min(
                (scrollTop + windowHeight) / documentHeight,
                1
            );
            
            setProgress(scrollProgress);

            // Determine which section is currently active
            const visibleSections = sections.filter(section => section.display);
            let currentSection = 0;

            visibleSections.forEach((section, index) => {
                const element = document.getElementById(section.title);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top;
                    const elementBottom = rect.bottom;
                    
                    // If section is in viewport, mark it as active
                    if (elementTop <= windowHeight * 0.3 && elementBottom >= windowHeight * 0.3) {
                        currentSection = index;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    return (
        <Flex className={styles.scrollProgress}>
            {/* Main progress line */}
            <Flex className={styles.progressLine}>
                {/* Animated progress fill */}
                <Flex
                    className={styles.progressFill}
                    style={{
                        height: `${progress * 100}%`,
                    }}
                />
            </Flex>

            {/* Section indicators */}
            {sections
                .filter(section => section.display)
                .map((section, sectionIndex) => (
                <Flex 
                    key={sectionIndex} 
                    className={styles.sectionIndicator}
                >
                    <Flex
                        style={{ 
                            cursor: 'pointer',
                            position: 'relative',
                        }}
                        className={styles.hover}
                        gap="8"
                        alignItems="center"
                        onClick={() => {
                            const element = document.getElementById(section.title);
                            if (element) {
                                const elementPosition = element.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.scrollY - 80;
                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth',
                                });
                            }
                        }}
                    >
                        {/* Section dot indicator */}
                        <Flex
                            className={`${styles.sectionDot} ${
                                sectionIndex <= activeSection 
                                    ? styles.active 
                                    : styles.inactive
                            }`}
                        />
                        
                        {/* Section title */}
                        <Text
                            className={`${styles.sectionTitle} ${
                                sectionIndex <= activeSection 
                                    ? styles.active 
                                    : styles.inactive
                            }`}
                        >
                            {section.title}
                        </Text>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    );
};

export default ScrollProgressIndicator; 