exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1,
          action_desc: 'Name the podcast',
          notes: 'brainstorm some names with co-host',
          completed: false,
          project_id: 1
        },
        {
          id: 2,
          action_desc: 'Identify our audience',
          notes: 'Identify the who and why of our podcast',
          completed: false,
          project_id: 1
        },
        {
          id: 3,
          action_desc: 'Set up for recording',
          notes: 'get recording gear set up for recording day',
          completed: false,
          project_id: 1
        },
        {
          id: 4,
          action_desc: 'buy domain',
          notes: 'purchase domain -- see if christene.dev is available',
          completed: false,
          project_id: 2
        },
        {
          id: 5,
          action_desc: 'design layout',
          notes: 'look online for layout inspiration',
          completed: false,
          project_id: 2
        },
        {
          id: 6,
          action_desc: 'add projects to site',
          notes: 'Add projects 1-3 to the home page',
          completed: false,
          project_id: 2
        },
        {
          id: 7,
          action_desc: 'rent bouncy house',
          notes: 'call 1-800-bounce to reserve the unicorn bouncy house',
          completed: false,
          project_id: 3
        },
        {
          id: 8,
          action_desc: 'order food',
          notes: 'order party platters from Some Burros',
          completed: false,
          project_id: 3
        },
        {
          id: 9,
          action_desc: 'hire dj',
          notes: 'ask around for a good birthday party dj',
          completed: false,
          project_id: 3
        }
      ]);
    });
};