'use client';

import { useState } from 'react';
import { Flex, Text, Tag, Icon } from '@/once-ui/components';
import styles from './ExperienceCard.module.scss';

interface ExperienceCardProps {
    company: string;
    companyUrl?: string;
    role: string;
    timeframe: string;
    location?: string;
    type?: string;
    achievements: React.ReactNode[];
    techStack?: string[];
    defaultExpanded?: boolean;
}

export default function ExperienceCard({
    company,
    companyUrl,
    role,
    timeframe,
    location,
    type,
    achievements,
    techStack,
    defaultExpanded = false,
}: ExperienceCardProps) {
    const [expanded, setExpanded] = useState(defaultExpanded);

    return (
        <Flex
            className={styles.card}
            fillWidth direction="column"
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            padding="l">
            {/* Header row */}
            <Flex
                fillWidth justifyContent="space-between" alignItems="flex-start"
                style={{ cursor: 'pointer' }}
                onClick={() => setExpanded(!expanded)}>
                <Flex direction="column" gap="4">
                    <Flex gap="8" alignItems="center">
                        {companyUrl ? (
                            <a
                                href={companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.companyLink}
                                onClick={(e) => e.stopPropagation()}>
                                <Text variant="heading-strong-l">{company}</Text>
                            </a>
                        ) : (
                            <Text variant="heading-strong-l">{company}</Text>
                        )}
                        {type && (
                            <Tag size="s">{type}</Tag>
                        )}
                    </Flex>
                    <Text variant="body-default-m" onBackground="neutral-weak">{role}</Text>
                </Flex>
                <Flex direction="column" alignItems="flex-end" gap="4">
                    <Flex gap="8" alignItems="center">
                        <Text variant="body-default-m" onBackground="neutral-weak">{timeframe}</Text>
                        <Icon
                            name={expanded ? 'chevronUp' : 'chevronDown'}
                            size="s"
                            onBackground="neutral-weak" />
                    </Flex>
                    {location && (
                        <Text variant="body-default-s" onBackground="neutral-weak">{location}</Text>
                    )}
                </Flex>
            </Flex>

            {/* Expandable content */}
            {expanded && (
                <Flex direction="column" gap="m" paddingTop="l">
                    <Flex direction="column" gap="8">
                        {achievements.map((achievement, idx) => (
                            <Flex key={idx} gap="8" alignItems="flex-start">
                                <Text variant="body-default-m" style={{ minWidth: '6px' }}>•</Text>
                                <Text variant="body-default-m">{achievement}</Text>
                            </Flex>
                        ))}
                    </Flex>
                    {techStack && techStack.length > 0 && (
                        <Flex wrap gap="8" paddingTop="4">
                            {techStack.map((tech, idx) => (
                                <Tag key={idx} size="s" variant="neutral">{tech}</Tag>
                            ))}
                        </Flex>
                    )}
                </Flex>
            )}
        </Flex>
    );
}
