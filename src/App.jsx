import { Suspense, lazy } from "react";
import "./style/style.css";
import "./style/responsive.css";

import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { NoMatch } from "./components/NoMatch";

const SkillSection = lazy(() =>
  import("./components/skill/SkillSection").then((module) => ({
    default: module.SkillSection,
  })),
);

const Projects = lazy(() =>
  import("./components/project/Projects").then((module) => ({
    default: module.Projects,
  })),
);

const BlogHome = lazy(() =>
  import("./components/blog/BlogHome").then((module) => ({
    default: module.BlogHome,
  })),
);

const Blog = lazy(() =>
  import("./components/blog/Blog").then((module) => ({
    default: module.Blog,
  })),
);

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={<div className="container min-height">Loading...</div>}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="skills" element={<SkillSection />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<BlogHome />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
