import { defineQuery } from "next-sanity";

export const TOTAL_POSTS = defineQuery('count(*[_type == "listings"])')

export const LATEST_POSTS = defineQuery(`*[_type == 'listings'] | order(createdAt desc) [0..1] {
  title,
  'image': gallery[0].asset -> url,
  description,
  "slug": slug.current,
  code,
  various,
  selling,
  sellPrice,
  renting,
  rentPrice
}`)

export const SINGLE_POST = defineQuery(`*[_type == "listings" && slug.current == $slug][0]{
    title,
    description,
    excerpt,
    text,
    class,
    code,
    location,
    "slug": slug.current,
    "images": gallery[].asset -> url,
    "district": district -> {title,"slug": slug.current, "zone": zone -> {title,"slug": slug.current}},
    renting,
    luogo,
    rentPrice,
    selling,
    sellPrice,
    various
  }`)

export const ALL_LISTINGS = defineQuery(`*[_type == 'listings'] | order(createdAt desc) {
  title,
  excerpt,
  'image': gallery[0].asset -> url,
  description,
  "slug": slug.current,
  "district": district -> {title,"slug": slug.current, "zone": zone -> {title,"slug": slug.current}},
  class,
  code,
  various,
  selling,
  sellPrice,
  renting,
  rentPrice
  }`)


export const ZONES_QUERY = defineQuery(`*[_type == 'zones'] [0..1] {
  'slug': slug.current,
  title,
  'image': image.asset -> url
}`)

export const CURRENT_ZONE = defineQuery(`*[_type == "zones" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  "image": image.asset -> url,
  "total": count(*[_type == 'listings' && references(*[_type == 'locations' && references(*[_type == 'zones' && slug.current == $slug]._id)]._id)])
}`)

export const ZONES_RELATED = defineQuery(`*[_type == 'listings' && references(*[_type == 'locations' && references(*[_type == 'zones' && slug.current == $slug]._id)]._id)]{
    title,
    excerpt,
    description,
    code,
    text,
    "slug": slug.current,
    "image": gallery[0].asset -> url,
    "district": district -> {title,"slug": slug.current, "zone": zone -> {title,"slug": slug.current, "image": image.asset -> url}},
    renting,
    rentPrice,
    selling,
    sellPrice,
    various,
}`)

export const LOCATIONS_QUERY = defineQuery(`*[_type == 'locations'] {
  title,
  "slug": slug.current,
  "zone": zone -> {title, "slug": slug.current}
}`)

export const CURRENT_LOCATION = defineQuery(`*[_type == "locations" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    "image": image.asset -> url,
    "total": count(*[_type == 'listings' && references(*[_type == 'locations' && slug.current == $slug]._id)])
    
  }`)

export const LOCATIONS_RELATED = defineQuery(`*[_type == "listings" && references(*[_type == 'locations' && slug.current == $slug]._id)]{
    title,
    excerpt,
    description,
    code,
    text,
    "slug": slug.current,
    "image": gallery[0].asset -> url,
    "district": district -> {title,"slug": slug.current, "zone": zone -> {title,"slug": slug.current, "image": image.asset -> url}},
    renting,
    rentPrice,
    selling,
    sellPrice,
    various,
    }`)