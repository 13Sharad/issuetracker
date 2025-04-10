import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectListPage from './pages/ProjectListPage';
import IssueListPage from './pages/IssueListPage';
import IssueDetail from './pages/IssueDetail';
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProjectListPage />} />
      <Route path="/projects/:projectId/issues" element={<IssueListPage />} />
      <Route path="/issues/:issueId" element={<IssueDetail/>} />
    </Routes>
  </Router>
);

export default App;
