import { useEffect, useState } from 'react';
import API from '../api/api';
import ProjectList from '../components/ProjectList';
import CreateProjectForm from '../components/CreateProjectForm';

const ProjectListPage = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const { data } = await API.get('/projects');
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-4 md:p-8">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-2">Project Tracker</h1>
        <p className="text-indigo-700">Manage your projects and issues efficiently</p>
      </header>
  
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Create Project Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 h-full">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Create New Project</h2>
            <CreateProjectForm 
              onProjectCreated={fetchProjects} 
            //   className="space-y-4"
            />
          </div>
        </div>
  
        {/* Projects List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-indigo-800">Your Projects</h2>
                {/* <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent"
                  />
                  <svg
                    className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div> */}
              </div>
            </div>
            
            <ProjectList 
              projects={projects} 
            //   className="divide-y divide-gray-100"
            />
            
            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
              <button className="px-4 py-2 text-sm text-indigo-600 hover:text-indigo-800 disabled:opacity-50">
                Previous
              </button>
              <div className="text-sm text-gray-600">
                Page 1 of 5
              </div>
              <button className="px-4 py-2 text-sm text-indigo-600 hover:text-indigo-800 disabled:opacity-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProjectListPage;
