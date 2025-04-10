import express from 'express';
import {
  getProjects,
  createProject,
} from '../controllers/projectController';
import {
  getIssues,
  createIssue,
  updateIssue,
  getIssueById,
} from '../controllers/issueController';

const router = express.Router();

// Project Routes
router.get('/projects', getProjects);
router.post('/projects', createProject);

// Issue Routes
router.get('/projects/:projectId/issues', getIssues);
router.post('/projects/:projectId/issues', createIssue);
router.patch('/issues/:issueId', updateIssue);
router.get('/issues/:issueId', getIssueById);

export default router;
