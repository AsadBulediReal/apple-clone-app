import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HighLight from "./components/HighLight";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <HighLight />
    </main>
  );
};

export default App;
