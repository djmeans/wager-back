
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('group').del()
    .then(function () {
      // Inserts seed entries
      return knex('group').insert([
        {
          name: 'Test group', 
          description:'This is just a test group',
          members: 1
        },
      ]);
    });
};
