"use client";

import { cn } from "@/lib/utils";
import { easeIn } from "motion";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 ", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-800 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0 },
                }} />
            )}
          </AnimatePresence>
          <Card  index={idx}>
            <CardTitle>{item.title}</CardTitle>
            <CardLanguage>{item.language}</CardLanguage>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

function animateCardCalculator(index){
  switch (index) {
    case 0:
      return { x: -100, };
    case 1:
      return { y: -100, };
    case 2:
      return { x: 100, };
    case 3:
      return { y: 100, };
    case 4:
      return { x: -100, y: -100, };
  }
}
export const Card = ({
  index,
  className,
  children
}) => {
  return (
    <motion.div
      initial={{ ...animateCardCalculator(index)}}
      animate={{ x:0, y: 0,}}
      transition={{
        ease:"easeIn",
        duration: 0.4
      }} 
      className={cn(
        //here
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#1a1a1a] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </motion.div>
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide text-xl", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p
      className={cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
export const CardLanguage = ({
  className,
  children
}) => {
  return (
    <p className={cn("mt-2 text-zinc-300 text-sm", className)}>
      <span className="font-semibold">{children}</span>
    </p>
  );
};

