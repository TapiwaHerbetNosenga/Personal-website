import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css"
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Layout from "./components/Layout";
import CV from "./pages/MyCV";
import Links from "./pages/MyLinks";
import Experience from "./pages/MyWorkExperience";
import Projects from "./pages/MyProjects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutMe />} />
            <Route path="My-CV" element={<CV />} />
            <Route path="My-Links" element={<Links />} />
            <Route path="My-Experience" element={<Experience />} />
            <Route path="My-Projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
