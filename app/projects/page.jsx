"use client";

import { HoverEffect } from "../../components/ui/card-hover-effect"
import { motion } from "motion/react";
const projects = [
  {
    title: "Interpreter",
    description:
      "A full flege interpreter written in Go for the Batman programming language. It is a stack based Interpreter that can interpret the Batman programming language.",
    link: "https://github.com/batmanboxer/batmanlang",
    language: "Go | Make",
  },
  {
    title: "Chat app",
    description:
      "A chat app built with Jetpack Compose and Firebase. It is chat app that allows users to chat with each other in real time. It is built with Jetpack Compose and Firebase.",
    link: "https://github.com/batmanboxer/charoom",
    language: "Kotlin | Firebase | Gemini",
  },
  {
    title: "Manga Website",
    language: "React | Material UI | Firebase",
    description:
      "A website where you can read all the manga in the world. the data is scraped in runtime and is displayed in the website. It is built with React and Material UI.",
    link: "https://github.com/batmanboxer/manga-website",
  },
  {
    title: "Manga Website Api",
    language: "Node | Express | Puppeteer",
    description:
      "A restful api written in Node and Express that scrapes manga data from the internet and returns it in a json format. It is built with Node and Express. It also provides a proxy to bypass Cors",
    link: "https://github.com/BatmanBoxer/MangaandManhwaApi",
  },
  {
    title: "Manga App",
    language: "Kotlin | Jetpack Compose | Firebase",
    description:
      "A native android app where you can read all the manga in the world. the data is scraped in runtime and is displayed in the app. It is built with Kotlin and Jetpack Compose and Room for local database and firebase for auth.",
    link: "https://github.com/BatmanBoxer/MangaMvvmApp",
  },

];
const Projects = () => {
  return (
    <div className="bg-black h-[100vh]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </motion.div>
    </div>
  )
}

export default Projects
