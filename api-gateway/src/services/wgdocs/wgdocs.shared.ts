// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Wgdocs, WgdocsData, WgdocsPatch, WgdocsQuery, WgdocsService } from './wgdocs.class'

export type { Wgdocs, WgdocsData, WgdocsPatch, WgdocsQuery }

export type WgdocsClientService = Pick<WgdocsService<Params<WgdocsQuery>>, (typeof wgdocsMethods)[number]>

export const wgdocsPath = 'wgdocs'

export const wgdocsMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const wgdocsClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(wgdocsPath, connection.service(wgdocsPath), {
    methods: wgdocsMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [wgdocsPath]: WgdocsClientService
  }
}
