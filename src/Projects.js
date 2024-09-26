import React from 'react';
import './Projects.css';
import memoryImage from './memory.png';
import todolistImage from './to do list.png';
import weatherImage from './weatherapp.png';
import mp3player from './mp3player.png';
import Clock from './clock.png';
import Mededation from './medetaion.png';
import gallery from './gallery.png';
import art from './canvas.png';


const projects = [
    {
        title: 'Weather App',
        description: 'A simple weather app that shows the current weather of a specified location.',
        link: 'https://weatherapplh.netlify.app/',
        image: weatherImage,
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
    },
    {
        title: 'MP3 Player',
        description: 'Listen to songs you like.',
        link: 'https://leartimp3player.netlify.app/',
        image: mp3player,
    },
    {
        title: 'Analog-Clock',
        description: 'Are u lost in the hours of my clock.',
        link: 'https://analogclockbylearth.netlify.app/',
        image: Clock,
    },
    {
        title: 'Mededation App',
        description: 'Have a bad day at work, and need some peace, use this mededation app for a more peacful life.',
        link: 'https://medetationappbyleart.netlify.app',
        image: Mededation,
    },
    {
        title: 'Gallery',
        description: 'A basic gallery.',
        link: 'https://gallerybylearthajnuni.netlify.app',
        image: gallery,
    },
    {
        title: 'Art Canvas',
        description: 'Give it a try maybe you could discover your hidden talent is art.',
        link: 'https://gallerybylearthajnuni.netlify.app',
        image: art,
    },
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
