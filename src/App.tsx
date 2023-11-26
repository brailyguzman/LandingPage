import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import { useState, useEffect } from 'react';

import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections: NodeListOf<HTMLElement> =
                document.querySelectorAll('section');
            let activeSectionId: string = 'home';
            const headerHeight = 100;

            for (const section of sections) {
                const rect = section.getBoundingClientRect();

                if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
                    activeSectionId = section.id;
                    break;
                }
            }

            setActiveSection(activeSectionId);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="app">
            <Header
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <Home />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
