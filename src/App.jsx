import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

import Hero from "./Components/Hero/Hero";
import Target from "./Components/Target/Target";
import Graphic from "./Components/Graphic/Graphic";
import Motion from "./Components/Motion/Motion";
import Photo from "./Components/Photo/Photo";
import Benefits from "./Components/Benefits/Benefits";
import Achievements from "./Components/Achievements/Achievements";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Hero />
        <Target />
        <Graphic />
        <Motion />
        <Photo />
        <Benefits />
        <Achievements />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
