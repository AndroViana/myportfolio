import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import RedDiv from "./components/RedDiv"; // Import the RedDiv component

function App() {
  return (
    <BrowserRouter>
      <RedDiv /> {/* Add the RedDiv component here */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
