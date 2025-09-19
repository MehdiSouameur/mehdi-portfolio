"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import SkillBadge from "./components/SkillBadge";
import SkillBadgeLarge from "./components/SkillBadgeLarge";
import AnimatedSection from "./components/AnimatedSection";
import Navbar from "./components/Navbar";


const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 👈 each child delayed by 0.5s
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: {duration: 1, ease: easeOut}},
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  // Cancel preserving position after refresh
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Detect first screen scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Nav */}

      <Navbar>
      </Navbar>

      {/* Main Section */}
      <main className="lex-grow flex flex-col items-center pt-10 text-white mt-20 w-full max-w-screen overflow-x-hidden px-4 overflow-x-hidden">

        {/* Hero Section */}
        <h1 className="text-white text-4xl font-bold text-center animate-fadeIn">Hi I'm <span className="text-[#20E9FF]">Mehdi</span> <br></br>
        Welcome to my developer portfolio</h1>
        <div className="w-[80%] md:w-[50%]">
          <p className="text-white text-center animate-fadeIn pt-2">Former Systems Engineer, enthusiastic backend engineer and part time web designer.</p>
        </div>


        {/* Features Section */}
        <AnimatedSection className="text-center mt-70">
          <h1 id="projects" className="text-white text-4xl font-bold text-center">
            Featured Projects
          </h1>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center w-[80%] md:w-[50%]">
          <p className="text-white pt-2 text-center">
            A selection of projects from my professional experience and personal work.
          </p>
        </AnimatedSection>
        
        <AnimatedSection className="flex flex-col md:flex-row pt-15 px-5 w-[100%] justify-center items-center md:items-stretch">

            <ProjectCard
              title="DDM Web application"
              description="Document Distribution Matrix web application to facilitate workflow for engineers at my previous role in an oil and gas company"
              imageUrl="/ddm_screenshot.png"
              skills={["C#", "ASP.Net", "Javascript"]}
            />

            <ProjectCard
              title="Sharkpedia"
              description="A small shark encyclopedia website with the ability to create new articles with a custom content management system built using express.js and ejs"
              imageUrl="/sharkpedia.png"
              link="https://www.youtube.com/"
              skills={["Express.js", "Ejs", "Firebase"]}
            />

            <ProjectCard
              title="Portfolio"
              description="My personal development portfolio built using Next.js and Tailwind"
              imageUrl="/portfolio.png"
              skills={["Next.js", "Tailwind"]}
            />

        </AnimatedSection>

        

        

        {/* Experience Section */}
        <div className="max-w-5xl w-full flex flex-col justify-center items-center mx-auto px-5 md:px-40 text-white mt-50">
          <AnimatedSection>
            <h1 id="experience" className="text-4xl font-bold text-center animate-fadeIn">
              Professional Experience
            </h1>
          </AnimatedSection>

          <AnimatedSection className="py-3 mt-10">
            <h2 className="text-2xl font-bold leading-tight">
              Graduate Systems Engineer - Software Development Focus
            </h2>
            <p className="text-gray-300 leading-tight italic">Wood plc - Reading</p>
            <p className="leading-tight">Sep 2023 - Jul 2025</p>
            <ul className="text-gray-200 mt-1 px-4 list-disc marker:text-sm">
              <li>
                <span className="text-[#20E9FF]">Designed, developed, and deployed C# ASP.Net web applications</span> to improve workflow efficiency,
                including a tool enabling 20+ Engineers to review and track project documents.
              </li>
              <li>
                <span className="text-[#20E9FF]">Trained and deployed an AI model</span> to identify untagged engineering symbols on older complex
                technical drawings, saving engineers hours of manual work.
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection className="py-3 mt-5">
            <h2 className="text-2xl font-bold leading-tight">
              IT Operations Intern (Industrial Year)
            </h2>
            <p className="text-gray-300 leading-tight italic">Urban Science - Reading</p>
            <p className="leading-tight">Jul 2021 - Sep 2022</p>
            <ul className="text-gray-200 mt-1 list-disc px-4 marker:text-sm">
              <li>
                <span className="text-[#20E9FF]">Supported a large-scale migration from on-premise infrastructure to Microsoft Azure,</span> managing
                cloud resources and optimizing configurations as part of the transition.
              </li>
              <li>
                <span className="text-[#20E9FF]">Automated global device and account updates using PowerShell,</span> improving efficiency and consistency.
              </li>
            </ul>
          </AnimatedSection>
        </div>


        {/* About Me Section */}
        <div className="flex flex-col justify-center items-center w-full max-w-5xl mx-auto px-5 md:px-40 text-white mt-50">
          <AnimatedSection>
            <h1 id="about" className="text-4xl font-bold text-center animate-fadeIn">
              About Me
            </h1>
          </AnimatedSection>


          <div className="py-3 mt-10">
            <AnimatedSection>
              <p>
                I'm Mehdi, a <span className="text-[#20E9FF]">Computer Science graduate</span> from the University of Reading
                with <span className="text-[#20E9FF]">2 years of experience as a Systems Engineer.</span> With a strong
                foundation in Software Development and a passion for solving
                problems, I love creating impactful and robust software that make a
                difference.<br></br><br></br>
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <p>
                At my previous role at Wood, I took the initiative to <span className="text-[#20E9FF]">independently
                develop a fully fledged large scale web application using C# .Net</span> to
                streamline processes for the engineers of a large project. <span className="text-[#20E9FF]">I also trained
                and deployed an AI model (Yolov5)</span> to recognise and classify symbols on
                hundreds of large engineering drawings.<br></br><br></br>
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <p>
                I am highly motivated by personal and career growth and always take
                opportunities to get out of my comfort zone and challenge myself.
                Currently I’m expanding my skillset by <span className="text-[#20E9FF]">delving deep into cloud
                engineering,</span> with personal projects and self study. I’m particularly
                interested in systems design as I enjoy piecing together the different
                components to create a full solution. <span className="text-[#20E9FF]">I’m always eager to explore new
                technologies and collaborate with peers to push ideas further.</span>
              </p>
            </AnimatedSection>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col justify-center items-center max-w-5xl w-full mx-auto px-5 md:px-40 text-white mt-50">
          <AnimatedSection>
            <h1 id="skills" className="text-4xl font-bold text-center">Skills</h1>
          </AnimatedSection>
        
          <AnimatedSection className="flex flex-row mt-10 justify-between items-start">

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl md:text-2xl mb-2">Programming</h1>
              <SkillBadgeLarge key={"C#"} name={"C#"} />
              <SkillBadgeLarge key={"C++"} name={"C++"} />
              <SkillBadgeLarge key={"Python"} name={"Python"} />
              <SkillBadgeLarge key={"Node.js"} name={"Node.js"} />
              <SkillBadgeLarge key={"Typescript"} name={"Typescript"} />
              <SkillBadgeLarge key={"SQL"} name={"SQL"} />
              <SkillBadgeLarge key={"OOP"} name={"OOP"} />
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl md:text-2xl mb-2">Cloud</h1>
              <SkillBadgeLarge key={"AWS"} name={"AWS"} />
              <SkillBadgeLarge key={"Google Cloud"} name={"Google Cloud"} />
              <SkillBadgeLarge key={"Azure"} name={"Azure"} />
              <SkillBadgeLarge key={"Systems Design"} name={"Systems Design"} />
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl md:text-2xl mb-2">Front-end</h1>
              <SkillBadgeLarge key={"html/css"} name={"html/css"} />
              <SkillBadgeLarge key={"React"} name={"React"} />
              <SkillBadgeLarge key={"Web Design"} name={"Web Design"} />
              <SkillBadgeLarge key={"Next.js"} name={"Next.js"} />
              <SkillBadgeLarge key={"Tailwind"} name={"Tailwind"} />
            </div>
          </AnimatedSection>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col justify-center items-center max-w-5xl w-full mx-auto px-5 md:px-40 mt-50">
            <AnimatedSection>
              <h1 id="contact" className="text-4xl font-bold text-center animate-fadeIn">Contact</h1>
            </AnimatedSection>

            <AnimatedSection className="flex flex-col md:flex-row w-full mt-10">
              <div className="flex justify-center items-start md:w-[50%] w-full">
                <div className="flex flex-col w-full bg-[#1b1f3f] py-5 px-2 rounded-xl">

                    <div className="flex flex-row items-center-3 mx-3 mt-3">
                        <img src="/phone.svg" alt="Img" className="h-8 w-8" />
                        <div className="flex flex-col ms-2">
                          <p className="leading-3 !font-bold">Phone</p>
                          <p className="text-gray-200">07510325188</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center mx-3 mt-3">
                        <img src="/email.svg" alt="Img" className="h-8 w-8" />
                        <div className="flex flex-col ms-2">
                          <p className="leading-3 !font-bold">Email</p>
                          <p className="text-gray-200">mehdisouameur.ms@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center m-3">
                        <img src="/linkedin.svg" alt="Img" className="h-8 w-8" />
                        <div className="flex flex-col ms-2">
                          <p className="leading-3 !font-bold">LinkedIn</p>
                          <a href="https://uk.linkedin.com/in/mehdi-souameur-76964820a" className="text-gray-200 underline font-light">
                            Mehdi Souameur
                          </a>

                        </div>
                    </div>

                </div>
              </div>
              <div className="pl-1 md:pl-10 flex flex-col md:w-[50%] w-full mt-3 md:mt-0">
                <p className="!font-bold text-xl leading-4">Feel free to drop me an email, give me a call or connect with me on Linked-In</p>
                <p className="!font-bold text-xl text-[#20E9FF] leading-4 mt-5">I am actively looking for a full-time position as a Junior Developer in London (Open also to Paris)</p>
              </div>
            </AnimatedSection>

        </div>

      </main>

      {/* Footer */}
      <footer className="flex flex-col justify-center items-center w-full bg-black pb-8 pt-6 mt-50 text-white overflow-x-hidden">
        <div className="flex flex-row max-w-5xl w-full mx-auto px-10 md:px-40 pt-10">
          <div className="flex flex-col w-[60%] md:w-[50%]">
            <h1 className="text-xl md:text-4xl font-bold text-[#20E9FF]">Mehdi Souameur</h1>
            <p className="leading-tight">Junior Software Engineer with a passion for learning new technologies and solving problems</p>
          </div>

          <div className="flex flex-col w-[50%] pl-10 md:pl-30">
            <h1 className="text-xl md:text-3xl !font-light">Quick Links</h1>
            <a href="#projects" className="text-gray-200 underline font-light">
              Projects
            </a>
            <a href="#experience" className="text-gray-200 underline font-light">
              Experience
            </a>
            <a href="#about" className="text-gray-200 underline font-light">
              About me
            </a>
            <a href="#contact" className="text-gray-200 underline font-light">
              Contact
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

