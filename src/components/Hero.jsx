import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils/index";
import { useEffect, useState } from "react";

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  useEffect(() => {
    const handleResize = debounce(() => {
      setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
    }, 300); // Adjust the debounce delay as needed

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.set("#hero", { opacity: 0, y: 10 });
    gsap.set("#heroVideo", { opacity: 0, y: 10 });

    gsap.to("#heroVideo", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
    });

    gsap.to("#hero", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      delay: 1,
    });
    gsap.set("#cta", { opacity: 0 });

    gsap.to("#cta", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power2.out",
      delay: 2.5,
    });
    gsap.set("#para", { opacity: 0 });

    gsap.to("#para", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power2.out",
      delay: 3,
    });
  }, [videoSrc]); // Add videoSrc as a dependency
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          Iphone 15 pro
        </p>
        <div id="heroVideo" className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            key={videoSrc}
            autoPlay
            muted
            playsInline={true}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="#highlights" className="btn px-4">
            Buy
          </a>
          <p id="para" className="font-normal text-xl opacity-0">
            From 199/Month or 999
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
