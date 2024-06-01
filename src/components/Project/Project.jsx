import './Project.css';
import PropTypes from 'prop-types';

const Project = ({ title, imageUrl, deployedUrl, githubUrl, description }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <div className="project-info">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <p>
          <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Application</a>
        </p>
        <p>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </p>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  deployedUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;
