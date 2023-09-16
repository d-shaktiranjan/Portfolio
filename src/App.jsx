import "./style/style.css";
import "./style/responsive.css";

import { Route, Routes } from 'react-router-dom';

import {
  Navbar, Footer, Home, SkillSection,
  Projects, BlogHome, Blog, NoMatch
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="skills" element={<SkillSection />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<BlogHome />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
