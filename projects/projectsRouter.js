const express = require('express');
const db = require('../data/dbHelpers');
const router = express.Router();

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await db.getProjects();
    res.status(201).json(projects);
  } catch (err) {
    res.status(500).json({
      err: 'The projects could not be retrieved.'
    });
  }
})

// POST for adding projects.
router.post('/', async (req, res) => {
  try {
    const newProject = req.body;
    const project = await db.addProject(newProject);
    res.status(201).json({
      newProject: project
    })
  } catch (err) {
    res.status(500).json({
      err: 'The project could not be added.'
    })
  }
})

//  POST for adding actions.
router.post('/:id/actions', async (req, res) => {
  try {
    const newAction = req.body;
    const action = await db.addAction(newAction);
    res.status(201).json({
      newAction: action
    })
  } catch (err) {
    res.status(500).json({
      err: 'The action could not be added to the project.'
    })
  }
})

//  GET for retrieving a project by its id that returns an object 
router.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const project = await db.getProjectById(id);
    const actions = await db.getActionsByProjectId(id);
    res.status(200).json({
      "id": project.id,
      "name": project.project_name,
      "description": project.description,
      "completed": project.completed,
      "actions": actions
    });
  } catch (err) {
    res.status(500).json({
      err: 'The project could not be retrieved.'
    });
  }
})

// DELETE project
router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const project = await db.deleteProject(id);
    if (project) {
      res.status(200).json({
        deletedProject: project
      });
    } else {
      res.status(404).json({
        err: 'The project associated with the specified ID was not found.'
      })
    }
  } catch (error) {
    res.status(500).json({
      err: 'The project failed to delete'
    });
  }
})

// DELETE action
router.delete('/actions/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const action = await db.deleteAction(id);
    res.status(200).json({
      deletedAction: action
    });
  } catch (error) {
    res.status(500).json({
      err: 'The action failed to delete'
    });
  }
})

module.exports = router;