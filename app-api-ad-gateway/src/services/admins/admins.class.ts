// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Admin, AdminData, AdminPatch, AdminQuery } from './admins.schema'

export type { Admin, AdminData, AdminPatch, AdminQuery }

export interface AdminParams extends KnexAdapterParams<AdminQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class AdminService<ServiceParams extends Params = AdminParams> extends KnexService<
  Admin,
  AdminData,
  AdminParams,
  AdminPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mysqlClient'),
    name: 'admins'
  }
}
