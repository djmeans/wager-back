
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('member').del()
    .then(function () {
      // Inserts seed entries
      return knex('member').insert([
        {
          owner:1,
          mem1:2,
          mem2:3,
          mem3:null,
          mem4:null,
          mem5:null,
          mem6:null,
          mem7:null,
          mem8:null,
          mem9:null
        }
      ]);
    });
};
