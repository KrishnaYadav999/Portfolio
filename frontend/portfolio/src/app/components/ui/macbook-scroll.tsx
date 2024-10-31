"use client";

import React, { useEffect, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { IconBrightnessDown } from "@tabler/icons-react";
import Image from "next/image";
import krishna from "../../images/Screenshot (183).png";

// MacbookScroll Component
export const MacbookScroll = ({
  showGradient,
  title,
  badge,
}: {
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the window is defined and set mobile state
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 1.3]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 1.3]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1300]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="max-h-[180vh] flex flex-col items-center py-0 md:py-24 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.35] sm:scale-50"
    >
      <motion.h2
        style={{ translateY: textTransform, opacity: textOpacity }}
        className="dark:text-white text-neutral-800 text-3xl font-bold mb-20 text-center"
      >
        {title || (
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        )}
      </motion.h2>
      
      {/* Lid Component */}
      <Lid scaleX={scaleX} scaleY={scaleY} rotate={rotate} translate={translate} />
      
      {/* Base area */}
      <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
        {/* Above keyboard bar */}
        <div className="h-10 w-full relative">
          <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
        </div>

        <div className="flex relative">
          <div className="mx-auto w-[10%] overflow-hidden h-full">
            <SpeakerGrid />
          </div>
          <div className="mx-auto w-[80%] h-full">
            <Keypad />
          </div>
          <div className="mx-auto w-[10%] overflow-hidden h-full">
            <SpeakerGrid />
          </div>
        </div>
        
        {/* Trackpad Component */}
        <Trackpad />
        
        <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
        
        {/* Gradient Background */}
        {showGradient && (
          <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent z-50" />
        )}
        
        {/* Badge */}
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
      </div>
    </div>
  );
};

// Lid Component
export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
          }}
          className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
        >
          <span className="text-white">
            <AceternityLogo />
          </span>
        </div>
      </div>

      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
      >
        <div className="absolute inset-0 bg-[#272729] rounded-lg" />
        <Image
          src={krishna}
          alt="Aceternity logo"
          fill
          className="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
        />
      </motion.div>
    </div>
  );
};

// Trackpad Component
export const Trackpad = () => {
  return (
    <div
      className="w-[40%] mx-auto h-32 rounded-xl my-1"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

// Placeholder for SpeakerGrid Component
export const SpeakerGrid = () => (
  <div className="h-full w-full bg-gray-400"></div>
);

// Placeholder for AceternityLogo Component
export const AceternityLogo = () => <div className="text-white">Logo</div>;

// Keypad Component
export const Keypad = () => {
  return (
    <div className="h-full rounded-md bg-[#050505] mx-1 p-1">
      <Row>
        <KBtn>esc</KBtn>
        <KBtn>
          <IconBrightnessDown className="h-[6px] w-[6px]" />
          F1
        </KBtn>
        {/* Add other keys as needed */}
      </Row>
    </div>
  );
};

// Row Component
export const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-between">{children}</div>
);

// Key Button Component
export const KBtn = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-gray-800 text-white px-2 py-1 rounded-md text-xs">
    {children}
  </button>
);
