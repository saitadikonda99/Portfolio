
import About from './ui/about/about';
import TechStack from './ui/teckStack/teckStack'
import Projects from './ui/projects/projects';
import Blogs from './ui/blogs/blogs';
import Footer from './components/footer/footer';

import './globals.css';

export default function Home() {
  return (
      <div className="HomeComponent">
        <div className="HomeComponent-in">
            <About />
            <TechStack />
            <Projects />
            <Blogs />
            <Footer />
        </div>
      </div>
  );
}
