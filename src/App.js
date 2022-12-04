import './style/style.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { SkillSection } from './components/SkillSection';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <SkillSection />
      <Footer />
    </div>
  );
}

export default App;
