import React from 'react';
import { skills } from '../src/data';

const Skills = () => {
  return (
    <section className="skills">
      <h3 className="h3 skills-title">Skills</h3>

      <ul className="skills-list has-scrollbar">
        {skills.map((skill, index) => (
          <li className="skills-item" key={index}>
            <div className="skill-icon">
              {skill.type === 'svg' ? (
                <img src={skill.icon} alt={skill.name} />
              ) : (
                <i className={skill.icon}></i>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
