import type { TaskKey } from '@/lib/site-config'

export type TaskPageVoice = {
  eyebrow: string
  headline: string
  description: string
  filterLabel: string
  secondaryNote: string
  chips: string[]
}

export const taskPageVoices = {
  article: {
    eyebrow: 'Editorial index',
    headline: 'Long-form pieces presented with more authority and breathing room.',
    description: 'This lane is for essays, explainers, reflections, and strong reading cards that deserve a magazine-style archive.',
    filterLabel: 'Choose article topic',
    secondaryNote: 'Lead with hierarchy, sharp headlines, and a browsing rhythm that invites deeper reading.',
    chips: ['Editorial', 'Long-read', 'Featured'],
  },
  classified: {
    eyebrow: 'Offer board',
    headline: 'Classified posts that feel quick, useful, and easy to act on.',
    description: 'These pages work best when urgency is visible, essential details are clear, and the path to the listing stays frictionless.',
    filterLabel: 'Filter offer type',
    secondaryNote: 'Keep the pace brisk and the signal strong.',
    chips: ['Offers', 'Urgent', 'Fast scan'],
  },
  sbm: {
    eyebrow: 'Curated bookmarks',
    headline: 'Saved resources arranged like premium collections.',
    description: 'Bookmark pages should feel like refined shelves of links, references, tools, and useful places worth returning to.',
    filterLabel: 'Filter collection',
    secondaryNote: 'Useful links deserve elegance too.',
    chips: ['Collections', 'Links', 'Discovery'],
  },
  profile: {
    eyebrow: 'Profiles',
    headline: 'People, brands, and identities with stronger presence.',
    description: 'Profiles should surface trust, role, and context before the visitor needs to search for them.',
    filterLabel: 'Filter profile category',
    secondaryNote: 'Identity should feel immediate and readable.',
    chips: ['People', 'Brands', 'Identity'],
  },
  pdf: {
    eyebrow: 'Document room',
    headline: 'Downloadable files styled like a premium reference library.',
    description: 'PDF pages should feel organized, useful, and archival, with clear cues for reading and downloading.',
    filterLabel: 'Filter document type',
    secondaryNote: 'Structure and file clarity matter more than decoration.',
    chips: ['Files', 'Guides', 'Reference'],
  },
  listing: {
    eyebrow: 'Directory',
    headline: 'Business and service pages with cleaner comparison cues.',
    description: 'Listings need trust, location, and contact details to surface quickly while still feeling polished.',
    filterLabel: 'Filter listing category',
    secondaryNote: 'Make comparison simple and next steps obvious.',
    chips: ['Business', 'Compare', 'Trust'],
  },
  image: {
    eyebrow: 'Visual collection',
    headline: 'Image posts with a gallery-led browsing rhythm.',
    description: 'Visual pages should feel immersive first, while keeping captions and supporting details tidy and secondary.',
    filterLabel: 'Filter visual topic',
    secondaryNote: 'Let imagery carry the weight without losing structure.',
    chips: ['Gallery', 'Visual', 'Mood'],
  },
} satisfies Record<TaskKey, TaskPageVoice>
