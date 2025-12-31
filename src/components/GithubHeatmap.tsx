"use client";

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Flex, Heading, Text } from '@/once-ui/components';

interface GithubHeatmapProps {
    username: string;
}

import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const GithubHeatmap: React.FC<GithubHeatmapProps> = ({ username }) => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            gap="m"
            className="w-full"
            marginBottom="40"
        >
            <Heading as="h2" variant="display-strong-xs" wrap="balance" style={{ marginBottom: 'var(--static-space-24)' }}>
                Coding Activity
            </Heading>
            <Flex
                className="w-full"
                justifyContent="center"
                style={{
                    overflowX: 'auto',
                    padding: 'var(--static-space-16)'
                }}
            >
                <ReactTooltip
                    id="github-tooltip"
                    place="top"
                    style={{
                        fontSize: '12px',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        backgroundColor: '#111',
                        color: '#fff',
                        border: '1px solid var(--neutral-alpha-medium)',
                        zIndex: 100
                    }}
                />
                <GitHubCalendar
                    username={username}
                    colorScheme="dark"
                    fontSize={12}
                    blockSize={12}
                    blockMargin={4}
                    style={{
                        color: 'var(--neutral-on-background-strong)',
                    }}
                    theme={{
                        dark: [
                            'var(--neutral-alpha-weak)',
                            'var(--brand-alpha-medium)',
                            'var(--brand-solid-weak)',
                            'var(--brand-solid-medium)',
                            'var(--brand-solid-strong)'
                        ]
                    }}
                    renderBlock={(block, activity) => (
                        React.cloneElement(block, {
                            'data-tooltip-id': 'github-tooltip',
                            'data-tooltip-content': `${activity.count} contributions on ${activity.date}`,
                        })
                    )}
                />
            </Flex>
        </Flex>
    );
};

export default GithubHeatmap;
