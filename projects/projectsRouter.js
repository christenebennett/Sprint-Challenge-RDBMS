const express = require('express');
const db = require('../data/dbHelpers');
const router = express.Router();

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await db.getProjects();
    res.status(201).json(projects);
  } catch (err) {
    res.status(500).json({err: 'The projects could not be retrieved.'});
  }
})

// POST for adding projects.
router.post('/', async (req, res) => {
  try {
    const newProject = req.body;
    const project = await db.addProject(newProject);
    res.status(201).json({newProject: project})
  } catch (err) {
    res.status(500).json({err: 'The project could not be added.'})
  }
})

//  POST for adding actions.

//  GET for retrieving a project by its id that returns an object 

module.exports = router;
// db.getProjects()
// .then(projects => console.log(projects))
// .catch(error => console.log(error))