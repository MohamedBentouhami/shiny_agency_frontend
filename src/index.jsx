import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Survey from "./pages/Survey/";
import Header from "./components/header";
import Error from "./components/Error";
import Freelances from "./pages/Freelances";
import "./styles/Style.css";
import Results from "./pages/Results";
import { SurveyProvider } from "./utils/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <SurveyProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/survey/:questionNumber" element={<Survey />}></Route>
          <Route path="/results/" element={<Results />}></Route>
          <Route path="/freelances/" element={<Freelances />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </SurveyProvider>
    </Router>
  </React.StrictMode>
);
