
exports.up = function(knex, Promise) {
    return knex.schema.createTable('message', (table) => {
        table.increments('id')
        table.integer('postedBy').references('user.id')
        table.integer('groupId').references('group.id')
        table.string('message')
    })
};


exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('message')
};
