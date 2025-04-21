# Issue Tracker

## Overview

The **Issue Tracker** is a full-stack application built with React (TypeScript) on the frontend, Node.js with Express on the backend, and MongoDB for data persistence. It allows users to create and manage projects and track associated issues with status, priority, and descriptions.

---

## Tech Stack

- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Database**: MongoDB (via Mongoose)

---

## Folder Structure

```
project-issue-tracker/
├── frontend/          # React Frontend
├── backend/          # Express Backend
├── README.md        # Project Documentation
```

---

## 🧩 Features

### Frontend (React + TypeScript)

- `ProjectListPage`
  - View all projects
  - Create a new project
  - Click project to view related issues

- `IssueListPage`
  - View all issues for a specific project
  - Filter issues by status (To Do, In Progress, Done)
  - Create new issue with title, description, status, and priority

- Components:
  - `ProjectList`
  - `CreateProjectForm`
  - `IssueList`
  - `CreateIssueForm`

### Backend (Express + MongoDB)

- `GET /projects` - List all projects
- `POST /projects` - Create new project
- `GET /projects/:projectId/issues?status=` - List issues for a project (optionally filtered by status)
- `POST /projects/:projectId/issues` - Create a new issue
- `PATCH /issues/:issueId` - Update issue status or priority

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/project-issue-tracker.git
cd project-issue-tracker
```

---

## 📦 Backend Setup (Node.js + Express)

### Navigate to Backend Folder
```bash
cd server
```

### Install Dependencies
```bash
npm install
```

### Environment Variables

Create a `.env` file in `server/`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/project_tracker
```

### Seed Initial Data (Optional)

You can manually create projects and issues using the frontend or Postman.

### Run Backend Server

```bash
npm run dev
```

Express server will run at `http://localhost:5000`

---

## 💻 Frontend Setup (React + TypeScript)

### Navigate to Frontend Folder
```bash
cd ../client
```

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

Frontend will run at `http://localhost:5173`

> Make sure backend (`localhost:5000`) is also running to access the API.

---

## 🌐 API Reference

### Project APIs

- `GET /projects` - Returns all projects
- `POST /projects` - Create a new project
```json
{
  "name": "New Project"
}
```

### Issue APIs

- `GET /projects/:projectId/issues?status=InProgress` - Filter issues by status
- `POST /projects/:projectId/issues`
```json
{
  "title": "Issue Title",
  "description": "Details about the issue",
  "status": "To Do", // Default if not provided
  "priority": "High"
}
```
- `PATCH /issues/:issueId`
```json
{
  "status": "Done",
  "priority": "Medium"
}
```

---

## 📌 Database Choice

**MongoDB** was selected for its:

- Schema flexibility for fast development
- Native support for JSON-like documents
- Easily integrates with Mongoose ODM
- Well-suited for one-to-many relationships (projects to issues)

---

## ✅ Assumptions

- Each project can have multiple issues
- Status values: `To Do`, `In Progress`, `Done`
- Priority values: `Low`, `Medium`, `High`
- Status defaults to `To Do` if not specified

---

## 🛠️ Known Limitations & Future Improvements

- No authentication layer (e.g., JWT)
- No pagination or sorting
- No error boundary on frontend
- No editing of existing project names or full issue details (only status/priority update supported)

---

## 🧪 Testing

Manual testing using Postman or browser UI for endpoints. Automated testing planned for future iteration.

---

## 📬 Feedback / Contact

If you have any questions, feel free to reach out to the project creator or submit an issue in the repo.

---

## 📄 License

MIT License

---

Thank you for checking out the **Project Issue Tracker**! 🚀
