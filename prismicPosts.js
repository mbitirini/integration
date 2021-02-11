import Prismic from 'prismic-javascript'

export const API_URL = `https://integration.cdn.prismic.io/api/v2`
export const API_TOKEN = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN

export const client = Prismic.client(API_URL, { accessToken: API_TOKEN })
