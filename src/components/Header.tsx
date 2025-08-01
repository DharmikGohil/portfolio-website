"use client";

import { useParams } from "next/navigation";
import { useTransition } from "react";

import { Flex, ToggleButton } from "@/once-ui/components"
import styles from '@/components/Header.module.scss'

import { routes } from '@/app/resources'

import { routing } from '@/i18n/routing';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { renderContent } from "@/app/resources";
import { useTranslations } from "next-intl";
import { i18n } from "@/app/resources/config";

export const Header = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname() ?? '';
    const params = useParams();

    function handleLanguageChange(locale: string) {
        const nextLocale = locale as Locale;
        startTransition(() => {
            router.replace(
                pathname,
                {locale: nextLocale}
            )
        })
    }

    const t = useTranslations();
    const { home, about, blog, work, helpfulStuff } = renderContent(t);

    return (
        <>
            <Flex
                className={styles.mask}
                position="fixed" zIndex={9}
                fillWidth minHeight="80" justifyContent="center">
            </Flex>
            <Flex style={{height: 'fit-content'}}
                className={styles.position}
                as="header"
                zIndex={9}
                fillWidth padding="8"
                justifyContent="center">
                <Flex fillWidth justifyContent="center">
                    <Flex
                        background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                        padding="4"
                        justifyContent="center">
                        <Flex
                            gap="4"
                            textVariant="body-default-s">
                            { routes['/'] && (
                                <ToggleButton
                                    prefixIcon="home"
                                    href={`/${params?.locale}`}
                                    selected={pathname === "/"}>
                                    <Flex paddingX="2" hide="s">{home.label}</Flex>
                                </ToggleButton>
                            )}
                            { routes['/about'] && (
                                <ToggleButton
                                    prefixIcon="person"
                                    href={`/${params?.locale}/about`}
                                    selected={pathname === "/about"}>
                                    <Flex paddingX="2" hide="s">{about.label}</Flex>
                                </ToggleButton>
                            )}
                            { routes['/work'] && (
                                <ToggleButton
                                    prefixIcon="grid"
                                    href={`/${params?.locale}/work`}
                                    selected={pathname.startsWith('/work')}>
                                    <Flex paddingX="2" hide="s">{work.label}</Flex>
                                </ToggleButton>
                            )}
                            { routes['/blog'] && (
                                <ToggleButton
                                    prefixIcon="book"
                                    href={`/${params?.locale}/blog`}
                                    selected={pathname.startsWith('/blog')}>
                                    <Flex paddingX="2" hide="s">{blog.label}</Flex>
                                </ToggleButton>
                            )}
                            { routes['/helpful-stuff'] && (
                                <ToggleButton
                                    prefixIcon="book"
                                    href={`/${params?.locale}/helpful-stuff`}
                                    selected={pathname.startsWith('/helpful-stuff')}>
                                    <Flex paddingX="2" hide="s">{helpfulStuff.label}</Flex>
                                </ToggleButton>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};