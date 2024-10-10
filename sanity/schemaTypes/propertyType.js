import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const property = defineType({
	type: "document",
  name: "listings",
  title: "Listino",
  icon: HomeIcon,
  groups: [
    {name: "sell", title: "Vendita"},
    {name: "rent", title: "Affitto"},
    {name: "info", title: "Informazioni"}
  ],
  fields: [
    defineField({
      name: 'gallery',
      title: "Galleria Immagini",
      description: "La prima immagine diventa la copertina, dimensioni immagine simili",
      type: 'array',
      of: [
        { type: 'image', options: { hotspot: true}}
      ],
      options: {
        layout: 'grid'
      }
    }),
    defineField({name: "title", title: "Titolo", type: "string"}),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({name: "description", title: "Descrizione", type: "string"}),
    defineField({name: "text", title: "Testo", type: 'blockContent'}),
    defineField({name: "excerpt", title: "Estratto", type: "text", description: "Breve riassunto sulla proprietà"}),
    defineField({
      name: "district",
      title: "Quartiere",
      type: "reference",
      to: {
        type: "locations",
      },
    }),
    defineField({
      name: "class",
      title: "Classe Energetica",
      type: 'string',
      group: "info",
      options: {
        list: [
          { title: 'Classe A', value: 'Classe Energetica A'},
          { title: 'Classe B', value: 'Classe Energetica B'},
          { title: 'Classe C', value: 'Classe Energetica C'},
          { title: 'Classe D', value: 'Classe Energetica D'},
          { title: 'Classe E', value: 'Classe Energetica E'},
          { title: 'Classe F', value: 'Classe Energetica F'},
          { title: 'Classe G', value: 'Classe Energetica G'},
          { title: 'In Corso', value: 'Classif. in corso'},
        ]
      }
    }),
    defineField({name: 'code', type: 'string', title: 'Codice Agenzia', group: 'info'}),
			defineField({
      name: "various",
      title: "Caratteristiche",
      type: "document",
      group: "info",
      fields: [
        defineField({
          name: "rooms",
          title: "Stanze",
          type: "number",
        }),
        defineField({
          name: "garage",
          title: 'Posto Auto',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: "available",
          title: 'Disponibilità',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: "bath",
          title: "Bagni",
          type: "number",
        }),
        defineField({
          name: 'area',
          title: 'Metri Quadrati',
          type: "number",
        }),
        defineField({
          name: 'constructionYear',
          title: 'Anno di Costruzione',
          type: "number",
        }),
        defineField({
          name: 'floors',
          title: 'Numero di Piani',
          type: "number",
        }),
        defineField({
          name: 'locals',
          title: 'Locali Immobile',
          type: 'number',
        })
      ]
    }),
    defineField({
      name: 'luogo',
      group: "info",
      title: 'Luogo',
      type: 'document',
      fields: [
        defineField({
          name: 'indirizzo',
          title: 'Indirizzo',
          type: 'string',
          description: 'ES: Via Giovanni Giolitti, Pesaro.',
        }),
      ],
    }),
    defineField({name: "selling", title: "Vendita", type: "boolean", initialValue: false, group: "sell"}),
			defineField({
      title: "Prezzo di Vendita",
      name: "sellPrice",
      type: "string",
      group: "sell",
      hidden: ({ parent }) => !parent?.selling,
    }),
    defineField({name: "renting", title: "Affitto", type: "boolean", initialValue: false, group: "rent"}),
			defineField({
      title: "Prezzo di Affitto",
      name: "rentPrice",
      type: "string",
      group: "rent",
      hidden: ({ parent }) =>!parent?.renting,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'code',
    },
    prepare(selection) {
      const {title, subtitle} = selection;
      return {
        title,
        subtitle: `Codice Agenzia: ${subtitle}`
      }
    }
  }

})