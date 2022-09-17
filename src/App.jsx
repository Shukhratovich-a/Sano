import useWindowDimensions from "./Hooks/useWindowDimensions";

import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
// import Footer from "./Components/Footer/Footer";

import Hero from "./Components/Hero/Hero";
import Target from "./Components/Target/Target";
import Graphic from "./Components/Graphic/Graphic";
import Motion from "./Components/Motion/Motion";
import Photo from "./Components/Photo/Photo";
import Benefits from "./Components/Benefits/Benefits";
import Achievements from "./Components/Achievements/Achievements";
import Contact from "./Components/Contact/Contact";

import "./App.scss";

function App() {
  const { width } = useWindowDimensions();

  return (
    <div className="app">
      <Header />
      {width <= 1140 && <Menu />}

      <main className="main">
        <Hero />
        <Target />
        <Graphic />
        <Motion />
        <Photo />
        <Benefits />
        <Achievements />
        <Contact />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
