import { wgdocs } from './wgdocs/wgdocs'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(wgdocs)
  // All services will be registered here
}
