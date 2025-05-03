import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{type: 'client'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Project Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'workCategory'}],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'materials',
      title: 'Materials Used',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
    }),
    defineField({
      name: 'projectStatus',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          {title: 'Concept', value: 'concept'},
          {title: 'In Progress', value: 'inProgress'},
          {title: 'Completed', value: 'completed'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Project Location',
      type: 'object',
      fields: [
        defineField({name: 'city', type: 'string', title: 'City'}),
        defineField({name: 'state', type: 'string', title: 'State/Province'}),
        defineField({name: 'country', type: 'string', title: 'Country'}),
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'projectUrl',
      title: 'Live Project URL',
      type: 'url',
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'text',
    }),
    defineField({
      name: 'core',
      title: 'Project Details',
      type: 'object',
      fields: [
        defineField({name: 'architectLead', type: 'string', title: 'Lead Architect'}),
        defineField({name: 'clientName', type: 'string', title: 'Client Name'}),
        defineField({name: 'projectChallenge', type: 'text', title: 'Project Challenge'}),
        defineField({name: 'squareFootage', type: 'number', title: 'Square Footage'}),
        defineField({name: 'constructionCost', type: 'string', title: 'Construction Cost'}),
        defineField({
          name: 'sustainabilityFeatures',
          type: 'array',
          title: 'Sustainability Features',
          of: [{type: 'string'}],
          options: {layout: 'tags'},
        }),
      ],
    }),
    defineField({
      name: 'designConcept',
      title: 'Design Concept',
      type: 'object',
      fields: [
        defineField({
          name: 'inspiration',
          type: 'object',
          title: 'Inspiration',
          fields: [
            defineField({name: 'title', type: 'string'}),
            defineField({name: 'description', type: 'text'}),
          ],
        }),
        defineField({
          name: 'siteContext',
          type: 'object',
          title: 'Site Context',
          fields: [
            defineField({name: 'title', type: 'string'}),
            defineField({name: 'description', type: 'text'}),
          ],
        }),
        defineField({
          name: 'designPrinciples',
          type: 'array',
          title: 'Design Principles',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'title', type: 'string'}),
                defineField({name: 'description', type: 'text'}),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'architecturalDrawings',
      title: 'Architectural Drawings',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Drawing',
          fields: [
            defineField({name: 'title', type: 'string'}),
            defineField({name: 'description', type: 'text'}),
            defineField({
              name: 'media',
              type: 'file',
              title: 'Drawing File',
              options: {accept: 'image/*,application/pdf'},
            }),
            defineField({
              name: 'drawingType',
              type: 'string',
              title: 'Drawing Type',
              options: {
                list: [
                  {title: 'Floor Plan', value: 'floorPlan'},
                  {title: 'Elevation', value: 'elevation'},
                  {title: 'Section', value: 'section'},
                  {title: 'Detail', value: 'detail'},
                  {title: 'Rendering', value: 'rendering'},
                  {title: 'Other', value: 'other'},
                ],
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'awards',
      title: 'Awards & Recognition',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', title: 'Award Name'}),
            defineField({name: 'organization', type: 'string', title: 'Awarding Organization'}),
            defineField({name: 'year', type: 'number', title: 'Year Received'}),
            defineField({name: 'description', type: 'text', title: 'Description'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'publications',
      title: 'Publications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', title: 'Publication Title'}),
            defineField({name: 'publisher', type: 'string', title: 'Publisher'}),
            defineField({name: 'date', type: 'date', title: 'Publication Date'}),
            defineField({name: 'link', type: 'url', title: 'Link to Publication'}),
          ],
        },
      ],
    }),

    defineField({
      name: 'workType',
      title: 'Project Type',
      type: 'reference',
      to: [{type: 'workType'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'modelUrl',
      title: '3D Model URL',
      type: 'url',
      description: 'Link to a 3D model viewer for this project',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client.title',
      workType: 'workType.title',
      media: 'coverImage',
    },
    prepare({title, client, workType, media}) {
      return {
        title,
        subtitle: `${client || 'No client'} · ${workType || 'No type'}`,
        media,
      }
    },
  },
})
