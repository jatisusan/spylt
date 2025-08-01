import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Message = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", { type: "words" });
    const secMsgSplit = SplitText.create(".second-message", { type: "words" });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    gsap.to(secMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      },
    });

    revealTl.to(".msg-text-scroll", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 0.8,
      ease: "circ.inOut",
    });

    const paraTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top 60%",
      },
    });

    paraTl.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      stagger: 0.01,
      duration: 1,
    });
  });

  return (
    <section className="message-content">
      <div className="container">
        <div className="msg-wrapper">
          <h1 className="first-message">Stir up your fearless past and</h1>

          <div
            className="msg-text-scroll"
            style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          >
            <div className="bg-light-brown md:pb-5 pb-3 px-5">
              <h2 className="text-red-brown">Fuel Up</h2>
            </div>
          </div>

          <h1 className="second-message">
            your future with every gulp of Perfect Protein
          </h1>
        </div>

        <div className="flex-center md:mt-20 mt-10 flex-center">
          <div className="max-w-md px-10 flex-center overflow-hidden">
            <p>
              Rev up your rebel spirit and feed the adventure of life with
              SPYLT, where you're one chug away from epic nostalgia and fearless
              fun
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
