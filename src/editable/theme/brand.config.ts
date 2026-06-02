import { siteIdentity } from '@/config/site.identity'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'

const { recipe } = getFactoryState()
const productKind = getProductKind(recipe)

export const slot4BrandConfig = {
  siteName: siteIdentity.name,
  tagline: siteIdentity.tagline,
  domain: siteIdentity.domain,
  baseUrl: siteIdentity.url,
  productKind,
  ogImage: siteIdentity.ogImage,
  accents:
    productKind === 'visual'
      ? { primary: '#E6501B', surface: '#180705' }
      : productKind === 'editorial'
        ? { primary: '#740A03', surface: '#fff8f3' }
        : productKind === 'directory'
          ? { primary: '#280905', surface: '#f7efe8' }
          : { primary: '#C3110C', surface: '#fff9f5' },
} as const
