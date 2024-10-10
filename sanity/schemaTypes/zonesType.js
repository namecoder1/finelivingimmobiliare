import { defineField, defineType } from "sanity";
import { PinIcon } from "@sanity/icons";

export const zones = defineType({
	name: 'zones',
  title: 'Zone',
  type: 'document',
  icon: PinIcon,
  fields: [
    defineField({name: 'title', title: 'Titolo', type:'string'}),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: {
        hotspot: true,
      }
    })
  ]
})