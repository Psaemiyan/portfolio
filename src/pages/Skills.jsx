import React from 'react'
import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Java', 'TypeScript']
    },
    {
      category: 'Frontend Technologies',
      skills: ['React', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      category: 'Backend Technologies',
      skills: ['Node.js', 'Express', 'Django', 'Flask']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Heroku', 'Netlify']
    }
  ]

  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillCategories.map(category => (
          <div key={category.category} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-list">
              {category.skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
