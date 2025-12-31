import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow } from '@/once-ui/components';


import { baseURL, routes, renderContent } from '@/app/resources';
import { ContactForm } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { Marquee, GithubHeatmap } from '@/components';
import { skills } from '@/app/resources/skills';
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


			{/* Skills & Technologies Showcase */}


			{/* Skills & Technologies Grid */}
			<RevealFx translateY={12} delay={0.5}>
				<Flex fillWidth direction="column" gap="l" marginBottom="40">
					<Heading as="h2" variant="display-strong-xs" wrap="balance" paddingX="l">Skills & Technologies</Heading>

					<Flex fillWidth direction="column" gap="l">
						{skills.map((category, index) => (
							<Flex key={category.category} fillWidth direction="column" gap="16">
								<Heading
									as="h3"
									variant="body-default-s"
									onBackground="neutral-weak"
									paddingX="l"
									style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
								>
									{category.category}
								</Heading>
								<Marquee
									direction={index % 2 === 0 ? 'left' : 'right'}
									speed={index % 2 === 0 ? 30 : 40}
								>
									{category.items.map((skill) => (
										<Flex
											key={skill.name}
											alignItems="center"
											gap="12"
											paddingX="16"
											paddingY="12"
											style={{
												border: '1px solid var(--neutral-alpha-medium)',
												borderRadius: 'var(--radius-l)',
												background: 'linear-gradient(135deg, var(--neutral-alpha-weak) 0%, var(--neutral-alpha-medium) 100%)',
												backdropFilter: 'blur(10px)',
												transition: 'all 0.3s ease',
												cursor: 'default'
											}}
										>
											{typeof skill.icon === 'string' ? (
												<img
													src={skill.icon}
													alt={skill.name}
													width={24}
													height={24}
													style={{ objectFit: 'contain' }}
												/>
											) : (
												<skill.icon size={24} />
											)}
											<Text variant="body-default-m" style={{ whiteSpace: 'nowrap' }}>{skill.name}</Text>
										</Flex>
									))}
								</Marquee>
							</Flex>
						))}
					</Flex>
				</Flex>
			</RevealFx>

			<GithubHeatmap username="dharmik-at" />

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

			{contact.display &&
				<ContactForm contact={contact} />
			}
		</Flex>
	);
}