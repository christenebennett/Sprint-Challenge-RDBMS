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