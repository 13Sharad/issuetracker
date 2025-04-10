import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/api';
import IssueList from '../components/IssueList';
import CreateIssueForm from '../components/CreateIssueForm';

const IssueListPage = () => {
  const { projectId } = useParams();
  const [issues, setIssues] = useState([]);

  const fetchIssues = async (status?: string) => {
    const url = status
      ? `/projects/${projectId}/issues?status=${status}`
      : `/projects/${projectId}/issues`;
    const { data } = await API.get(url);
    setIssues(data);
  };

  useEffect(() => {
    fetchIssues();
  }, [projectId]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Issues</h1>
      <CreateIssueForm projectId={projectId!} onIssueCreated={() => fetchIssues()} />
      <IssueList issues={issues} onFilter={fetchIssues} />
    </div>
  );
};

export default IssueListPage;
