"use client";
import { TimelineContent } from "../ui/timeline-animations";
import VerticalCutReveal from "../ui/vertical-cut-reveal";
import Founder from "../../assests/Team-photos/Founder.png"
import { PhotoCard } from "./SVGClipPath";
import { ArrowRight, Target, Users, Shield, Zap, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

export default function AboutSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };

  const revealVariants3 = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  const founder = [
    "Certified Cybersecurity specialist (ISC2 CC)",
    "Passionate bug bounty hunter",
    "Skilled in Java, Linux, and networking"
  ]

  const coreValues = [
    {
      icon: Users,
      title: "Work directly with clients",
      description: "No sales layers, just genuine collaboration"
    },
    {
      icon: Zap,
      title: "Move fast and fix real problems",
      description: "Agile solutions without bureaucracy"
    },
    {
      icon: Shield,
      title: "Affordable services",
      description: "Quality work without cutting corners"
    }
  ];

  const approach = [
    {
      step: "01",
      title: "Understand the problem clearly",
      description: "We take time to comprehend your unique challenges"
    },
    {
      step: "02",
      title: "Solve it using proven technology",
      description: "Practical, battle-tested solutions that work"
    },
    {
      step: "03",
      title: "Secure it for the long term",
      description: "Prevention is better than cure - built secure from day one"
    }
  ];

  return (
    <section
      className="relative py-32 px-4 bg-gray-50"
      ref={heroRef}
    >
      {/* Background Effects */}
      <TimelineContent
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff00 40%, #13131300 100%)
          `,
          backgroundSize: "100% 100%",
        }}
        animationNum={2}
        customVariants={revealVariants3}
        timelineRef={heroRef}
      />
      <TimelineContent
        className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#a3a3a32e_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a32e_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_110%)]"
        animationNum={3}
        customVariants={revealVariants3}
        timelineRef={heroRef}
      />

      {/* Hero Section */}
      <div className="relative z-10 max-w-2xl mx-auto mb-20">
        <div className="text-blue-600 text-lg font-semibold uppercase mb-6 flex items-center justify-center gap-2">
          About Us
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.2}
            staggerFrom="last"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 30,
              delay: 0.2,
            }}
            containerClassName="text-[#00000] leading-[120%] text-center justify-center items-center"
          >
            Good IT and Cybersecurity Should Not Be Complicated
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          customVariants={revealVariants}
          timelineRef={heroRef}
          className="text-gray-700 text-center sm:text-lg text-base mb-8 leading-relaxed"
        >
          Abhaya IT Solutions was started with a simple belief: good IT and cybersecurity should not be complicated,
          overpriced, or out of reach.
        </TimelineContent>

        <TimelineContent
          as="button"
          animationNum={1}
          customVariants={revealVariants3}
          timelineRef={heroRef}
          className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/50 border border-blue-600 flex w-fit mx-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-full cursor-pointer"
        >
          <a href="/services">Explore Our Services</a> <ArrowRight className="" />
        </TimelineContent>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Who We Are Section */}
        <TimelineContent
          animationNum={2}
          customVariants={revealVariants}
          timelineRef={heroRef}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200 hover:shadow-2xl transition-shadow duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Who We Are</h3>
            </div>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                We are a <span className="font-semibold text-gray-900">small, focused technology team based in India</span>,
                working with students, startups, and small businesses who need reliable IT support, secure systems,
                and practical web solutions — not bloated contracts or unnecessary complexity.
              </p>
              <p>
                Our work sits at the <span className="font-semibold text-gray-900">intersection of IT support, web development,
                  and cybersecurity</span>. That means we don't just build or fix systems — we think about how they break,
                how they get attacked, and how they should be secured from day one.
              </p>
              <p className="italic text-gray-600">
                We don't claim to be a large enterprise consultancy. We are intentionally lean.
              </p>
            </div>
          </div>
        </TimelineContent>

        {/* Core Values Grid */}
        <TimelineContent
          animationNum={3}
          customVariants={revealVariants}
          timelineRef={heroRef}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Why We Stay Lean
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </TimelineContent>

        {/* Approach Section */}
        <TimelineContent
          animationNum={4}
          customVariants={revealVariants}
          timelineRef={heroRef}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
              Our Approach
            </h3>
            <div className="space-y-6">
              {approach.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start group hover:bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </TimelineContent>

        {/* Philosophy Section */}
        <TimelineContent
          animationNum={5}
          customVariants={revealVariants}
          timelineRef={heroRef}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder Card */}
            <div className="h-full">
              <PhotoCard Title="Founder" 
              href="/contact"
              imageurl={Founder.src}
              Name = "Mayur Sapkale" >
          
                  <ul className="list-disc space-y-3 mb-6 m-4 overflow-hidden">
                    {founder.map((skill, index) => (
                      <li key={index} className="text-sm text-gray-900">
                        {skill}
                      </li>
                    ))}
                  </ul>
                
              </PhotoCard>
            </div>

            {/* Our Philosophy */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-500 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Philosophy</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    <span className="font-semibold text-gray-900">Clarity over jargon</span> — we explain things in plain language
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    <span className="font-semibold text-gray-900">Security over shortcuts</span> — we build things the right way
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    <span className="font-semibold text-gray-900">Long-term reliability over flashy demos</span> — solutions that last
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TimelineContent>

        {/* Closing Statement */}
        <TimelineContent
          animationNum={6}
          customVariants={revealVariants}
          timelineRef={heroRef}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 to-blue-500 rounded-3xl shadow-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              We Exist For Exactly This
            </h3>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              If you're looking for <span className="font-semibold text-white">honest technical help</span>,
              <span className="font-semibold text-white"> clear communication</span>, and
              <span className="font-semibold text-white"> solutions that actually work in the real world</span>,
              Abhaya IT Solutions exists for exactly that.
            </p>
            <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <a href="/#contact" className="flex items-center gap-2">
                Get in Touch <ArrowRight className="w-5 h-5" />
              </a>
            </button>
          </div>
        </TimelineContent>

      </div>
    </section>
  );
}
