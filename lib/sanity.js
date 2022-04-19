import sanityClient from '@sanity/client'

export const writeClient = sanityClient({
  projectId: 'zmau43jq',
  dataset: 'production',
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,
  useCdn: false,
  apiVersion: '2022-04-14'
})

export const readClient = sanityClient({
  projectId: 'zmau43jq',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2022-04-14'
})
