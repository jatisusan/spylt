import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import { ScrollTrigger } from "gsap/all";
import Message from "./sections/Message";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Message />
      <div className="h-dvh border border-black"></div>
    </main>
  );
};

export default App;
