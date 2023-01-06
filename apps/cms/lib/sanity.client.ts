import { apiVersion, dataset, projectId, useCdn } from './sanity.api'
import { createClient } from 'next-sanity'

export const sanityClient = (
  token: string | null = process.env.SANITY_API_READ_TOKEN!,
) =>
  createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    token: token || undefined,
  })
