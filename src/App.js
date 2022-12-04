import './style/style.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { SkillSection } from './components/SkillSection';
import { ContactMe } from './components/ContactMe';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Projects } from './components/Projects';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/skills">
            <SkillSection />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact-me">
            <ContactMe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
