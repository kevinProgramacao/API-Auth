const routes            = require('express').Router();

const AuthController    = require('./controllers/authController');
const ProjectController = require('./controllers/projectController');

const authMiddleware    = require('./middleware/auth');

//AUTHCONTROLLER
routes.post('/auth/register', AuthController.register);

routes.post('/auth/authenticate', AuthController.authenticate);

routes.post('/auth/forgot_password', AuthController.forgotPassword);

routes.post('/auth/reset_password', AuthController.resetPassword);

routes.use(authMiddleware);

//PROJECTCONTROLLER
routes.get('/project/', ProjectController.selectProjects);

routes.get('/project/:projectId', ProjectController.selectProjectById);

routes.post('/project/', ProjectController.createProject);

routes.put('/project/:projectId', ProjectController.updateProject);

routes.delete('/project/:projectId', ProjectController.delete);

module.exports = routes;