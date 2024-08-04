import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Weather from './Weather';

import TodoList from './ToDoList';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="weather-app">
                    <Weather />
                
                </section>
                <section id="todo-list">
                    <TodoList />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
        </div>
    );
}

export default App;
