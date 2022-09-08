import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

import Hero from "./Components/Hero/Hero";
import Target from "./Components/Target/Target";
// import Graphic from "./Components/Graphic/Graphic";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Hero />
        <Target />
        {/* <Graphic /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
