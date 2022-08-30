import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";

import Home from "./Pages/Home/Home";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
