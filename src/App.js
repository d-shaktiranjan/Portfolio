import './style/style.css';
import './style/responsive.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { SkillSection } from './components/skill/SkillSection';
import { Route, Routes } from 'react-router-dom';
import { Projects } from './components/project/Projects';
import { NoMatch } from './components/NoMatch';
import { BlogHome } from './components/blog/BlogHome';
import { Blog } from './components/blog/Blog';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='skills' element={<SkillSection />} />
        <Route path='projects' element={<Projects />} />
        <Route path='blog' element={<BlogHome />} />
        <Route path='/blog/:slug' element={<Blog />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
