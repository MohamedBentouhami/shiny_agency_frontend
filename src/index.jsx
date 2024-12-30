import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Survey from "./pages/Survey/";
import Header from "./components/header";
import Error from "./components/Error";
import Freelances from "./pages/Freelances";
import "./styles/style.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/survey/:questionNumber" element={<Survey />}></Route>
        <Route path="/freelances/" element={<Freelances />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
