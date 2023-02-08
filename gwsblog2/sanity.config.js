import { defineConfig } from "sanity"
import { deskTool } from 'sanity/desk'
import deskStructure from './deskStructure'
import schemas from './schemas/schema'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  title: "GWS Blog",
  projectId: "0hm5a81q",
  dataset: "production",
  plugins: [
    deskTool({
    structure: deskStructure
  }),
    visionTool()
  ],
  tools: (prev, context) => {
    const isAdmin = context.currentUser.roles
      .find(({ name }) => name === 'administrator')
    if (isAdmin) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
  schema: {
    types: schemas,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != 'settings')
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'settings') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },
});