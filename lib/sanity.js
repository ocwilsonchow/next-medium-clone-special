import sanityClient from '@sanity/client'

export const writeClient = sanityClient({
  projectId: 'zmau43jq',
  dataset: 'production',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

export const readClient = sanityClient({
  projectId: 'zmau43jq',
  dataset: 'production',
  useCdn: true
})
