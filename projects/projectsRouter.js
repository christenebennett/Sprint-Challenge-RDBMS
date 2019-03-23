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
// db.getProjects()
// .then(projects => console.log(projects))
// .catch(error => console.log(error))

// POST for adding projects.

//  POST for adding actions.

//  GET for retrieving a project by its id that returns an object 

module.exports = router;