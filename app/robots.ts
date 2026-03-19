import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    // Replace with your actual deployed domain name
    const baseUrl = 'https://atakhatri.com'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // If you ever want to hide a specific route from Google, add it here:
            // disallow: '/private-route/', 
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}