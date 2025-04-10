import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../api/api';

const IssueDetail = () => {
  const { issueId } = useParams();
  const navigate = useNavigate();
  const [issue, setIssue] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const { data } = await API.get(`/issues/${issueId}`);
        setIssue(data.data);
      } catch (error) {
        console.error("Failed to fetch issue:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIssue();
  }, [issueId]);

  const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    try {
      setUpdating(true);
      const { data } = await API.patch(`/issues/${issueId}`, { status: newStatus });
      console.log(data);
      
      setIssue(data); // assuming your backend returns updated issue
    } catch (error) {
      console.error("Failed to update status:", error);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="flex justify-center items-center h-64">Loading...</div>;
  if (!issue) return <div className="text-center py-10">Issue not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
      >
        ← Back to Issues
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900">{issue.title}</h1>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              className="border rounded px-3 py-2 text-sm"
              value={issue.status}
              onChange={handleStatusChange}
              disabled={updating}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            {updating && <span className="ml-2 text-sm text-gray-500">Updating...</span>}
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-700 whitespace-pre-line">{issue.description}</p>
        </div>
      </div>
    </div>
  );
};

export default IssueDetail;
