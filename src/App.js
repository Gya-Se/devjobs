import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from '../src/pages/HomePage.js'
import JobPage from "./pages/JobPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job" element={<JobPage />} />
          <Route path="/job/:id" element={<JobPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
