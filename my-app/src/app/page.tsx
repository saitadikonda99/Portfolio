import React from 'react';
import './page.css';
import './globals.css';

import Navbar from './components/navbar/navbar';
import Profile from './ui/profile/page';
import About from './ui/about/page';
import Stack from './ui/stack/page';
import Education from './ui/education/page';
import Projects from './ui/projects/page';
import Contact from './ui/contact/page';
import Footer from './components/footer/footer';

export default function Home() {
  return (
        <div className="HomeComponent">
            <div className="HomeComponent-in">
                <Navbar />
                <Profile />
                <About />
                <Stack />
                <Education />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
  );
}
