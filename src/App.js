import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutMePage from "./pages/AboutMe";
import TechStackPage from "./pages/Tech";
import ProjectsPage from "./pages/Projects";
import PhotoPage from "./pages/Photo";
import ResumePage from "./pages/Resume";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/contact-me" element={<ContactPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/tech" element={<TechStackPage />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </>
  );
};

export default App;
