import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroWork',
  title: 'Hero Works',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Hero Works',
    }),
    defineField({
      name: 'works',
      title: 'Featured Works',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'work'}],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Only one hero work section should be active at a time',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      active: 'active',
    },
    prepare({title, active}) {
      return {
        title,
        subtitle: active ? '✓ Active' : 'Inactive',
      }
    },
  },
})
