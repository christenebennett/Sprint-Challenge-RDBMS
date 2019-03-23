const express = require('express');
const server = express();
const parser = express.json();

const ProjectsRouter = require('./projects/projectsRouter');

server.use(parser);

server.use('/api/projects', ProjectsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the RDBMS Sprint Challenge API!</h1>
  `)
})




module.exports = server;



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