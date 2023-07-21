// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import { createSwaggerServiceOptions } from 'feathers-swagger';

import {
  wgdocsDataValidator,
  wgdocsPatchValidator,
  wgdocsQueryValidator,
  wgdocsResolver,
  wgdocsExternalResolver,
  wgdocsDataResolver,
  wgdocsPatchResolver,
  wgdocsQueryResolver
} from './wgdocs.schema'

import {
  wgdocsSchema,
  wgdocsDataSchema,
  wgdocsPatchSchema,
  wgdocsQuerySchema
} from './wgdocs.schema'

import type { Application } from '../../declarations'
import { WgdocsService, getOptions } from './wgdocs.class'
import { wgdocsPath, wgdocsMethods } from './wgdocs.shared'

export * from './wgdocs.class'
export * from './wgdocs.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const wgdocs = (app: Application) => {
  // Register our service on the Feathers application
  app.use(wgdocsPath, new WgdocsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: wgdocsMethods,
    // You can add additional custom events to be sent to clients here
    events: [],

    docs: createSwaggerServiceOptions({
      schemas: { 
        wgdocsSchema,
        wgdocsDataSchema,
        wgdocsPatchSchema,
        wgdocsQuerySchema 
      },
      docs: { 
        description: 'My custom service description',
        securities: ['all'],
      }
    }),
  })
  // Initialize hooks
  app.service(wgdocsPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(wgdocsExternalResolver), schemaHooks.resolveResult(wgdocsResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(wgdocsQueryValidator), schemaHooks.resolveQuery(wgdocsQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(wgdocsDataValidator), schemaHooks.resolveData(wgdocsDataResolver)],
      patch: [schemaHooks.validateData(wgdocsPatchValidator), schemaHooks.resolveData(wgdocsPatchResolver)],
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
    [wgdocsPath]: WgdocsService
  }
}
