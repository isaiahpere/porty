import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutMePage from "./pages/AboutMe";
import TechStackPage from "./pages/Tech";
import ProjectsPage from "./pages/Projects";
import PhotoPage from "./pages/Photo";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/contact-me" element={<ContactPage />} />
      <Route path="/about-me" element={<AboutMePage />} />
      <Route path="/tech" element={<TechStackPage />} />
      <Route path="/photo" element={<PhotoPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
};

export default App;
