// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  adminDataValidator,
  adminPatchValidator,
  adminQueryValidator,
  adminResolver,
  adminExternalResolver,
  adminDataResolver,
  adminPatchResolver,
  adminQueryResolver
} from './admins.schema'

import type { Application } from '../../declarations'
import { AdminService, getOptions } from './admins.class'
import { adminPath, adminMethods } from './admins.shared'

export * from './admins.class'
export * from './admins.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const admin = (app: Application) => {
  // Register our service on the Feathers application
  app.use(adminPath, new AdminService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: adminMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(adminPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(adminExternalResolver), schemaHooks.resolveResult(adminResolver)],
      find: [],
      get: [],
      create: [],
      update: [authenticate('jwt')],
      patch: [authenticate('jwt')],
      remove: [authenticate('jwt')]
    },
    before: {
      all: [schemaHooks.validateQuery(adminQueryValidator), schemaHooks.resolveQuery(adminQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(adminDataValidator), schemaHooks.resolveData(adminDataResolver)],
      patch: [schemaHooks.validateData(adminPatchValidator), schemaHooks.resolveData(adminPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [adminPath]: AdminService
  }
}
