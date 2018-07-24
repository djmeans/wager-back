
exports.up = function(knex, Promise) {
    return knex.schema.createTable('group', (table) => {
        table.increments('id')
        table.string('name')
        table.string('description')
        table.integer('members').references("member.id")
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('group')
};
