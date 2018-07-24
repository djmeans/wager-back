
exports.up = function(knex, Promise) {
        return knex.schema.createTable('user', (table) => {
            table.increments('id')
            table.string('name')
            table.string('imgUrl')
            table.string('bio')
            table.integer('wins')
            table.integer('totalBets')
        }) 
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('user')
};
