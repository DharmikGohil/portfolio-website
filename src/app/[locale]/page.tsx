import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources';
import { ContactForm } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
	{ params: { locale } }: { params: { locale: string } }
) {
	const t = await getTranslations({ locale });
	const { home } = renderContent(t);
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		alternates: {
			canonical: `https://${baseURL}`,
		},
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}`,
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

export default function Home(
	{ params: { locale } }: { params: { locale: string } }
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { home, about, person, contact } = renderContent(t);
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Flex
				fillWidth
				direction="column"
				paddingY="xl" gap="l">
				<Flex
					direction="column"
					fillWidth maxWidth="s">
					<RevealFx
						translateY="2" fillWidth justifyContent="flex-start" paddingBottom="m">
						<Heading
							as="h1"
							wrap="balance"
							variant="display-strong-l">
							{home.headline}
						</Heading>
					</RevealFx>
					<RevealFx
						translateY="4" delay={0.1} fillWidth justifyContent="flex-start" paddingBottom="l">
						<Text
							wrap="balance"
							onBackground="neutral-weak"
							variant="heading-default-xl">
							{home.subline}
						</Text>
					</RevealFx>
					<RevealFx translateY={6} delay={0.2}>
						<Flex fillWidth>
							<Button
								id="about"
								data-border="rounded"
								href={`/${locale}/about`}
								variant="tertiary"
								size="m">
								<Flex
									gap="8"
									alignItems="center">
									{about.avatar.display && (
										<Avatar
											style={{ marginLeft: '-0.75rem', marginRight: '0.25rem' }}
											src={person.avatar}
											size="m" />
									)}
									{t("about.title")}
									<Arrow trigger="#about" />
								</Flex>
							</Button>
						</Flex>
					</RevealFx>
				</Flex>

			</Flex>
			<RevealFx translateY={8} delay={0.3}>
				<Projects range={[1, 1]} locale={locale} />
			</RevealFx>

			{/* Skills & Technologies Showcase */}
			<RevealFx translateY={10} delay={0.4}>
				<Flex fillWidth direction="column" gap="m" paddingX="l" marginBottom="40">
					<Heading as="h2" variant="display-strong-xs" wrap="balance">About Me</Heading>
					<Text variant="body-default-l">
						I'm a Software Engineer specializing in backend development and AI infrastructure at AvestaLabs in Ahmedabad, India. With expertise in building production-grade systems, I focus on creating scalable, maintainable, and efficient solutions using modern technologies and best practices.
					</Text>
					<Text variant="body-default-l">
						Currently, I'm architecting IngestIQ.ai, an enterprise RAG (Retrieval-Augmented Generation) platform that transforms unstructured data into AI-ready context. This involves designing event-driven ingestion pipelines, implementing semantic chunking strategies, and building vector database indexing workflows for optimal retrieval performance.
					</Text>
					<Text variant="body-default-l">
						My technical foundation is built on Clean Architecture principles, Object-Oriented Programming (OOP), and Test-Driven Development (TDD). I believe in writing code that is not just functional but also readable, testable, and easy to maintain. This approach has been instrumental in delivering production-ready applications that scale.
					</Text>
				</Flex>
			</RevealFx>

			{/* Skills & Technologies Grid */}
			<RevealFx translateY={12} delay={0.5}>
				<Flex fillWidth direction="column" gap="m" paddingX="l" marginBottom="40">
					<Heading as="h2" variant="display-strong-xs" wrap="balance">Skills & Technologies</Heading>
					<Text variant="body-default-l"><strong>Backend Development:</strong> Node.js, Express.js, AWS Lambda, REST APIs, Event-Driven Architecture, Serverless, Microservices</Text>
					<Text variant="body-default-l"><strong>Databases & Search:</strong> PostgreSQL, MySQL, Elasticsearch, Redis, Vector Databases (Pinecone, Weaviate)</Text>
					<Text variant="body-default-l"><strong>AI & RAG Infrastructure:</strong> Retrieval-Augmented Generation, Semantic Search, Embeddings, LangChain, Model Context Protocol (MCP)</Text>
					<Text variant="body-default-l"><strong>Programming Languages:</strong> TypeScript, JavaScript, Java, Python, SQL, C#</Text>
					<Text variant="body-default-l"><strong>Cloud & DevOps:</strong> AWS (Lambda, Step Functions, S3, SQS), Docker, Linux, CI/CD Pipelines</Text>
					<Text variant="body-default-l"><strong>Practices:</strong> Clean Architecture, Domain-Driven Design, Test-Driven Development, System Design, Performance Optimization</Text>
				</Flex>
			</RevealFx>

			{/* Technical Blog Posts Section */}
			{/* <RevealFx translateY={12} delay={0.5}>
				<Flex fillWidth direction="column" gap="m" paddingX="l" marginBottom="40">
					<Heading as="h2" variant="display-strong-xs" wrap="balance">Technical Blog Posts</Heading>
					<Posts range={[1,2]} columns="2" locale={locale}/>
				</Flex>
			</RevealFx> */}
			{routes['/blog'] && (
				<Flex
					fillWidth gap="24"
					mobileDirection="column">
					<Flex flex={1} paddingLeft="l">
						<Heading
							as="h2"
							variant="display-strong-xs"
							wrap="balance">
							Latest from the blog
						</Heading>
					</Flex>
					<Flex
						flex={3} paddingX="20">
						<Posts range={[1, 2]} columns="2" locale={locale} />
					</Flex>
				</Flex>
			)}
			<Projects range={[2]} locale={locale} />
			{contact.display &&
				<ContactForm contact={contact} />
			}
		</Flex>
	);
}