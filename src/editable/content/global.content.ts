import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Curated links, strong reads, and premium discovery',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: '',
    utilityLinks: [
      { label: 'Join our list', href: '/signup' },
      { label: 'Contact', href: '/contact' },
    ],
    primaryLinks: [
      { label: 'Latest', href: '/article' },
      { label: 'Bookmarks', href: '/social-bookmarking' },
      { label: 'Discover', href: '/search' },
      { label: 'Directory', href: '/business-listing' },
    ],
    actions: {
      primary: { label: 'Post a link', href: '/create' },
      secondary: { label: 'Login', href: '/login' },
    },
  },
  footer: {
    tagline: 'Premium discovery, thoughtful curation, and elegant browsing.',
    description:
      'A modern social bookmarking hub where users can discover, save, and share useful websites, articles, resources, and online tools. Curate your favorite content, explore trending discoveries, and connect through shared knowledge.',
    columns: [
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Designed for clear curation, memorable reading, and effortless sharing.',
  },
  commonLabels: {
    readMore: 'Open story',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
