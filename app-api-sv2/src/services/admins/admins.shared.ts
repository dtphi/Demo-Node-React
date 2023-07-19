// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Admin, AdminData, AdminPatch, AdminQuery, AdminService } from './admins.class'

export type { Admin, AdminData, AdminPatch, AdminQuery }

export type AdminClientService = Pick<AdminService<Params<AdminQuery>>, (typeof adminMethods)[number]>

export const adminPath = 'api/v1/admins'

export const adminMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const adminClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(adminPath, connection.service(adminPath), {
    methods: adminMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [adminPath]: AdminClientService
  }
}
