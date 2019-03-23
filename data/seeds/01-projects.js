exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([{
          id: 1,
          project_name: 'Make a podcast',
          description: 'actions items to release the greatest podcast in the history of the world',
          completed: false
        },
        {
          id: 2,
          project_name: 'Portfolio site',
          description: 'action items to complete my online portfolio',
          completed: false
        },
        {
          id: 3,
          project_name: 'Kid\'s birthday party',
          description: 'action items to prep and execute the greatest birthday party ever',
          completed: false
        }
      ]);
    });
};