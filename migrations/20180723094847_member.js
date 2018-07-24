
exports.up = function(knex, Promise) {
    return knex.schema.createTable('member', (table) => {
        table.increments('id')
        table.integer('owner').references('user.id')
        table.integer('mem1').references('user.id')
        table.integer('mem2').references('user.id')
        table.integer('mem3').references('user.id')
        table.integer('mem4').references('user.id')
        table.integer('mem5').references('user.id')
        table.integer('mem6').references('user.id')
        table.integer('mem7').references('user.id')
        table.integer('mem8').references('user.id')
        table.integer('mem9').references('user.id')
    })
};


exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('member')
};
