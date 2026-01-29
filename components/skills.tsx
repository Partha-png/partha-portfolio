"use client";

import React from "react";
import {
    SiPython,
    SiPytorch,
    SiTensorflow,
    SiScikitlearn,
    SiLangchain,
    SiPostgresql,
    SiRedis,
    SiStreamlit,
    SiJupyter,
    SiGit,
    SiGithub,
    SiCplusplus,
} from "react-icons/si";
import { FaDatabase, FaBrain } from "react-icons/fa";

const skills = [
    { name: "Python", icon: SiPython },
    { name: "C++", icon: SiCplusplus },
    { name: "PyTorch", icon: SiPytorch },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "LangChain", icon: SiLangchain },
    { name: "NLP", icon: FaBrain },
    { name: "Deep Learning", icon: FaBrain },
    { name: "Generative AI", icon: FaBrain },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Redis", icon: SiRedis },
    { name: "SQL", icon: FaDatabase },
    { name: "Streamlit", icon: SiStreamlit },
    { name: "Jupyter", icon: SiJupyter },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
];

export default function Skills() {
    return (
        <div className="w-full mt-4 relative">
            <div className="flex flex-col items-start space-y-3">
                <h1 className="text-3xl md:text-3xl font-bold font-custom tracking-tight text-neutral-900 dark:text-neutral-50">
                    <span className="link--elara">Skills</span>
                </h1>

                <p className="tracking-tight font-custom2 text-neutral-600 dark:text-neutral-400 max-w-lg text-sm md:text-base mb-6">
                    tech stack that powers my ml/ai projects
                </p>

                <div className="flex flex-wrap items-center gap-2">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/50 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors cursor-default"
                        >
                            <skill.icon className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
                            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-200">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
