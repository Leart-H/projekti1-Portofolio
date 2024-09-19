import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Weather App',
        description: 'A simple weather app that shows the current weather of a specified location.',
        link: 'https://weatherapplh.netlify.app/'
    },
    {
        title: 'To-Do List',
        description: 'A to-do list app to manage your tasks efficiently.',
        link: 'https://tdbyleartthebest.netlify.app/'
    },
    {
        title: 'Memory Game',
        description: 'A game to see if u have a good memory',
        link: 'https://memorygamelearth.netlify.app/'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
