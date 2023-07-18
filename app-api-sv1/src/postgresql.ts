// For more information about this file see https://dove.feathersjs.com/guides/cli/databases.html
import knex from 'knex'
import type { Knex } from 'knex'
import type { Application } from './declarations'

import { PrismaClient } from "@prisma/client"

declare module './declarations' {
  interface Configuration {
    postgresqlClient: Knex,
    prisma: PrismaClient
  }
}

export const postgresql = (app: Application) => {
  const config = app.get('postgresql')
  const db = knex(config!)

  app.set('postgresqlClient', db)

  const prismaClient = new PrismaClient()
  prismaClient.$connect()

  app.set('prisma', prismaClient)
}
