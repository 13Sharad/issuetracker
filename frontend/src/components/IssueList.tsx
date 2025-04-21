import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Issue {
  _id: string;
  title: string;
  status: string;
  priority: string;
  createdAt?: string;
  description?: string;
}

interface Props {
  issues: Issue[];
  onFilter: (status: string) => void;
  currentFilter?: string;
}

const IssueList = ({ issues, onFilter, currentFilter = "" }: Props) => {
  const navigate = useNavigate();
  const bottomRef = useRef(null);
  const handleIssueClick = (id: string) => {
    navigate(`/issues/${id}`);
  };
  useEffect(() => {
    if (bottomRef.current) {
      (bottomRef.current as HTMLDivElement).scrollIntoView({ behavior: "smooth" });
    }
  }, [issues]);
  
  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Header and Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Issues</h2>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Filter by status:
            </label>
            <select
              value={currentFilter}
              onChange={(e) => onFilter(e.target.value)}
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">All Issues</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>
      </div>

      {/* Issues Grid */}

      {issues.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-500">No issues found</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {issues.map((issue) => (
            <div
              key={issue._id}
              onClick={() => handleIssueClick(issue._id)}
              className="border border-gray-200 rounded-lg bg-white p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {issue.title}
                </h3>
                {issue.description && (
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {issue.description}
                  </p>
                )}
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${issue.status === 'To Do'
                        ? 'bg-gray-100 text-gray-800'
                        : issue.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                  >
                    {issue.status}
                  </span>

                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${issue.priority === 'Low'
                        ? 'bg-blue-100 text-blue-800'
                        : issue.priority === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                  >
                    {issue.priority} Priority
                  </span>
                </div>

                {issue.createdAt && (
                  <p className="text-xs text-gray-500 mt-3">
                    Created: {new Date(issue.createdAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default IssueList;