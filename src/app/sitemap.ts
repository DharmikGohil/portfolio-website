import { getPosts } from '@/app/utils/utils'
import { baseURL, routes as routesConfig } from '@/app/resources'
import { routing } from '@/i18n/routing'

export default async function sitemap() {
    const locales = routing.locales;
    const includeLocalePrefix = locales.length > 1;

    let blogs = locales.flatMap((locale) =>
        getPosts(['src', 'app', '[locale]', 'blog', 'posts', locale]).map((post) => ({
            url: `https://${baseURL}${includeLocalePrefix ? `/${locale}` : ''}/blog/${post.slug}`,
            lastModified: post.metadata.publishedAt,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }))
    );

    let works = locales.flatMap((locale) =>
        getPosts(['src', 'app', '[locale]', 'work', 'projects', locale]).map((post) => ({
            url: `https://${baseURL}${includeLocalePrefix ? `/${locale}` : ''}/work/${post.slug}`,
            lastModified: post.metadata.publishedAt,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))
    );

    const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route]);

    // Define priority based on route importance
    const routePriority: Record<string, number> = {
        '/': 1.0,
        '/about': 0.9,
        '/work': 0.9,
        '/blog': 0.8,
        '/helpful-stuff': 0.6,
    };

    let routes = locales.flatMap((locale) =>
        activeRoutes.map((route) => ({
            url: `https://${baseURL}${includeLocalePrefix ? `/${locale}` : ''}${route !== '/' ? route : ''}`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: route === '/' ? 'weekly' as const : 'monthly' as const,
            priority: routePriority[route] || 0.5,
        }))
    );

    return [...routes, ...blogs, ...works]
}