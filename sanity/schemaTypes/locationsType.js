import { defineField, defineType } from "sanity";
import { PinIcon } from "@sanity/icons";

export const locations = defineType({
	name: 'locations',
  title: 'Quartieri',
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
      name: "zone",
      title: "Zona",
      type: "reference",
      to: {
        type: "zones",
      },
    }),
  ],
})