import {defineConfig, SchemaTypeDefinition} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Architecture 1',

  projectId: '83xtifuw', // Temporarily hardcoded for testing
  dataset: 'production', // Temporarily hardcoded for testing

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes as SchemaTypeDefinition[],
  },
})
