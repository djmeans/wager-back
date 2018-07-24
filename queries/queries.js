var knex = require('../connection')

module.exports = {
    getAllData: function(db) {
        return knex(db).returning('*')
    },
    getById: function (id, db) {
        return knex(db).where('id', id).returning('*')
    },
    create: function (body, db){
        return knex(db).insert(body).returning('*')
    },
    update: function (id, body, db){
        return knex(db).where('id', id).update(body).returning('*')
    },
    delete: function (id, db){
        return knex(db).where('id', id).del()
    },
}
