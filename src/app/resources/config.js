const baseURL = 'dharmikgohil.in'

// Enable localization
const i18n = false;

// Manage localized content in the messages folder
const i18nOptions = {
    locales: ['en'],            // A list of all locales that are supported, e.g. ['en','id']
    defaultLocale: 'en'         // Locale used by default and as a fallback
}

const routes = {
    '/': true,
    '/about': true,
    '/work': true,
    '/blog': true,
    '/helpful-stuff': true,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
    '/work/automate-design-handovers-with-a-figma-to-code-pipeline': true
}

const effects = {
    mask: 'cursor',             // none | cursor | topLeft | topRight | bottomLeft | bottomRight
    gradient: {
        display: true,
        opacity: 0.4            // Increased opacity for vibrancy
    },
    dots: {
        display: true,
        opacity: 0.4,           // Increased opacity for better texture
        size: '24'              // Larger dots
    },
    lines: {
        display: false,
    },
}

const style = {
    theme: 'dark',         // dark | light
    neutral: 'gray',         // sand | gray | slate
    brand: 'violet',       // Premium violet
    accent: 'cyan',         // High contrast cyan
    solid: 'contrast',     // color | contrast
    solidStyle: 'plastic',      // plastic for depth
    border: 'rounded',      // rounded for modern feel
    surface: 'translucent',  // filled | translucent
    transition: 'all'           // all for smoother interactions
}

const display = {
    location: false,             // Disabled location display for cleaner header
    time: false              // Disabled time display for cleaner header
}



export { routes, protectedRoutes, effects, style, display, baseURL, i18n, i18nOptions };