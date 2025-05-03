import blockContent from './blockContent'
import page from './documents/page'
import work from './documents/work'
import client from './documents/client'
import workCategory from './documents/workCategory'
import workType from './documents/workType'
import team from './documents/team'
import testimonial from './documents/testimonial'

// Section components
import heroSection from './objects/heroSection'
import workSection from './objects/workSection'
import aboutSection from './objects/aboutSection'
import contactSection from './objects/contactSection'
import heroWork from './documents/heroWork'

// Library of schemas - core elements for an architecture firm
export const schemaTypes = [
  // Content blocks
  blockContent,

  // Core documents
  work,
  client,
  workCategory,
  workType,
  team,
  testimonial,
  heroWork,
  // Pages
  page,

  // Section components
  heroSection,
  workSection,
  aboutSection,
  contactSection,
]
