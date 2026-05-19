"use client";

import {
  FiCode,
  FiBriefcase,
  FiServer,
  FiGlobe,
} from "react-icons/fi";
import { motion } from "framer-motion";
import {
  BrutalSection,
  SectionHeader,
  BrutalCard,
  BrutalButton,
} from "./ui/BrutalUI";

const experiences = [
  {
    title: "Data Structures & Algorithms (Java)",
    company: "GitHub-Based Learning",
    period: "2024 - Present",
    icon: FiCode,
    color: "#FFF8ED",
    iconBg: "#C08B3E",
    highlights: [
      "Practiced Data Structures and Algorithms using Java.",
      "Solved problems related to arrays, strings, recursion, collections, and problem-solving patterns.",
      "Focused on writing optimized and readable code.",
      "Maintained consistent GitHub commits to track progress.",
    ],
    link: {
      text: "View DSA Repository →",
      url: "https://github.com/nikhilsable5050/DSA-Practice",
    },
  },
  {
    title: "Full Stack Web Development Intern",
    company: "InternPe (Virtual Internship)",
    period: "Feb 2025",
    icon: FiBriefcase,
    color: "#F0F5FF",
    iconBg: "#6A80B8",
    highlights: [
      "Completed a virtual internship in Full Stack Web Development.",
      "Worked on building web applications using frontend and backend technologies.",
      "Gained hands-on experience in debugging and real-world development workflows.",
    ],
  },
  {
    title: "Backend Developer – Java & Spring Boot",
    company: "Spring Boot Development",
    period: "2025 - Present",
    icon: FiServer,
    color: "#EAF7F0",
    iconBg: "#4A9B5A",
    highlights: [
      "Built secure backend applications using Java and Spring Boot.",
      "Developed RESTful APIs with layered architecture.",
      "Integrated MySQL and MongoDB using Spring Data.",
      "Implemented Spring Security, JWT, and OAuth2 authentication.",
    ],
    link: {
      text: "View Code →",
      url: "https://github.com/nikhilsable5050/spring-boot-insights",
    },
  },
 {
  title: "Personal Portfolio Website",
  company: "Spring Boot + Thymeleaf",
  period: "2026",
  icon: FiGlobe,
  color: "#F5F0FA",
  iconBg: "#8A74C0",
  highlights: [
    "Built a responsive personal portfolio website using Spring Boot and Thymeleaf.",
    "Implemented reusable Thymeleaf fragments for modular and maintainable UI components.",
    "Showcased projects, technical skills, and practical experience in a structured layout.",
    "Designed a clean and professional interface optimized for desktop and mobile devices.",
  ],
  link: {
    text: "View Portfolio Code →",
    url: "https://github.com/nikhilsable5050/nikhil-sable-portfolio",
  },
},
{
  title: "Personal Portfolio Website V2",
  company: "Next.js + React.js + Tailwind CSS",
  period: "2026",
  icon: FiGlobe,
  color: "#F0F7FF",
  iconBg: "#4A6CF7",
  highlights: [
    "Developed a modern portfolio website using Next.js, React.js, and Tailwind CSS.",
    "Added smooth scroll-based animations using Framer Motion for an interactive experience.",
    "Implemented reusable components and centralized data management for easy content updates.",
    "Optimized performance, responsiveness, and SEO to create a recruiter-friendly portfolio.",
  ],
  link: {
    text: "View Portfolio V2 Code →",
    url: "https://github.com/nikhilsable5050/nikhil-sable-portfolio-v2",
  },
},
];

export default function ExperienceSection() {
  return (
    <BrutalSection id="experience" bg="#F2F1F6">
      <SectionHeader
        eyebrow="Experience"
        title="Practical Experience"
        subtitle="Hands-on experience through self-driven projects and consistent coding practice"
        accent="#8A74C0"
      />

      <ul className="mx-auto max-w-4xl space-y-8">
        {experiences.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.li
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <BrutalCard bg={item.color} className="p-5 sm:p-6">
                {/* Top Section: Icon + Period */}
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl brutal-border brutal-shadow-sm text-white"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>

                  <span className="font-display rounded-full brutal-border bg-white px-3 py-1 text-xs font-extrabold">
                    {item.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-extrabold leading-tight">
                  {item.title}
                </h3>

                {/* Company */}
                <p className="mt-2 text-sm font-bold text-[#2D2D2D]/65">
                  {item.company}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-2.5">
                  {item.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm font-semibold leading-relaxed"
                    >
                      <span className="mt-1 shrink-0 text-[#C08B3E] text-base leading-none">
                        ●
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Optional Link */}
                {item.link && (
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-display text-sm font-extrabold underline underline-offset-4 hover:opacity-80"
                  >
                    {item.link.text}
                  </a>
                )}
              </BrutalCard>
            </motion.li>
          );
        })}
      </ul>

      <div className="mt-12 text-center">
        <BrutalButton
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          variant="primary"
        >
          Get in Touch →
        </BrutalButton>
      </div>
    </BrutalSection>
  );
}