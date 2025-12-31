"use client";

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Flex, Heading, Text } from '@/once-ui/components';

interface GithubHeatmapProps {
    username: string;
}

import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { useState } from 'react';
import { Button } from '@/once-ui/components';

const GithubHeatmap: React.FC<GithubHeatmapProps> = ({ username: initialUsername }) => {
    const [isWorkProfile, setIsWorkProfile] = useState(true);
    const username = isWorkProfile ? 'dharmik-at' : 'dharmikgohil';

    return (
        <Flex
            direction="column"
            alignItems="center"
            gap="m"
            className="w-full"
            marginBottom="40"
        >
            <Flex
                direction="column"
                alignItems="center"
                gap="16"
                style={{ marginBottom: 'var(--static-space-24)' }}
            >
                <Heading as="h2" variant="display-strong-xs" wrap="balance">
                    Coding Activity
                </Heading>
                <Flex
                    gap="8"
                    alignItems="center"
                    style={{
                        background: 'var(--neutral-alpha-weak)',
                        padding: '4px',
                        borderRadius: 'var(--radius-l)',
                        border: '1px solid var(--neutral-alpha-medium)'
                    }}
                >
                    <Button
                        onClick={() => setIsWorkProfile(true)}
                        variant={isWorkProfile ? 'primary' : 'tertiary'}
                        size="s"
                    >
                        Work
                    </Button>
                    <Button
                        onClick={() => setIsWorkProfile(false)}
                        variant={!isWorkProfile ? 'primary' : 'tertiary'}
                        size="s"
                    >
                        Personal
                    </Button>
                </Flex>
            </Flex>

            <Flex
                className="w-full"
                style={{
                    overflowX: 'auto',
                    padding: 'var(--static-space-16)',
                    maxWidth: '100%',
                    scrollbarWidth: 'none', // Hide scrollbar for cleaner look
                    msOverflowStyle: 'none'
                }}
            >
                <style jsx global>{`
                    .w-full::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
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
                <div style={{ minWidth: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
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
                </div>
            </Flex>

            <Button
                href={`https://github.com/${username}`}
                variant="tertiary"
                size="s"
                suffixIcon="arrowUpRight"
            >
                Visit @{username} on GitHub
            </Button>
        </Flex>
    );
};

export default GithubHeatmap;
