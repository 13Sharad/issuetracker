import { useNavigate } from 'react-router-dom';

interface Project {
  _id: string;
  name: string;
}

const ProjectList = ({ projects }: { projects: Project[] }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-4">
      {projects.map((project) => (
        <div
          key={project._id}
          className="cursor-pointer p-2 border-b hover:bg-gray-100"
          onClick={() => navigate(`/projects/${project._id}/issues`)}
        >
          {project.name}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
