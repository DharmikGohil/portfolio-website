import { Avatar, Button, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import ScrollProgressIndicator from '@/components/about/ScrollProgressIndicator';
import styles from '@/components/about/about.module.scss'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {
    const t = await getTranslations({locale});
    const {person, about, social } = renderContent(t);
	const title = about.title;
	const description = about.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
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
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const {person, about, social } = renderContent(t);
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
                { about.avatar.display && (
                    <Flex
                        className={styles.avatar}
                        minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                        flex={3} direction="column" alignItems="center">
                        <Avatar
                            src={person.avatar}
                            size="xl"/>
                        <Flex
                            gap="8"
                            alignItems="center">
                            <Icon
                                onBackground="accent-weak"
                                name="globe"/>
                            {person.location}
                        </Flex>
                        { person.languages.length > 0 && (
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
                                        onBackground="brand-weak"/>
                                </Flex>
                                <Flex
                                    paddingX="8">
                                    Schedule a call
                                </Flex>
                                <IconButton
                                    href={about.calendar.link}
                                    data-border="rounded"
                                    variant="tertiary"
                                    icon="chevronRight"/>
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
                                            variant="tertiary"/>
                                    )
                                ))}
                            </Flex>
                        )}
                    </Flex>

                    { about.intro.display && (
                        <Flex
                            direction="column"
                            textVariant="body-default-l"
                            fillWidth gap="m" marginBottom="xl">
                            {about.intro.description}
                        </Flex>
                    )}

                    { about.work.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.work.title}
                                variant="display-strong-s"
                                marginBottom="m">
                                {about.work.title}
                            </Heading>
                            <Flex direction="column" gap="l" marginBottom="40">
  <Heading as="h2" variant="display-strong-xs">Work Experience</Heading>
  <Text variant="body-default-l"><b>Avesta Technologies (Apr 2025 - Present):</b> Backend AI Software Engineer<br/>- Built RAG-based pipeline for a knowledge chatbot using event-driven architecture<br/>- Implemented AWS Lambda functions for data processing (PostgreSQL, Elasticsearch)<br/>- Serverless backend systems: cost-efficient, scalable, clean code<br/>- TDD, modular development, layered design</Text>
  <Text variant="body-default-l"><b>Avesta Technologies (Jul 2024 - Apr 2025):</b> Backend Developer Intern<br/>- Developed RESTful APIs (Node.js + Express, OOP, TDD)<br/>- System design for scalable apps<br/>- MySQL, Elasticsearch, AWS, Linux<br/>- Clean architecture, efficient data flow, production-grade code</Text>
</Flex>
                        </>
                    )}

                    {about.studies.display && (
                        <Flex direction="column" gap="l" marginBottom="40">
                            <Heading as="h2" variant="display-strong-s" marginBottom="m">{about.studies.title}</Heading>
                            <Flex direction="column" fillWidth gap="l">
                                {about.studies.institutions.map((institution, index) => (
                                    <Flex key={`${institution.name}-${index}`} fillWidth direction="column">
                                        <Text id={institution.name} variant="heading-strong-l" marginBottom="4">{institution.name}</Text>
                                        <Text variant="body-default-s" onBackground="neutral-weak">{institution.description}</Text>
</Flex>
                                ))}
                            </Flex>
  </Flex>
)}

{about.challenges.display && (
  <Flex direction="column" gap="m" marginBottom="40">
    <Heading as="h2" variant="display-strong-xs">{about.challenges.title}</Heading>
    {about.challenges.cases.map((c, idx) => (
      <Text key={idx} variant="body-default-l"><b>{c.title}:</b> {c.description}</Text>
    ))}
  </Flex>
)}

{about.professional.display && (
  <Flex direction="column" gap="m" marginBottom="40">
    <Heading as="h2" variant="display-strong-xs">{about.professional.title}</Heading>
    {about.professional.items.map((item, idx) => (
      <Text key={idx} variant="body-default-l">- {item}</Text>
    ))}
  </Flex>
)}

                    {/* Certifications & Achievements at the end */}
                    {about.certifications.display && (
                        <Flex direction="column" gap="m" marginBottom="40">
                            <Heading as="h2" variant="display-strong-xs">{about.certifications.title}</Heading>
                            {about.certifications.items.map((item, idx) => (
                                <Text key={idx} variant="body-default-l">- {item}</Text>
                                ))}
                            </Flex>
                    )}

                    {/* Learning & Growth at the end */}
                    {about.learning.display && (
                        <Flex direction="column" gap="m" marginBottom="40">
                            <Heading as="h2" variant="display-strong-xs">{about.learning.title}</Heading>
                            {about.learning.items.map((item, idx) => (
                                <Text key={idx} variant="body-default-l">- {item}</Text>
                                ))}
                            </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
}