import './style/style.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { SkillSection } from './components/SkillSection';
import { Route, Routes } from 'react-router-dom';
import { Projects } from './components/Projects';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='skills' element={<SkillSection />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
