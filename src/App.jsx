import { useState } from "react";
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Content from "./components/Content";
import Home from "./components/Home";
import Question from "./components/question";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-material" element={<> <Dashboard /> <Content /> </>} />

        <Route path="/study-material/class4" element={<> <Dashboard /> <Content subjects={['hindi', 'english', 'math', 'science', 'social science']} classTitle="Subjects for Class 4"/> </>} />

        <Route path="/study-material/class5" element={<> <Dashboard /> <Content subjects={['hindi', 'english', 'math', 'science', 'social science']} classTitle="Subjects for Class 5"/> </>} />

        <Route path="/study-material/class6" element={<> <Dashboard /> <Content subjects={['hindi', 'english', 'math', 'science', 'social science', 'sanskrit','computer science']} classTitle="Subjects for Class 6"/> </>} />

        <Route path="/study-material/class7" element={<> <Dashboard /> <Content subjects={['hindi', 'english', 'math', 'science', 'social science', 'sanskrit','computer science']} classTitle="Subjects for Class 7"/> </>} />

<Route path="/study-material/class8" element={<> <Dashboard /> <Content subjects={['hindi', 'english', 'math', 'science', 'social science', 'sanskrit','computer science']} classTitle="Subjects for Class 8"/> </>} />

<Route path="/study-material/class9" element={<> <Dashboard /> <Content subjects={['hindi', 'english', 'math', 'science', 'sanskrit','computer science','history','geography','political science','economics']} classTitle="Subjects for Class 9"/> </>} />

<Route path="/study-material/class10" element={<> <Dashboard /> <Content subjects={['hindi', 'english', 'math', 'science', 'sanskrit','computer science','history','geography','political science','economics']} classTitle="Subjects for Class 10"/> </>} />
        <Route path="/study-material/questions" element={<> <Question/> </>} />
      </Routes>
    </Router>
  );
}

export default App;
