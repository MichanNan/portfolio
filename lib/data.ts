import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import knittogether from "@/public/knittogether.png";
import foodOrder from "@/public/food-order.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Knittogether",
    description:
      "Knittogether is an app for recording and sharing knitting projects. Knittiers can create their own accounts to record their knitting projects, yarn and needle inventory. They can search for patterns through Ravelry API. Even more exciting is that knitters can share their projects to the community and also explore projects shared by other knitters.",
    tags: ["React", "Next.js", "MongoDB", "TaiStyled Components", "Node.js"],
    imageUrl: knittogether,
  },
  {
    title: "Food-order",
    description:
      "Developed and implemented an online ordering system with React and Firebase for small businesses. Used various React Hooks such as useState, useEffect, useRef, useContext, and useReducer. Connected to Firebase to store data.",
    tags: ["React", "Reacthooks", "firebase"],
    imageUrl: foodOrder,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
