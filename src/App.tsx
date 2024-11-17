import { useState } from "react";

import { APIProvider } from "@vis.gl/react-google-maps";
import VancMap from "./components/sections/Map";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Resources from "./components/sections/Resources";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}>
        <VancMap />
      </APIProvider>
      <About />
      <Resources />
      <Footer />
    </>
  );
}

export default App;
