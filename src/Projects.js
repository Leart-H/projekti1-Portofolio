import React from 'react';
import './Projects.css';
import memoryImage from './memory.png';
import todolistImage from './to do list.png'


const projects = [
    {
        title: 'Weather App',
        description: 'A simple weather app that shows the current weather of a specified location.',
        link: 'https://weatherapplh.netlify.app/',
        image: 'https://cdn-icons-png.flaticon.com/512/7477/7477790.png',
    },
    {
        title: 'To-Do List',
        description: 'A to-do list app to manage your tasks efficiently.',
        link: 'https://tdbyleartthebest.netlify.app/',
        image: todolistImage,
    },
    {
        title: 'Memory Game',
        description: 'A game to see if you have a good memory.',
        link: 'https://memorygamelearth.netlify.app/',
        image: memoryImage,
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
