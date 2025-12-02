"use client";
import { Card, CardContent, CardHeader } from "../ui/card";
import { TimelineContent } from "../ui/timeline-animations";
import VerticalCutReveal from "../ui/vertical-cut-reveal";
import { Sparkles } from "lucide-react";
import { useRef } from "react";

export default function ServicesSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
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

  const itSupportFeatures = [
    "Software troubleshooting and quick fixes",
    "Virus scans and malware removal",
    "Operating system installation & upgrades",
    "Hardware diagnostics and repair guidance",
    "Network setup and basic WiFi/router help",
    "User account management and recovery",
  ];
  
  const penetrationTestingFeatures = [
    "Free introductory demo sessions",
    "Vulnerability scanning (web & system)",
    "Detailed security assessment reports",
    "Guidance to fix identified risks",
    "Custom testing for apps and sites",
    "Consultation for secure implementation",
  ];
  
  const bugBountyFeatures = [
    "Beginner-friendly bug bounty guidance",
    "Tips for safe and responsible disclosure",
    "Support for setting up organization programs",
    "Expert triage and assessment help",
    "Managed bug bounty program administration",
    "Transparent communication with researchers",
  ];
  
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

  return (
    <>
    <section
      className="py-16 px-4 bg-white relative min-h-screen"
      ref={pricingRef}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_40%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
      <div className="max-w-6xl mx-auto">
        <article className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-center"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0, // First element
              }}
            >
              Explore Our Services
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            as="p"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="text-gray-600"
          >
            Get started today, no credit card required
          </TimelineContent>
        </article>

        <div className="grid md:grid-cols-3 gap-8 items-end">
          {/* Basic Plan */}
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card className="bg-white p-0 h-fit border-neutral-200">
              <CardHeader className="text-left py-4 border-b bg-gray-100 border-neutral-300 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">IT Support</h3>
                {/* <div className="flex justify-start items-end">
                  <span className="text-4xl font-semibold text-gray-900">
                    $16
                  </span>
                  <span className="text-gray-600">/user</span>
                </div> */}
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="space-y-3 mb-6">
                  {itSupportFeatures.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full p-3 rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600 text-white hover:bg-indigo-700">
                ✨Get Started
                </button>
              </CardContent>
            </Card>
          </TimelineContent>

          {/* Professional Plan */}
          <TimelineContent
            as="div"
            animationNum={2}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card className="bg-indigo-700 p-0 rounded-lg shadow-lg relative h-fit border-neutral-200">
              <CardHeader className="pb-6 bg-indigo-600 rounded-t-lg py-6">
                <div className="flex gap-2 justify-between">
                  <h3 className="text-xl  font-bold text-white mb-4">Bug Bounty Programs</h3>
                  <span className="text-white/60 px-2 py-1 text-xs">
                    Popular
                  </span>
                </div>
                {/* <div className="w-full justify-start flex items-end">
                  <span className="text-4xl font-semibold text-white">$24</span>
                  <span className="text-purple-100">/month</span>
                </div> */}
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="space-y-3 mb-6">
                  {penetrationTestingFeatures.map((feature, index) => (
                    <li key={index} className="text-sm text-white">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full p-3 border border-gray-800 shadow-lg shadow-black font-semibold  rounded-xl bg-black text-white hover:bg-gray-800">
                ✨Get Started
                </button>
              </CardContent>
            </Card>
          </TimelineContent>

          {/* Enterprise Plan */}
          <TimelineContent
            as="div"
            animationNum={3}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card className="bg-white p-0 border-neutral-200">
              <CardHeader className="text-left py-4 border-b bg-gray-100 rounded-xl border-neutral-300">
                <h3 className="text-xl  font-bold text-gray-900 mb-4">Penetration Testing</h3>
                {/* <div className="flex justify-start items-end">
                  <span className="text-4xl font-semibold text-gray-900">
                    $40
                  </span>
                  <span className="text-gray-600">/user</span>
                </div> */}
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="space-y-3 mb-6">
                  {bugBountyFeatures.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full p-3 rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600 text-white hover:bg-indigo-700">
                ✨Get Started
                </button>
              </CardContent>
            </Card>
          </TimelineContent>

        </div>
      </div>
    </section>
    <section>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-999">
            <TimelineContent
                as="button"
                animationNum={1}
                customVariants={revealVariants3}
                timelineRef={heroRef}
                className="bg-blue-600 hover:bg-blue-600 shadow-lg shadow-blue-600 border border-blue-600 flex w-fit mx-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-white px-5 py-3 rounded-full cursor-pointer"
              >
              <a href="/services">Explore Our Services</a>
          </TimelineContent>
      </div>
    </section>
    </>
  );
}
