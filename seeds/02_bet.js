
exports.seed = function(knex, Promise) {
  return knex('bet').del()
    .then(function () {
      return knex('bet').insert([
        {
          challenger: 2,
          opponent: 3,
          description: 'Bet you wont finish your capstone',
          wager:'success',
          accepted: false,
          winner: null,
          paid: false
        },
      ]);
    });
};
