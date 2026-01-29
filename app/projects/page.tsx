"use client";

import Container from "@/components/containers";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <Container className="min-h-[200vh] px-8 pt-24 md:p-20 md:pb-10 mx-auto">

      {/* RIGHT BORDER */}
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-neutral-100/30 dark:from-neutral-900/30 to-transparent pointer-events-none"></div>

      {/* LEFT BORDER */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-neutral-100/30 dark:from-neutral-900/30 to-transparent pointer-events-none"></div>

      <h1 className="text-neutral-900 dark:text-neutral-50 font-custom font-semibold text-3xl tracking-tight ">
        <span className="link--elara">Projects</span>
      </h1>

      <p className="tracking-tight font-custom2 text-neutral-600 dark:text-neutral-400 max-w-lg text-sm md:text-base mt-4">
        hey! here's a bunch of things i made when i should've been sleeping. enjoy :)
      </p>

      <div className="hidden md:block absolute right-6 w-212 h-px bg-(--pattern-fg) my-3 opacity-90 dark:opacity-15"></div>

      <Projects showAll={true}></Projects>

    </Container>
  )
}