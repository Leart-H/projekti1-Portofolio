import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';




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
                <section id="contact">
                    <Contact />
                </section>
            </main>
        </div>
    );
}

export default App;
