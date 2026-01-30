"use client";

import { useState } from "react";

import Container from "@/components/containers";

import Projects from "@/components/projects";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";


import Skills from "@/components/skills";
import GetInTouch from "@/components/get-in-touch";

export default function Home() {

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      action: () => window.open("https://github.com/Partha-png", "_blank"),
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      action: () => window.open("https://www.linkedin.com/in/partha-dash-0500b2323/", "_blank"),
    },
    {
      name: "X",
      icon: Twitter,
      action: () => window.open("https://x.com/Paarth_h", "_blank"),
    },
    {
      name: "Email",
      icon: Mail,
      action: () => (window.location.href = "mailto:dashpartha455@gmail.com"),
    },
  ];

  return (
    <div className="relative flex min-h-screen justify-center font-sans overflow-hidden">
      <Container className="min-h-screen px-8 pt-24 md:p-20 md:pb-10 mx-auto ">

        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-neutral-100/30 dark:from-neutral-900/30 to-transparent pointer-events-none"></div>

        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-neutral-100/30 dark:from-neutral-900/30 to-transparent pointer-events-none"></div>

        {/* ---------------------------------------- */}
        {/* HEADING + SOCIALS (FIXED SAME LINE) */}
        {/* ---------------------------------------- */}

        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl md:text-3xl font-bold font-custom tracking-tight text-neutral-900 dark:text-neutral-50">
            <span className="link--elara">Parth</span>
          </h1>

          <div className="flex flex-wrap gap-4 sm:justify-end">
            {socials.map((social) => (
              <div
                key={social.name}
                className="relative cursor-alias group"
                onClick={social.action}
              >
                <social.icon
                  size={20}
                  className="text-neutral-900 dark:text-neutral-50 opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------------------------- */}
        {/* SUBTEXT */}
        {/* ---------------------------------------- */}

        <div className="text-secondary font-custom2 text-s mt-1">
          <p>
            <span className="text-neutral-950 dark:text-neutral-100 font-semibold font-custom">⚀ </span>
            <span className="text-neutral-700 dark:text-neutral-300">i code stuff & sometimes it even works lol</span>
          </p>

          <p>
            <span className="text-neutral-950 dark:text-neutral-100 font-semibold">⚁ </span>
            <span className="text-neutral-700 dark:text-neutral-300">ai enthusiast | professional debugger | coffee addict</span>
          </p>

          <p>
            <span className="text-neutral-950 dark:text-neutral-100 font-semibold">⚂ </span>
            <span className="text-neutral-700 dark:text-neutral-300">
              building cool things one commit at a time ✨
            </span>
          </p>
        </div>

        <div className="hidden md:block absolute right-6 w-[53rem] h-px bg-(--pattern-fg) my-3 opacity-90 dark:opacity-15"></div>



        <Projects />



        <Skills />
        <br></br>
        <div className="hidden md:block absolute right-6 w-[53rem] h-px bg-(--pattern-fg) opacity-90 dark:opacity-15 "></div>

        <GetInTouch />


      </Container>
    </div>
  );
}