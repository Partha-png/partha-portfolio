"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Sparkles } from "lucide-react";

export default function AboutMe() {
    const highlights = [
        {
            icon: Code2,
            title: "Full Stack Developer",
            description: "building end-to-end solutions with modern tech stacks",
        },
        {
            icon: Brain,
            title: "AI Enthusiast",
            description: "exploring the intersection of AI and real-world applications",
        },
        {
            icon: Sparkles,
            title: "Problem Solver",
            description: "turning complex challenges into elegant solutions",
        },
    ];

    return (
        <div className="w-full py-8 md:py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl md:text-3xl font-bold font-custom tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
                    About Me
                </h2>

                <div className="space-y-6">
                    <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-custom2">
                        Hey there! I'm a passionate developer with a love for creating
                        innovative solutions that make a difference. My journey in tech
                        started with curiosity and evolved into a deep passion for building
                        things that solve real problems.
                    </p>

                    <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-custom2">
                        I specialize in full-stack development with a keen interest in AI
                        and machine learning. Whether it's crafting intuitive user
                        interfaces or architecting robust backend systems, I'm always
                        excited to take on new challenges.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
                            >
                                <div className="flex flex-col items-start gap-3">
                                    <div className="p-2 rounded-md bg-neutral-900 dark:bg-neutral-100 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="w-5 h-5 text-neutral-50 dark:text-neutral-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1 font-custom">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-custom2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-custom2 mt-6">
                        When I'm not coding, you'll find me exploring new technologies,
                        contributing to open-source projects, or enjoying a good cup of
                        coffee while debugging. Always learning, always building. ☕✨
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
