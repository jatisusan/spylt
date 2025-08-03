import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Message from "./sections/Message";
import Flavor from "./sections/Flavor";
import { useGSAP } from "@gsap/react";
import Nutrition from "./sections/Nutrition";
import Benefits from "./sections/Benefits";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });

    ScrollTrigger.refresh();
  });

  return (
    <main>
      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <Flavor />
          <Nutrition />
          <div>
            <Benefits />
            <Testimonials />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
