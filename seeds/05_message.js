
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('message').del()
    .then(function () {
      // Inserts seed entries
      return knex('message').insert([
        {
          postedBy: 2,
          groupId: 1,
          message: 'Test Message'
        },
      ]);
    });
};
