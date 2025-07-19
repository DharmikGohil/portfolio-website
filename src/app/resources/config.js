const baseURL = 'dharmikgohil.vercel.app'

// Enable localization
const i18n = false;

// Manage localized content in the messages folder
const i18nOptions = {
    locales: ['en'],            // A list of all locales that are supported, e.g. ['en','id']
    defaultLocale: 'en'         // Locale used by default and as a fallback
}

const routes = {
    '/':        true,
    '/about':   true,
    '/work':    true,
    '/blog':    true,
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
        opacity: 0.2            // Reduced from 0.4 for cleaner look
    },
    dots: {
        display: true,
        opacity: 0.2,           // Reduced from 0.4 for cleaner look
        size: '16'              // Reduced from 24 for subtler effect
    },
    lines: {
        display: false,
    },
}

const style = {
    theme:       'dark',         // dark | light
    neutral:     'gray',         // sand | gray | slate
    brand:       'blue',         // Changed from emerald to blue for modern look
    accent:      'indigo',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',     // color | contrast
    solidStyle:  'flat',         // flat | plastic
    border:      'rounded',      // Changed from playful to rounded for cleaner look
    surface:     'translucent',  // filled | translucent
    transition:  'micro'         // Changed from all to micro for subtler animations
}

const display = {
    location: false,             // Disabled location display for cleaner header
    time:     false              // Disabled time display for cleaner header
}



export { routes, protectedRoutes, effects, style, display, baseURL, i18n, i18nOptions };