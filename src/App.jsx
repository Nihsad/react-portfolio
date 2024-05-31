import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';
import Resume from './components/Resume/Resume.jsx';
import Footer from './components/Footer/Footer.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import './App.css';

import backgroundSVG from './assets/images/background.svg';
import avatar from './assets/images/avatar.jpg';
import codeQuizRecording from './assets/images/code-quiz-recording.gif';
import anythingEventsCalendar from './assets/images/anything-events-calendar.png';
import coffeeOutlet from './assets/images/coffee-outlet.png';
import passwordGeneratorShowcase from './assets/images/password-generator-showcase.gif';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
