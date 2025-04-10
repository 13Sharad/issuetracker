import { Request, Response } from 'express';
import Issue from '../models/Issue';

export const getIssues = async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const { status } = req.query;
  const filter: any = { project: projectId };
  if (status) filter.status = status;

  const issues = await Issue.find(filter);
  res.json(issues);
};

export const getIssueById = async (req: Request, res: Response) => {
  const {issueId} = req.params;
    const issue = await Issue.findById(issueId);
    if (!issue) {
      return res.status(404).json({ 
        success: false,
        message: 'Issue not found' 
      });
    }

    res.status(200).json({
      success: true,
      data: issue
    });
};

export const createIssue = async (req: Request, res: Response) => {
try{  const { projectId } = req.params;
  const { title, description, status, priority } = req.body;

  if (!title || !priority) {
    return res.status(400).json({ error: 'Title and priority are required' });
  }

  const issue = new Issue({ title, description, status, priority, project: projectId });
  await issue.save();
  res.status(201).json(issue);}
  catch(err){
    console.log(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateIssue = async (req: Request, res: Response) => {
  const { issueId } = req.params;
  const updated = await Issue.findByIdAndUpdate(issueId, req.body, { new: true });
  console.log(updated);
  if (!updated) return res.status(404).json({ error: 'Issue not found' });
  res.json(updated);
};

