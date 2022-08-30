import Header from "./Components/Header/Header";

import Hero from "./Components/Hero/Hero";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Hero />
      </main>
    </div>
  );
}

export default App;
