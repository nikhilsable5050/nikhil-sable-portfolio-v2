"use client";

import {
  FiGithub,
  FiExternalLink,
  FiCpu,
  FiWifi,
  FiLayers,
} from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
import {
  BrutalSection,
  SectionHeader,
  BrutalCard,
  BrutalBadge,
  BrutalButton,
  cn,
} from "./ui/BrutalUI";

const TABS = [
  { id: "all", label: "All", icon: FiLayers },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "ai", label: "AI" },
  { id: "java", label: "Java" },
];

const projects = [
    {
    id: "ecommerce-platform",
    title: "Nexus Retail Ecommerce Platform – Full Stack App",
    description:
      "Nexus Retail is a modern full-stack e-commerce platform that enables users to browse products, manage carts, and place orders through a responsive and intuitive shopping experience.",
    technologies: [
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "React.js",
    ],
    image: "/nexus.png",
    githubLink:
      "https://github.com/nikhilsable5050/nexus-retail",
    categories: ["fullstack"],
    featured: true,
    cardColor: "#FFF8ED",
  },
  {
    id: "book-management-system",
    title: "Book Management System – Full Stack App",
    description:
      "Full-stack application built with Spring Boot and React, providing CRUD operations for managing books through REST APIs.",
    technologies: [
      "Spring Boot",
      "REST API",
      "Spring Data JPA",
      "PostgreSQL",
      "React.js",
    ],
    image: "/booksys.png",
    githubLink:
      "https://github.com/nikhilsable5050/book-application",
    demoLink:
      "https://book-management-system-nikhil.netlify.app/",
    categories: ["fullstack"],
    cardColor: "#FFF8ED",
  },
  {
    id: "pizza-bill-generator",
    title: "Pizza Bill Generator – Java OOP Project",
    description:
      "Java console application demonstrating object-oriented programming concepts such as inheritance, encapsulation, and polymorphism.",
    technologies: ["Java", "OOP"],
    image: "/pizzagen.png",
    githubLink:
      "https://github.com/nikhilsable5050/pizza-bill-generator",
    categories: ["java", "backend"],
    cardColor: "#F0F5FF",
  },
  {
    id: "spring-boot-todo-app",
    title: "Spring Boot Todo List",
    description:
      "Backend-driven Todo application with CRUD operations and database persistence using Spring Boot and JPA.",
    technologies: [
      "Spring Boot",
      "Thymeleaf",
      "Bootstrap",
      "PostgreSQL",
    ],
    image: "/thumbnail1.jpg",
    githubLink:
      "https://github.com/nikhilsable5050/spring-boot-todo-app",
    demoLink:
      "https://spring-boot-todo-app-mynq.onrender.com/",
    categories: ["backend"],
    cardColor: "#F5F0FA",
  },
  {
    id: "weather-service-api",
    title: "Weather Service API",
    description:
      "Production-ready Spring Boot backend application with JWT and Google OAuth2 authentication, role-based authorization, caching, and external weather API integration.",
    technologies: [
      "Spring Boot",
      "Spring Security",
      "JWT",
      "OAuth2",
      "MySQL",
      "Redis",
      "Swagger",
    ],
    image: "/weatherproject.png",
    githubLink:
      "https://github.com/nikhilsable5050/weather-service",
    categories: ["backend"],
    cardColor: "#FAF0EE",
  },
  {
    id: "ai-background-remover",
    title: "AI Background Remover",
    description:
      "Full-stack SaaS application for AI-based image background removal with authentication and API integration.",
    technologies: [
      "Spring Boot",
      "React.js",
      "Tailwind CSS",
      "MySQL",
      "Full Stack",
    ],
    image: "/thumbnail2.jpg",
    githubLink:
      "https://github.com/nikhilsable5050/ai-bg-removal-saas",
    categories: ["fullstack", "ai"],
    cardColor: "#F0FAF4",
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    description:
      "Student management application with authentication, CRUD operations, pagination, and validation built using Spring Boot, Thymeleaf, and MySQL.",
    technologies: [
      "Spring Boot",
      "Spring Security",
      "Thymeleaf",
      "MySQL",
      "Spring Data JPA",
    ],
    image: "/sms.png",
    githubLink:
      "https://github.com/nikhilsable5050/student-management-system-springboot",
    categories: ["fullstack"],
    cardColor: "#EEF4FF",
  },
  {
    id: "ghibli-ai-art-generator",
    title: "Ghibli AI Art Generator",
    description:
      "Full-stack AI art generator with image upload, AI processing, and secure backend integration.",
    technologies: [
      "React.js",
      "Spring Boot",
      "Spring Security",
      "Feign Client",
      "MySQL",
      "Stability AI API",
    ],
    image: "/ghibli.png",
    githubLink:
      "https://github.com/nikhilsable5050/ghibli-ai-art-generator",
    categories: ["fullstack", "ai"],
    cardColor: "#FFF7E6",
  },
  {
    id: "portfolio-v2",
    title: "Personal Portfolio Website V2",
    description:
      "Modern portfolio website built with Next.js, React.js, Tailwind CSS, and Framer Motion with smooth animations.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/v2.png",
    githubLink:
      "https://github.com/nikhilsable5050/nikhil-sable-portfolio-v2",
    demoLink:
      "https://nikhil-sable-portfolio-v2.vercel.app/",
      categories: ["frontend"],
      cardColor: "#FFF8ED",
  },
  {
    id: "bank-customer-api",
    title: "Bank Customer Management API",
    description:
      "A RESTful backend application built with Spring Boot and H2 Database that provides complete CRUD operations for managing bank customers.",
    technologies: [
      "Java",
      "Spring Boot",
      "H2 Database",
    ],
    image: "/bank.png",
    githubLink:
      "https://github.com/nikhilsable5050/bank-customer-api",
    categories: ["backend"],
    cardColor: "#F3F8FF",
  },
    {
    id: "job-app",
    title: "Job Application Tracker",
    description:
      "A simple Spring Boot application that allows users to add and view job posts using in-memory storage with ArrayList.",
    technologies: [
      "Java",
      "Spring Boot",
      "JSP",
      "Maven",
    ],
    image: "/job.png",
    githubLink:
      "https://github.com/nikhilsable5050/job-app-portal",
    categories: ["fullstack"],
    cardColor: "#F3F8FF",
  },
      {
    id: "money-manager",
    title: "Money Manager",
    description:
      "Secure expense management application with user authentication, transaction tracking, and interactive financial dashboards.",
    technologies: [
      "Java",
      "Spring Boot",
      "JSP",
      "Maven",
    ],
    image: "/money.png",
    githubLink:
      "https://github.com/nikhilsable5050/money-manager",
    categories: ["fullstack"],
    cardColor: "#F3F8FF",
  },
];

function matchesTab(project, tab) {
  if (tab === "all") return true;
  return project.categories?.includes(tab);
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedProject, setExpandedProject] = useState(null);

  const filtered = projects.filter((project) =>
    matchesTab(project, activeTab)
  );

  return (
    <BrutalSection id="projects" bg="#F5F2F0">
      <SectionHeader
        eyebrow="Portfolio"
        title="Featured Projects"
        subtitle="A collection of projects built during my journey into backend and full-stack development."
        accent="#C08B3E"
      />

      {/* Filter Tabs */}
      <div
        className="mb-10 flex flex-nowrap gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center"
        role="tablist"
        aria-label="Project categories"
      >
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={activeTab === id}
            onClick={() => setActiveTab(id)}
            className={cn(
              "font-display inline-flex items-center gap-1.5 rounded-xl brutal-border px-4 py-2 text-sm font-extrabold transition-transform brutal-hover brutal-active whitespace-nowrap shrink-0",
              activeTab === id
                ? "bg-[#F0EBE0] brutal-shadow -translate-y-0.5"
                : "bg-white"
            )}
          >
            {Icon && <Icon className="h-4 w-4" />}
            {label}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            expanded={expandedProject === project.id}
            onToggle={() =>
              setExpandedProject(
                expandedProject === project.id ? null : project.id
              )
            }
          />
        ))}
      </div>
    </BrutalSection>
  );
}

function ProjectCard({ project, expanded, onToggle }) {
  const isExternal =
    typeof project.image === "string" &&
    project.image.startsWith("http");

  return (
    <BrutalCard
      bg={project.cardColor}
      className={cn(
        "overflow-hidden",
        project.featured && "lg:col-span-2"
      )}
    >
      <div
        className={cn(
          "flex flex-col",
          project.featured && "lg:flex-row"
        )}
      >
        {/* Project Image */}
        <div
          className={cn(
            "relative h-44 shrink-0 overflow-hidden brutal-border border-x-0 border-t-0 sm:h-48",
            project.featured &&
              "lg:h-auto lg:min-h-[220px] lg:w-2/5 lg:border-b-0 lg:border-r-[2.5px]"
          )}
        >
          {isExternal ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          )}
        </div>

        {/* Project Content */}
        <div
          className={cn(
            "flex flex-1 flex-col p-5 sm:p-6",
            project.featured && "lg:w-3/5"
          )}
        >
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h3 className="font-display text-xl font-extrabold">
              {project.title}
            </h3>

            {project.categories?.length > 1 && (
              <BrutalBadge color="#E0E8F0">
                Multi-Category
              </BrutalBadge>
            )}
          </div>

          <div className="mb-3 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <BrutalBadge key={tech} color="#ffffff">
                {tech}
              </BrutalBadge>
            ))}
          </div>

          <p
            className={cn(
              "mb-3 flex-1 text-sm font-semibold leading-relaxed",
              !expanded && "line-clamp-3"
            )}
          >
            {project.description}
          </p>

          <button
            type="button"
            onClick={onToggle}
            className="font-display mb-4 w-fit text-sm font-extrabold underline decoration-2 underline-offset-2 hover:text-[#C08B3E]"
          >
            {expanded ? "Show less" : "Read more"}
          </button>

          {/* Buttons */}
          <div className="mt-auto flex flex-wrap gap-2">
            <BrutalButton
              href={project.githubLink}
              external
              variant="secondary"
              className="!px-3 !py-2 text-xs"
            >
              <FiGithub className="shrink-0" />
              Code
            </BrutalButton>

            {project.demoLink && (
              <BrutalButton
                href={project.demoLink}
                external
                variant="primary"
                className="!px-3 !py-2 text-xs"
              >
                <FiExternalLink className="shrink-0" />
                Live Demo
              </BrutalButton>
            )}

            {project.architectureLink && (
              <BrutalButton
                href={project.architectureLink}
                external
                variant="secondary"
                className="!px-3 !py-2 text-xs"
              >
                <FiCpu className="shrink-0" />
                Architecture
              </BrutalButton>
            )}
          </div>
        </div>
      </div>
    </BrutalCard>
  );
}