import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="overflow-hidden dark:bg-[#000000] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        badge={
          <Link href="https://peerlist.io/manuarora">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        // src={`/linear.webp`} // This will now work
        showGradient={false}
      />
    </div>
  );
};

// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      {/* Remaining SVG paths... */}
    </svg>
  );
};

export default Herosection;
