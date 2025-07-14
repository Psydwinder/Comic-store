import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

// Import your document schemas
import comic from './schemaTypes/product'
import author from './schemaTypes/author'
import artist from './schemaTypes/artist'
import category from './schemaTypes/category'
import publisher from './schemaTypes/publisher'

export default defineConfig({
  name: 'default',
  title: 'Comic Store Backend',

  projectId: 'm6r9f35v', // Replace with your actual project ID
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: [comic, author, artist, category, publisher],
  },
})
