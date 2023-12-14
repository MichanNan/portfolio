import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";

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
    title: "Manager Assistant",
    location: "Hamburg Germany",
    description: "Creating an online shop through Alibaba.",
    icon: React.createElement(MdOutlineShoppingCart),
    date: "10.2014 - 09.2019",
  },
  {
    title: "Stay at Home Mom",
    location: "Hamburg, Germany",
    description:
      "Learned JavaScript basics through online courses on Udemy and FreeCodeCamp during parental leave.",
    icon: React.createElement(IoHomeOutline),
    date: "10.2014 - 09.2019",
  },
  {
    title: "Trainee Web Development",
    location: "neue fische - School and Pool for Digital Talent",
    description:
      "540 hours of programming practice with the independent development of a web app as a thesis",
    icon: React.createElement(LuGraduationCap),
    date: "04.2023 - 07.2023",
  },
  {
    title: "Orientation and Application Phase for Starting a Career.",
    location: "Hamburg Germany",
    description:
      "During this period, I have been consistently learning on Udemy, learning new tech stack such as TypeScript, Express, Tailwind, and more.",
    icon: React.createElement(IoSearch),
    date: "08.2023 - present",
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
