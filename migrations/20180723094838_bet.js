
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bet', (table) => {
        table.increments('id')
        table.integer('challenger').references('user.id').onDelete('cascade')
        table.integer('opponent').references('user.id')
        table.string('description') 
        table.string('wager')
        table.boolean('accepted')
        table.integer('winner').references('user.id')
        table.boolean('paid')
    })
};


exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('bet')
};
