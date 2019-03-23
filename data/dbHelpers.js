const knex = require('knex');

const dbConfig = require('../knexfile');

const db = knex(dbConfig.development);

module.exports = {
  getProjectById,
  getProjects,
  getActionsByProjectId,
  addProject,
  addAction,
  deleteProject,
  deleteAction
}

// Projects helper functions ------------------------
// retrieve project by id number
function getProjectById(id) {
  return db('projects')
    .where({
      id: Number(id)
    })
    .first();
}

// retrieve all projects
function getProjects() {
  return db('projects')
}

// add new project
function addProject(project) {
  return db('projects')
    .insert(project)
    .then(ids => ({
      id: ids[0]
    }));
}

// delete project
function deleteProject(id) {
  return db('projects')
    .where('id', id)
    .del();
}


// Actions helper functions ------------------------
// retrieve actions for given project id
function getActionsByProjectId(id) {
  return db('actions')
    .where({
      project_id: Number(id)
    });
}

// add new action
function addAction(action) {
  return db('actions')
    .insert(action)
    .then(ids => ({
      id: ids[0]
    }));
}

// delete action
function deleteAction(id) {
  return db('actions')
    .where('id', id)
    .del();
}