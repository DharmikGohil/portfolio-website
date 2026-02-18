import { Avatar, Button, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text, InlineCode } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import ScrollProgressIndicator from '@/components/about/ScrollProgressIndicator';
import ExperienceCard from '@/components/about/ExperienceCard';
import styles from '@/components/about/about.module.scss'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const t = await getTranslations({ locale });
    const { person, about, social } = renderContent(t);
    const title = about.title;
    const description = about.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        alternates: {
            canonical: `https://${baseURL}/about`,
        },
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/about`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function About(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const { person, about, social } = renderContent(t);
    const structure = [
        {
            title: about.intro.title,
            display: about.intro.display,
            items: []
        },
        {
            title: about.work.title,
            display: about.work.display,
            items: about.work.experiences.map(experience => experience.company)
        },
        {
            title: about.studies.title,
            display: about.studies.display,
            items: about.studies.institutions.map(institution => institution.name)
        },
        {
            title: about.technical.title,
            display: about.technical.display,
            items: about.technical.skills.map(skill => skill.title)
        },
    ]
    return (
        <Flex
            fillWidth maxWidth="m"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: about.intro.description,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}/images/${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:')) // Filter out empty links and email links
                            .map((item) => item.link),
                        worksFor: {
                            '@type': 'Organization',
                            name: about.work.experiences[0].company || ''
                        },
                    }),
                }}
            />
            {/* { about.tableOfContent.display && (
                <ScrollProgressIndicator structure={structure} />
            )} */}
            <Flex
                fillWidth
                mobileDirection="column" justifyContent="center">
                {about.avatar.display && (
                    <Flex
                        className={styles.avatar}
                        minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                        flex={3} direction="column" alignItems="center">
                        <Avatar
                            src={person.avatar}
                            size="xl" />
                        <Flex
                            gap="8"
                            alignItems="center">
                            <Icon
                                onBackground="accent-weak"
                                name="globe" />
                            {person.location}
                        </Flex>
                        {person.languages.length > 0 && (
                            <Flex
                                wrap
                                gap="8">
                                {person.languages.map((language, index) => (
                                    <Tag
                                        key={index}
                                        size="l">
                                        {language}
                                    </Tag>
                                ))}
                            </Flex>
                        )}
                    </Flex>
                )}
                <Flex
                    className={styles.blockAlign}
                    fillWidth flex={9} maxWidth={40} direction="column">
                    <Flex
                        id={about.intro.title}
                        fillWidth minHeight="160"
                        direction="column" justifyContent="center"
                        marginBottom="32">
                        {about.calendar.display && (
                            <Flex
                                className={styles.blockAlign}
                                style={{
                                    backdropFilter: 'blur(var(--static-space-1))',
                                    border: '1px solid var(--brand-alpha-medium)',
                                    width: 'fit-content'
                                }}
                                alpha="brand-weak" radius="full"
                                fillWidth padding="4" gap="8" marginBottom="m"
                                alignItems="center">
                                <Flex paddingLeft="12">
                                    <Icon
                                        name="calendar"
                                        onBackground="brand-weak" />
                                </Flex>
                                <Flex
                                    paddingX="8">
                                    Schedule a call
                                </Flex>
                                <IconButton
                                    href={about.calendar.link}
                                    data-border="rounded"
                                    variant="tertiary"
                                    icon="chevronRight" />
                            </Flex>
                        )}
                        <Heading
                            className={styles.textAlign}
                            variant="display-strong-xl">
                            {person.name}
                        </Heading>
                        <Text
                            className={styles.textAlign}
                            variant="display-default-xs"
                            onBackground="neutral-weak">
                            {person.role}
                        </Text>
                        {social.length > 0 && (
                            <Flex
                                className={styles.blockAlign}
                                paddingTop="20" paddingBottom="8" gap="8" wrap>
                                {social.map((item) => (
                                    item.link && (
                                        <Button
                                            key={item.name}
                                            href={item.link}
                                            prefixIcon={item.icon}
                                            label={item.name}
                                            size="s"
                                            variant="tertiary" />
                                    )
                                ))}
                            </Flex>
                        )}
                    </Flex>

                    {about.intro.display && (
                        <Flex
                            direction="column"
                            textVariant="body-default-l"
                            fillWidth gap="m" marginBottom="xl">
                            {about.intro.description}
                        </Flex>
                    )}

                    <Heading as="h2" variant="display-strong-s" marginBottom="m">About Me</Heading>
                    <Flex
                        fillWidth direction="column"
                        radius="l"
                        border="neutral-medium"
                        borderStyle="solid-1"
                        padding="l"
                        gap="m"
                        marginBottom="40">
                        <Text variant="body-default-m">
                            I'm a Software Engineer specializing in Backend Development, AI Infrastructure, and Serverless Architecture at <a href="https://avestalabs.ai" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}><InlineCode>AvestaLabs.ai</InlineCode></a> in Ahmedabad, India. Passionate about building scalable, intelligent systems that bridge data engineering and applied AI.
                        </Text>
                        <Text variant="body-default-m">
                            I've architected and contributed to multiple Generative AI, RAG, and data ingestion platforms, leveraging AWS (Lambda, Step Functions, S3, OpenSearch) and LLMs (OpenAI, Gemini) to power production-grade AI workflows.
                        </Text>
                        <Text variant="body-default-m">
                            I recently co-led the development of <a href="https://ingestiq.ai" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}><InlineCode>IngestIQ.ai</InlineCode></a>, a unified data ingestion and semantic search platform that transforms unstructured sources into AI-ready datasets using RAG, LLMs, and vector search.
                        </Text>
                        <Text variant="body-default-m">
                            I thrive on designing clean, maintainable systems, from TypeScript-based microservices to event-driven pipelines, guided by Clean Architecture, TDD, and Domain-Driven Design principles.
                        </Text>
                    </Flex>

                    {about.work.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.work.title}
                                variant="display-strong-s"
                                marginBottom="m">
                                {about.work.title}
                            </Heading>
                            <Flex direction="column" gap="m" marginBottom="40">
                                {about.work.experiences.map((experience, index) => (
                                    <ExperienceCard
                                        key={`${experience.company}-${index}`}
                                        company={experience.company}
                                        companyUrl={experience.companyUrl}
                                        role={experience.role}
                                        timeframe={experience.timeframe}
                                        location={experience.location}
                                        type={experience.type}
                                        achievements={experience.achievements}
                                        techStack={experience.techStack}
                                        defaultExpanded={index === 0}
                                    />
                                ))}
                            </Flex>
                        </>
                    )}

                    {about.studies.display && (
                        <>
                            <Heading as="h2" variant="display-strong-s" marginBottom="m">{about.studies.title}</Heading>
                            <Flex direction="column" gap="m" marginBottom="40">
                                {about.studies.institutions.map((institution, index) => (
                                    <Flex
                                        key={`${institution.name}-${index}`}
                                        fillWidth direction="column"
                                        radius="l"
                                        border="neutral-medium"
                                        borderStyle="solid-1"
                                        padding="l"
                                        gap="4">
                                        <Flex fillWidth justifyContent="space-between" alignItems="flex-start">
                                            <Flex direction="column" gap="4">
                                                <Text variant="heading-strong-l">{institution.name}</Text>
                                                <Text variant="body-default-m" onBackground="neutral-weak">{institution.degree}</Text>
                                            </Flex>
                                            <Text variant="body-default-m" onBackground="neutral-weak" style={{ whiteSpace: 'nowrap' }}>{institution.timeframe}</Text>
                                        </Flex>
                                        {institution.description && (
                                            <Text variant="body-default-s" onBackground="neutral-weak" paddingTop="4">{institution.description}</Text>
                                        )}
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                    {about.challenges.display && (
                        <>
                            <Heading as="h2" variant="display-strong-s" marginBottom="m">{about.challenges.title}</Heading>
                            <Flex direction="column" gap="m" marginBottom="40">
                                {about.challenges.cases.map((c, idx) => (
                                    <Flex
                                        key={idx}
                                        fillWidth direction="column"
                                        radius="l"
                                        border="neutral-medium"
                                        borderStyle="solid-1"
                                        padding="l"
                                        gap="8">
                                        <Text variant="heading-strong-m">{c.title}</Text>
                                        <Text variant="body-default-m" onBackground="neutral-weak">{c.description}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                    {about.professional.display && (
                        <>
                            <Heading as="h2" variant="display-strong-s" marginBottom="m">{about.professional.title}</Heading>
                            <Flex
                                fillWidth direction="column"
                                radius="l"
                                border="neutral-medium"
                                borderStyle="solid-1"
                                padding="l"
                                gap="8"
                                marginBottom="40">
                                {about.professional.items.map((item, idx) => (
                                    <Flex key={idx} gap="8" alignItems="flex-start">
                                        <Text variant="body-default-m" style={{ minWidth: '6px' }}>•</Text>
                                        <Text variant="body-default-m">{item}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                    {about.certifications.display && (
                        <>
                            <Heading as="h2" variant="display-strong-s" marginBottom="m">{about.certifications.title}</Heading>
                            <Flex
                                fillWidth direction="column"
                                radius="l"
                                border="neutral-medium"
                                borderStyle="solid-1"
                                padding="l"
                                gap="8"
                                marginBottom="40">
                                {about.certifications.items.map((item, idx) => (
                                    <Flex key={idx} gap="8" alignItems="flex-start">
                                        <Text variant="body-default-m" style={{ minWidth: '6px' }}>•</Text>
                                        <Text variant="body-default-m">{item}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                    {about.learning.display && (
                        <>
                            <Heading as="h2" variant="display-strong-s" marginBottom="m">{about.learning.title}</Heading>
                            <Flex
                                fillWidth direction="column"
                                radius="l"
                                border="neutral-medium"
                                borderStyle="solid-1"
                                padding="l"
                                gap="8"
                                marginBottom="40">
                                {about.learning.items.map((item, idx) => (
                                    <Flex key={idx} gap="8" alignItems="flex-start">
                                        <Text variant="body-default-m" style={{ minWidth: '6px' }}>•</Text>
                                        <Text variant="body-default-m">{item}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
}