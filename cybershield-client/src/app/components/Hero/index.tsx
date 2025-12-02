"use client";

import { ProgressiveBlur } from "../ui/progressive-blur";
import { TimelineContent } from "../ui/timeline-animations";
import { Sparkles } from "lucide-react";
import { useRef } from "react";

function OrganizationHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      scale: 0.8,
      opacity: 0,
    },
  };

  return (
    <section ref={heroRef} className="min-h-screen relative pb-10">
      {/* Background */}
      <TimelineContent
        animationNum={11}
        timelineRef={heroRef}
        customVariants={revealVariants}
        className="absolute inset-0 bg-[url('/shadow13.png')] bg-cover bg-center bg-no-repeat"
      />

      {/* Hero Content */}
      <TimelineContent
        as="article"
        animationNum={1}
        timelineRef={heroRef}
        customVariants={revealVariants}
        className="text-neutral-800 py-32 w-fit max-w-5xl mx-auto text-center space-y-4 relative z-10 lg:px-0 px-4"
      >
        <TimelineContent
          animationNum={2}
          timelineRef={heroRef}
          customVariants={revealVariants}
          className="flex gap-2 items-center mb-4 bg-black text-white w-fit mx-auto py-1 px-1.5 sm:text-sm text-xs rounded-md cursor-pointer"
        >
          <span className="bg-blue-500 px-1 rounded-sm">NEW</span> Secure your
          website with CyberShield
        </TimelineContent>

        <TimelineContent
          as="h1"
          animationNum={3}
          timelineRef={heroRef}
          customVariants={scaleVariants}
          className="2xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-900 mb-6 capitalize"
        >
          Free Cybersecurity & IT Help for
          <br />
          <span className="pt-3 inline-block 2xl:text-8xl sm:text-7xl text-5xl">
            <span className="bg-gradient-to-b from-black to-black/40 bg-clip-text text-transparent">
              Students and Small{" "}
            </span>
            <TimelineContent
              as="span"
              animationNum={4}
              timelineRef={heroRef}
              customVariants={scaleVariants}
              className="text-blue-500 text-shadow capitalize bg-blue-500/20 backdrop-blur-md rounded-xl border-2 border-blue-300 px-2 inline-block"
            >
              Businesses
            </TimelineContent>
          </span>
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={5}
          timelineRef={heroRef}
          customVariants={revealVariants}
          className="2xl:max-w-3xl max-w-2xl mx-auto 2xl:text-lg sm:text-base text-sm"
        >
          Rapid fixes, deep expertise. CyberShield serves students, entrepreneurs,
          and organizations with tailored cybersecurity and IT solutions.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={6}
          timelineRef={heroRef}
          customVariants={scaleVariants}
          className="flex gap-2 mt-5 mx-auto w-fit"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-white bg-gradient-to-t from-blue-500 to-blue-400 shadow-md shadow-blue-500 border border-blue-500 px-4 py-2 rounded-lg flex items-center gap-2">
              <Sparkles size={20} />
              Get started
            </button>
            <button className="bg-neutral-100 border border-neutral-200 text-black p-2 rounded-lg flex items-center gap-2 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)]">
              <a href="/services">Explore Services</a>
            </button>
          </div>
        </TimelineContent>
      </TimelineContent>
    </section>
  );
}

export default OrganizationHero;
