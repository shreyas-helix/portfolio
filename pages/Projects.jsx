import React from 'react';
import { projects } from '../src/data';

const Project = () => {
  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.id} className="project-item active">
              <div className="article-wrapper"> 
                <div className="rounded-lg container-project">
                  <img src={project.image} alt={project.title} className="card-image" />
                </div>
                <div className="project-info">
                  <div className="flex-pr">
                    <div className="project-title text-nowrap">{project.title}</div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-style-link"
                    >
                    <div className="project-hover">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                    </a>
                  </div>
                  <div className="types">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-type">
                        • {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </section>
    </article>
  );
};

export default Project;