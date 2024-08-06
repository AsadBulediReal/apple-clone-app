import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { rightImg, watchImg } from "../utils/index";
import VideoCarousel from "./VideoCarousel";
gsap.registerPlugin(ScrollTrigger);

const HighLight = () => {
  useGSAP(() => {
    gsap.set("#title", { opacity: 0 });
    gsap.to("#title", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#highlights",
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none none",
      },
    });
    gsap.set(".link", { opacity: 0 });
    gsap.to(".link", {
      duration: 2,
      y: 0,
      opacity: 1,
      stagger: 0.25,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".link",
        start: "-268px 80%",
        end: "bottom 50%",
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden common-padding bg-zinc h-full"
    >
      <div className="screen-max-width">
        <div className="mb-12 sm:flex w-full items-end justify-between">
          <h1 id="title" className="section-heading">
            Get The Highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default HighLight;
