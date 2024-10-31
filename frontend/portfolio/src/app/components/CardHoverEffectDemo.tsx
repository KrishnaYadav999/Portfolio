import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    Image: "/images/icons8-react-js-96.png", // Changed 'Images' to 'Image'
    title: "React JS",
    link: "https://stripe.com",
  },
  {
    Image: "/images/nextjs-logo-removebg-preview.png", // Added an example image for Netflix
    title: "Next js",
    link: "https://netflix.com",
  },
  {
    Image: "/images/ex.png", // Added an example image for Google
    title: "express js",
    link: "https://google.com",
  },
  {
    Image: "/images/nodejs-icon-logo-png-transparent.png", // Added an example image for Meta
    title: "Node JS",
    link: "https://meta.com",
  },
  {
    Image: "/images/images-removebg-preview.png", // Added an example image for Amazon
    title: "MongoDB",
    link: "https://amazon.com",
  },
  {
    Image: "/images/html-css-js-removebg-preview.png", // Added an example image for Microsoft
    title: "HTML/CSS/JS",
    link: "https://microsoft.com",
  },
  {
    Image: "/images/tailwindcss-1633184775-removebg-preview.png", // Added an example image for Microsoft
    title: "tailwind",
    link: "https://microsoft.com",
  },
  {
    Image: "/images/bootstrap-logo-768x768.png", // Added an example image for Microsoft
    title: "bootstrap",
    link: "https://microsoft.com",
  },
  {
    Image: "/images/google-analytics.png", // Added an example image for Microsoft
    title: "Google Analytics",
    link: "https://microsoft.com",
  },
];
