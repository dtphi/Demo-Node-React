import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('category', (table) => {
    table.increments('id')

    table.string('name').unique()
    table.string('status')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('category')
}
