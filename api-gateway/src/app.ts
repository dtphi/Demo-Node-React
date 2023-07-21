// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html
import { feathers } from '@feathersjs/feathers'
import express, {
  rest,
  json,
  urlencoded,
  cors,
  serveStatic,
  notFound,
  errorHandler
} from '@feathersjs/express'
import configuration from '@feathersjs/configuration'

import type { Application } from './declarations'
import { configurationValidator } from './configuration'
import { logger } from './logger'
import { logError } from './hooks/log-error'
import { sqlite } from './sqlite'
import { services } from './services/index'
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware'
import swagger from 'feathers-swagger'
const app: Application = express(feathers())

app.configure(swagger({
  specs: {
    info: {
      title: 'A test',
      description: 'A description',
      version: '1.0.0',
    },
    schemes: ['http', 'https'] // Optionally set the protocol schema used (sometimes required when host on https)
  },
}))
// Load app configuration
app.configure(configuration(configurationValidator))
app.use(cors({
  origin: '*'
}))
app.use(json())
app.use(urlencoded({ extended: true }))

// Host the public folder
//app.use('/', serveStatic(app.get('public')))

// proxy middleware options
/** @type {import('http-proxy-middleware/dist/types').Options} */

const pxyOptions: Options = {
  target: 'http://127.0.0.1:3030',
  changeOrigin: false,
  ws: true,
  pathRewrite: {
    '^/api/v1/customers': '/',
    '^/api/v1/customers/users': '/users',

    '^/api/v1/admins': '/',
    '^/api/v1/admins/admins': '/admins',
    '^/api/v1/admins/authentication': '/authentication',

    '^/api/v1/service': '/',
  },
  router : {
    '/admins': 'http://127.0.0.1:3032',
    '/service': 'http://127.0.0.1:3031',
  }
}

app.use('/api/v1', createProxyMiddleware(pxyOptions))

// Configure services and real-time functionality
app.configure(rest())

app.configure(sqlite)
app.configure(services)
//app.configure(channels)

// Configure a middleware for 404s and the error handler
app.use(notFound())
app.use(errorHandler({ logger }))

// Register hooks that run on all service methods
app.hooks({
  around: {
    all: [logError]
  },
  before: {},
  after: {},
  error: {}
})
// Register application setup and teardown hooks here
app.hooks({
  setup: [],
  teardown: []
})

export { app }
