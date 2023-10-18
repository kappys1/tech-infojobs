import { Upsellings } from './offerDetail'

interface APIResultOffers {
  currentPage: number
  pageSize: number
  totalResults: number
  currentResults: number
  totalPages: number
  items: APIOfferItem[]
  facets: Facet[]
}
interface APIResultsOffersError {
  error?: string
  error_description?: string
  timestamp?: string
}

interface APIOfferItem {
  id: string
  title: string
  province: Category
  city: string
  link: string
  category: Category
  contractType: Category
  subcategory: Category
  salaryMin: Category
  salaryMax: Category
  salaryPeriod: Category
  experienceMin: Category
  workDay: Category
  study: Category
  published: Date
  updated: Date
  author: Author
  requirementMin: string
  bold: boolean
  applications: string
  subSegment: number
  executive: boolean
  salaryDescription: string
  urgent: boolean
  color: boolean
  teleworking?: Category
}

interface Author {
  id: string
  name: string
  uri: string
  logoUrl: string
  corporateResponsive: boolean
  showCorporativeHeader: boolean
}

interface Category {
  id: number
  value: string
}

export interface Offer {
  id: string
  title: string
  province: string
  city: string
  published: Date
  updated: Date
  bold: boolean
  applications: string
  requirementMin: string
  urgent: boolean
  workDay: string
  experienceMin: string
  link: string
  contractType: ContractType
  salaryDescription: string
  teleworking: string
  author: Author
  description: string
  highlights: Upsellings
}

interface APIOfferReturn {
  listOfOffers: Offer[]
  currentPage: number
  totalPages: number
  totalResults: number
}
