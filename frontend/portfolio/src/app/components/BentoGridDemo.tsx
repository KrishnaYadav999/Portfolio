"use client"
import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid"; // Adjust the path as necessary
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay (can replace this with actual data fetching)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />) // Display Skeleton components while loading
        : items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              image={item.image} // Pass the image prop
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
    </BentoGrid>
  );
}

// Skeleton component to display a placeholder
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

// Your items list
const items = [
  {
    title: "Siddharthmep",
    description: "React/tailwind/gsap/GoogleAnalytics.",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: "/images/Screenshot (190).png", // Image path
  },
  {
    title: "Coffee",
    description: "react/tailwind/express/nodejs/mongoDB/selenium",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    image: "/images/Screenshot (191).png", // Image path
  },
  {
    title: "Food-corner",
    description: "react/tailwind",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    image: "/images/Screenshot (188).png", // Image path
  },
  {
    title: "Movie-hub",
    description: "react/bootstrap 5",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    image: "/images/Screenshot (192).png", // Image path
  },
  {
    title: "Sundown",
    description: "HTML5/CSS3/javascript/locomotive",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    image: "/images/Screenshot (193).png", // Image path
  },
  {
    title: "Nike",
    description: "HTML5/CSS3",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    image: "/images/Screenshot (194).png", // Image path
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    image: "/images/Screenshot (188).png", // Image path
  },
];
