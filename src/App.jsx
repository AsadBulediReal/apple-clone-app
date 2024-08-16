import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HighLight from "./components/HighLight";
import Model from "./components/Model";

import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <HighLight />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  );
};

export default Sentry.withProfiler(App);
