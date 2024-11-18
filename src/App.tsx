import { APIProvider } from "@vis.gl/react-google-maps";
import VancMap from "./components/sections/Map";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Resources from "./components/sections/Resources";
import Footer from "./components/sections/Footer";
import Home from "./components/sections/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}>
        <div className="px-[3rem] py-[2rem]">
          <div className="text-4xl font-serif italic">Stories</div>
          <div className="text-sm text-neutral-400">Click on a microphone to hear their stories! Click on a landmark house to support.</div>
        </div>
        <VancMap />
      </APIProvider>
      <About />
      <Resources />
      <Footer />
    </>
  );
}

export default App;
