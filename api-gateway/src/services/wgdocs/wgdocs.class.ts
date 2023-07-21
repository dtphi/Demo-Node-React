// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../declarations'
import type { Wgdocs, WgdocsData, WgdocsPatch, WgdocsQuery } from './wgdocs.schema'

export type { Wgdocs, WgdocsData, WgdocsPatch, WgdocsQuery }

export interface WgdocsServiceOptions {
  app: Application
}

export interface WgdocsParams extends Params<WgdocsQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class WgdocsService<ServiceParams extends WgdocsParams = WgdocsParams>
  implements ServiceInterface<Wgdocs, WgdocsData, ServiceParams, WgdocsPatch>
{
  constructor(public options: WgdocsServiceOptions) {}

  async find(_params?: ServiceParams): Promise<Wgdocs[]> {
    return []
  }

  async get(id: Id, _params?: ServiceParams): Promise<Wgdocs> {
    return {
      id: 0,
      text: `A new message with ID: ${id}!`
    }
  }

  async create(data: WgdocsData, params?: ServiceParams): Promise<Wgdocs>
  async create(data: WgdocsData[], params?: ServiceParams): Promise<Wgdocs[]>
  async create(data: WgdocsData | WgdocsData[], params?: ServiceParams): Promise<Wgdocs | Wgdocs[]> {
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)))
    }

    return {
      id: 0,
      ...data
    }
  }

  // This method has to be added to the 'methods' option to make it available to clients
  async update(id: NullableId, data: WgdocsData, _params?: ServiceParams): Promise<Wgdocs> {
    return {
      id: 0,
      ...data
    }
  }

  async patch(id: NullableId, data: WgdocsPatch, _params?: ServiceParams): Promise<Wgdocs> {
    return {
      id: 0,
      text: `Fallback for ${id}`,
      ...data
    }
  }

  async remove(id: NullableId, _params?: ServiceParams): Promise<Wgdocs> {
    return {
      id: 0,
      text: 'removed'
    }
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
