
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          name: 'admin',
          imgUrl: 'https://cdn3.iconfinder.com/data/icons/users-6/100/654853-user-men-2-512.png',
          bio: 'I am the admin',
          wins: 0,
          totalBets: 0
        },
        {
          name: 'user1',
          imgUrl: 'https://cdn3.iconfinder.com/data/icons/users-6/100/654853-user-men-2-512.png',
          bio: 'I am the first user',
          wins: 0,
          totalBets: 4
        },
        {
          name: 'user2',
          imgUrl: 'https://cdn3.iconfinder.com/data/icons/users-6/100/654853-user-men-2-512.png',
          bio: 'I am the second user',
          wins: 4,
          totalBets: 4
        }
      ]);
    })
};
