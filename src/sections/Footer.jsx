import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const vidRef = useRef();

  useGSAP(() => {
    if (isMobile) return null;

    gsap.set(vidRef.current, { paused: true });

    ScrollTrigger.create({
      trigger: vidRef.current,
      start: "top bottom",
      onEnter: () => vidRef.current.play(),
    });
  });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative pt-[10vh]">
        <div className="overflow-hidden">
          <h1 className="general-title text-center text-milk py-5 md:py-20">
            #chugresponsibly
          </h1>
        </div>

        {!isMobile && (
          <video
            src="/videos/splash.mp4"
            ref={vidRef}
            playsInline
            muted
            className="absolute -bottom-20 object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="/images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="/images/insta.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="/images/tiktok.svg" alt="" />
          </div>
        </div>

        <div className="mt-20 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between md:items-start items-center text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5 text-sm">
            <div>
              <p>SPYLT Flavors</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="md:max-w-md z-10 text-sm">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>

            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          <p>Copyright © 2025 Spylt - All Rights Reserved</p>

          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
