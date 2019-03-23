const express = require('express');
const db = require('./data/dbHelpers');
const server = express();
const parser = express.json();

server.use(parser);

server.get('/api/projects')

// db.getProjectById(1)
//   .then(project => console.log(project))
//   .catch(error => console.log(error))

// db.getProjects()
// .then(projects => console.log(projects))
// .catch(error => console.log(error))

// db.getActionsByProjectId(1)
// .then(project => console.log(project))
// .catch(error => console.log(error))

// db.addProject({
//   project_name: 'Clean out wardrobe',
//   description: 'time to clean out items I no longer wear!',
//   completed: false
// })
// .then(project => console.log(project))
// .catch(error => console.log(error))

// db.addAction({
//     action_desc: 'watch Marie Kondo\'s show on Netflix',
//     notes: 'get your self in the mindset of cleaning up!',
//     completed: false,
//     project_id: 4
//   })
//   .then(project => console.log(project))
//   .catch(error => console.log(error))