import { useState } from 'react';
import API from '../api/api';

interface Props {
  onProjectCreated: () => void;
}

const CreateProjectForm = ({ onProjectCreated }: Props) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    await API.post('/projects', { name });
    setName('');
    onProjectCreated();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
  <div className="space-y-1">
    <label htmlFor="project-name" className="block text-sm font-medium text-indigo-700">
      Project Name
    </label>
    <div className="relative flex rounded-md shadow-sm">
      <input
        id="project-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="e.g. Website Redesign"
        className="block w-full rounded-lg border-gray-300 pl-4 pr-12 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
        required
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
    </div>
  </div>

  <div className="space-y-1">
    <label htmlFor="project-description" className="block text-sm font-medium text-indigo-700">
      Description (Optional)
    </label>
    <textarea
      id="project-description"
      rows={3}
      className="block w-full rounded-lg border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
      placeholder="Briefly describe the project..."
    />
  </div>

  <div className="grid grid-cols-2 gap-3">
    <div className="space-y-1">
      <label htmlFor="project-start" className="block text-sm font-medium text-indigo-700">
        Start Date
      </label>
      <input
        id="project-start"
        type="date"
        className="block w-full rounded-lg border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
    <div className="space-y-1">
      <label htmlFor="project-end" className="block text-sm font-medium text-indigo-700">
        Target End Date
      </label>
      <input
        id="project-end"
        type="date"
        className="block w-full rounded-lg border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
  </div>

  <button
    type="submit"
    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
  >
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
    <span>Create Project</span>
  </button>
</form>
  );
};

export default CreateProjectForm;
