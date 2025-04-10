import { useState } from 'react';
import API from '../api/api';

interface Props {
  projectId: string;
  onIssueCreated: () => void;
}

const CreateIssueForm = ({ projectId, onIssueCreated }: Props) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !priority) return;

    await API.post(`/projects/${projectId}/issues`, {
      title,
      description,
      priority,
      status
    }).then()
    setTitle('');
    setDescription('');
    setPriority('Low');
    setStatus('To Do');
    onIssueCreated();
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="my-6 space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-md"
>
  <h2 className="text-xl font-semibold text-gray-800">Create New Issue</h2>

  {/* Title Input */}
  <input
    type="text"
    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Issue Title"
    required
  />

  {/* Description */}
  <textarea
    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Description (optional)"
    rows={3}
  />

  {/* Priority Dropdown */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
    <select
      value={priority}
      onChange={(e) => setPriority(e.target.value)}
      className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      <option>Low</option>
      <option>Medium</option>
      <option>High</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      <option >ToDo</option>
      <option >In Progress</option>
      <option>Done</option>
    </select>
  </div>

  {/* Submit Button */}
  <div className="pt-2">
    <button
      type="submit"
      className="w-full rounded-md bg-green-600 px-4 py-2 text-white shadow-md transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1"
    >
      Add Issue
    </button>
  </div>
</form>

  );
};

export default CreateIssueForm;
