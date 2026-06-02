import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Premium discovery for social bookmarkers',
      description: 'Explore curated links, standout articles, profiles, visuals, and resources through a richer editorial experience.',
      openGraphTitle: 'Premium discovery for social bookmarkers',
      openGraphDescription: 'GOFKAR.com blends curation, reading, and discovery into a luxury editorial browsing experience.',
      keywords: ['social bookmarking', 'curated links', 'resource discovery', 'premium editorial'],
    },
    hero: {
      badge: '',
      title: ['Find remarkable links,', 'timely reads, and trusted discoveries.'],
      description:
        'A polished home for social bookmarkers who want the speed of a resource board with the feel of a premium editorial publication.',
      primaryCta: { label: 'Browse latest', href: '/social-bookmarking' },
      secondaryCta: { label: 'Search collections', href: '/search' },
      searchPlaceholder: 'Search articles, links, profiles, or collections',
      focusLabel: 'Focus',
      featureCardBadge: 'editorial spotlight',
      featureCardTitle: 'Fresh discoveries deserve a front page with shape, depth, and rhythm.',
      featureCardDescription: 'Recent posts stay dynamic while the presentation feels intentional, premium, and unmistakably different.',
    },
    intro: {
      badge: 'Why GOFKAR',
      title: 'A bookmark-driven site designed like a magazine, not a template.',
      paragraphs: [
        'GOFKAR.com helps people surface useful pages, compelling ideas, and memorable finds without flattening everything into one generic list.',
        'Stories, saved resources, profiles, listings, visuals, and documents can all live together while still feeling polished and easy to navigate.',
        'That means visitors can scan quickly, open confidently, and keep discovering without losing the thread.',
      ],
      sideBadge: 'Highlights',
      sidePoints: [
        'Large editorial hero with varied card treatments.',
        'Search-first discovery flow for bookmark-heavy browsing.',
        'Rich section hierarchy with stronger rhythm and spacing.',
        'Safe fallbacks for posts missing image, summary, or category.',
      ],
      primaryLink: { label: 'Explore bookmarks', href: '/social-bookmarking' },
      secondaryLink: { label: 'Open search', href: '/search' },
    },
    cta: {
      badge: 'Share something good',
      title: 'Turn useful finds into polished discoveries.',
      description: 'Submit a new link, article, profile, or resource and let it live inside a browsing experience built to reward curiosity.',
      primaryCta: { label: 'Post a resource', href: '/login' },
      secondaryCta: { label: 'Contact us', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About GOFKAR',
    title: 'Discovery works better when the experience feels curated.',
    description: `${slot4BrandConfig.siteName} is built for people who save, share, and revisit useful pages with intention.`,
    paragraphs: [
      'We wanted a browsing surface that could hold bookmark culture, resource curation, and editorial reading without making everything feel interchangeable.',
      'The result is a site where visual hierarchy does more of the work, categories stay easy to scan, and every section keeps its own personality.',
    ],
    values: [
      {
        title: 'Useful first',
        description: 'Posts should feel valuable at a glance, whether they are links, long reads, listings, or profile pages.',
      },
      {
        title: 'Curated rhythm',
        description: 'The layout encourages fast scanning while still giving important stories and collections room to breathe.',
      },
      {
        title: 'Confident presentation',
        description: 'Clean structure, premium styling, and thoughtful hierarchy help good content feel worth opening.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Reach out about curation, publishing, partnerships, or support.',
    description:
      'Whether you are sharing a useful resource, exploring collaboration, or sorting out a publishing question, this page keeps the conversation clear and direct.',
    formTitle: 'Send a message',
  },
  search: {
    metadata: {
      title: 'Search',
      description: 'Search links, articles, categories, and collections across the site.',
    },
    hero: {
      badge: 'Search the collection',
      title: 'Find saved discoveries, standout reads, and useful sources fast.',
      description: 'Filter across active sections and move from broad discovery to the exact page you want without breaking the browsing flow.',
      placeholder: 'Search by keyword, source, topic, or title',
    },
    resultsTitle: 'Latest searchable discoveries',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to publish your next discovery.',
      description: 'Use your account to open the submission workspace and prepare a polished post for any active section of the site.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create links, stories, listings, and resource pages with one premium workflow.',
      description: 'Choose the content type, add the important details, and prepare a clean submission with summary, source, media, and body content.',
    },
    formTitle: 'Submission details',
    submitLabel: 'Save submission',
    successTitle: 'Submission saved successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your curation space.',
      description: 'Login to keep exploring, publish new finds, and move through the site with your account ready.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched those details. Create an account first, then try again.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Create account',
      title: 'Start collecting and publishing with GOFKAR.',
      description: 'Create an account to save your place, open the publishing workspace, and submit new discoveries with ease.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested profiles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit official site',
    },
  },
} as const
