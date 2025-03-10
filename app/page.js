"use client";
import ChartCard from "@/components/custom/ChartCard";
import CSvg from "@/components/customsvg/csvg";
import GoSvg from "@/components/customsvg/gosvg";
import HtmlSvg from "@/components/customsvg/htmlsvg";
import JavaScriptSvg from "@/components/customsvg/javascriptSvg";
import JavaSvg from "@/components/customsvg/javasvg";
import KotlinSvg from "@/components/customsvg/kotlinsvg";
import ReactSvg from "@/components/customsvg/reactsvg";
import RustSvg from "@/components/customsvg/rustsvg";
import { motion } from "motion/react";

const { BackgroundLines } = require("@/components/ui/background-lines");

function Home() {
  return (
    <BackgroundLines
      svgOptions={{ duration: 5 }}
      className="flex flex-col items-center justify-start bg-black "
    >
      <div className="grid grid-rows-10 grid-cols-3 gap-3 z-10 mt-20 cursor-default">
        <motion.div
          initial={{
            x: -100,
            opacity: -1,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeIn",
            duration: 0.3,
          }}
          className="row-span-3 col-start-1 row-start-1 col-span-2 bg-[#1a1a1a] text-white p-4 rounded-lg w-[550px]"
        >
          <h2 className="font-extrabold text-2xl ">Who am I?</h2>
          <h2 className="font-light break-words">
            Hey! My name is Darwin Koirala, I am a Full Stack Developer and
            currently a student. I specialize in Web development along with
            android development. I have have Knowledge about backend and its
            developments. I use react tailwindcss for front end, jetpack compose
            for android development and golang for backend development
          </h2>
        </motion.div>

        <motion.div
          initial={{
            y: -50,
            opacity: -1,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeIn",
            duration: 0.4,
          }}
          className="row-span-4 row-start-1 col-span-1 col-start-3 bg-[#1a1a1a] text-white rounded-lg"
        >
          <img
            src="wallpaper.jpg"
            className="w-[270px] h-full object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{
            x: -100,
            opacity: -1,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeIn",
            duration: 0.4,
          }}
          className=" flex flex-col col-start-1 row-start-4 litems-center justify-center row-span-2 col-span-1 text-white p-3 rounded-lg max-w-[270px] bg-cyan-900"
        >
          <h2 className="text-center text-white font-extrabold text-2xl">
            Student &
          </h2>
          <h2 className="text-center text-white font-extrabold text-2xl">
            Full Stack Developer
          </h2>
        </motion.div>

        <motion.div
          initial={{
            opacity: -1,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            ease: "easeIn",
            duration: 0.2,
          }}
          className="h-[200px] w-[270px] row-span-4 col-span-1 col-start-2 row-start-4 bg-[#1a1a1a] text-white p-4 rounded-lg flex justify-center items-center flex-col gap-3"
        >
          <img src="profile.png" className="max-w-[80px] rounded-4xl" />
          <h2 className="text-3xl font-extrabold text-cyan-600">
            Darwin Koirala
          </h2>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            ease: "easeIn",
            duration: 0.4,
          }}
          className="w-[270px] h-[300px] flex flex-col row-span-6 col-start-1 row-start-6 col-span-1 bg-[#1a1a1a] text-white p-4 rounded-lg gap-4"
        >
          <h2 className="font-bold text-xl ">
            Technologies I Have Worked With
          </h2>
          <div className="flex gap-2 flex-wrap w-[270px] pr-4">
            <ChartCard Png={JavaScriptSvg} name="JavaScript" />
            <ChartCard Png={ReactSvg} name="React" />
            <ChartCard Png={KotlinSvg} name="Kotlin" />
            <ChartCard Png={KotlinSvg} name="JepackCompose" />
            <ChartCard Png={HtmlSvg} name="Html/CSS" />
            <ChartCard Png={GoSvg} name="Golang" />
            <ChartCard Png={JavaSvg} name="Java" />
            <ChartCard Png={CSvg} name="C" />
            <ChartCard Png={RustSvg} name="Rust" />
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            ease: "easeIn",
            duration: 0.4,
          }}
          className="flex items-center row-span-2 row-start-5  col-start-3 col-span-1 text-white p-3 rounded-lg max-w-[270px] bg-cyan-900"
        >
          <h2 className="text-center text-white font-extrabold text-2xl">
            "The only way to do great work is to love what you do."
          </h2>
        </motion.div>
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeIn",
            duration: 0.4,
          }}
          className="row-span-4 col-start-2 row-start-7 col-span-2 bg-[#1a1a1a]  text-white p-4 rounded-lg flex flex-col w-[550px] h-[230px]"
        >
          <h2 className="font-extrabold text-2xl ">Education</h2>
          <div className="flex gap-1 mt-3">
            <h2 className="break-words text-lg font-bold">BSCIT </h2>
            <h2 className="font-light"> (2024-Current)</h2>
          </div>
          <h1 className="font-light">
            I am currently attending first semester in Apex college affiliated
            with Pokhara University
          </h1>
          <div className="flex gap-1 mt-3">
            <h2 className="break-words text-lg font-bold">Highschool</h2>
            <h2 className="font-light"> (2022-2024)</h2>
          </div>
          <h1 className="font-light">
            I completed my Highschool in law from Liverpool Internation College
          </h1>
        </motion.div>
      </div>
    </BackgroundLines>
  );
}

export default Home;
