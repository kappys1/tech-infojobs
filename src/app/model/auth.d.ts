export interface ErrorAuthResponse {
  error: string
  error_description: string
  timestamp: string
}

export interface AuthResponse extends ErrorAuthResponse {
  access_token: string
  expires_in: number
  refresh_token: string
  token_type: string
}

export interface User {
  id: number
  email: string
  emailHash: string
  key: string
  hasPhoto: boolean
  photo: string
  name: string
  surname1: string
  surname2: string
  fullName: string
  city: string
  province: Province
  publicProfileLink: string
  status: number
  validatedMail: number
  accountCreation: string
  lastCVUpdate: string
  extendedBannerAttributes: string
  subSegment: string
  doesNotWantNotifications: boolean
  photoAccepted: boolean
}

export interface Province {
  id: number
  value: string
}
