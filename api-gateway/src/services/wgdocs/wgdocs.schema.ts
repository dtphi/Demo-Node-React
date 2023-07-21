// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const wgdocsSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Wgdocs', additionalProperties: false }
)
export type Wgdocs = Static<typeof wgdocsSchema>
export const wgdocsValidator = getValidator(wgdocsSchema, dataValidator)
export const wgdocsResolver = resolve<Wgdocs, HookContext>({})

export const wgdocsExternalResolver = resolve<Wgdocs, HookContext>({})

// Schema for creating new entries
export const wgdocsDataSchema = Type.Pick(wgdocsSchema, ['text'], {
  $id: 'WgdocsData'
})
export type WgdocsData = Static<typeof wgdocsDataSchema>
export const wgdocsDataValidator = getValidator(wgdocsDataSchema, dataValidator)
export const wgdocsDataResolver = resolve<Wgdocs, HookContext>({})

// Schema for updating existing entries
export const wgdocsPatchSchema = Type.Partial(wgdocsSchema, {
  $id: 'WgdocsPatch'
})
export type WgdocsPatch = Static<typeof wgdocsPatchSchema>
export const wgdocsPatchValidator = getValidator(wgdocsPatchSchema, dataValidator)
export const wgdocsPatchResolver = resolve<Wgdocs, HookContext>({})

// Schema for allowed query properties
export const wgdocsQueryProperties = Type.Pick(wgdocsSchema, ['id', 'text'])
export const wgdocsQuerySchema = Type.Intersect(
  [
    querySyntax(wgdocsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type WgdocsQuery = Static<typeof wgdocsQuerySchema>
export const wgdocsQueryValidator = getValidator(wgdocsQuerySchema, queryValidator)
export const wgdocsQueryResolver = resolve<WgdocsQuery, HookContext>({})
