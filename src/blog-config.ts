import { encodeNumberToBase62 } from "@/lib/base62";

export const GENERAL_CONFIG = {
  siteTitle: 'nurooong',
  description: 'nurooong\'s carefully unplanned blog',
}

export const ROUTING_CONFIG = {
  generateSlug: encodeNumberToBase62
}
