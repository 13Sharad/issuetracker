import { Request, Response } from 'express';
import Project from '../models/Project';

export const getProjects = async (_: Request, res: Response) => {
  const projects = await Project.find();
  res.json(projects);
};

export const createProject = async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Project name is required' });

  const project = new Project({ name });
  await project.save();
  res.status(201).json(project);
};
