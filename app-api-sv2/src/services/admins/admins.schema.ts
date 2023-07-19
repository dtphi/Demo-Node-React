// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'
import { passwordHash } from '@feathersjs/authentication-local'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const adminSchema = Type.Object(
  {
    id: Type.Number(),
    email: Type.String(),
    password: Type.Optional(Type.String())
  },
  { $id: 'Admin', additionalProperties: false }
)
export type Admin = Static<typeof adminSchema>
export const adminValidator = getValidator(adminSchema, dataValidator)
export const adminResolver = resolve<Admin, HookContext>({})

export const adminExternalResolver = resolve<Admin, HookContext>({
  // The password should never be visible externally
  password: async () => undefined
})

// Schema for creating new entries
export const adminDataSchema = Type.Pick(adminSchema, ['email', 'password'], {
  $id: 'AdminData'
})
export type AdminData = Static<typeof adminDataSchema>
export const adminDataValidator = getValidator(adminDataSchema, dataValidator)
export const adminDataResolver = resolve<Admin, HookContext>({
  password: passwordHash({ strategy: 'local' })
})

// Schema for updating existing entries
export const adminPatchSchema = Type.Partial(adminSchema, {
  $id: 'AdminPatch'
})
export type AdminPatch = Static<typeof adminPatchSchema>
export const adminPatchValidator = getValidator(adminPatchSchema, dataValidator)
export const adminPatchResolver = resolve<Admin, HookContext>({
  password: passwordHash({ strategy: 'local' })
})

// Schema for allowed query properties
export const adminQueryProperties = Type.Pick(adminSchema, ['id', 'email'])
export const adminQuerySchema = Type.Intersect(
  [
    querySyntax(adminQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type AdminQuery = Static<typeof adminQuerySchema>
export const adminQueryValidator = getValidator(adminQuerySchema, queryValidator)
export const adminQueryResolver = resolve<AdminQuery, HookContext>({
  // If there is a user (e.g. with authentication), they are only allowed to see their own data
  id: async (value, user, context) => {
    if (context.params.user) {
      return context.params.user.id
    }

    return value
  }
})
