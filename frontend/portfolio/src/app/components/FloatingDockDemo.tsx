import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "linkedin",
      icon: (
        <Image
          src="/images/linkedin.png"
          alt="linkedin"
          width={20}
          height={20}
          className="text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#",
    },
    {
      title: "whatsapp",
      icon: (
        <Image
          src="/images/whatsapp.png"
          width={20}
          height={20}
          alt="whatsapp"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "#",
    },
    {
      title: "gmail",
      icon: (
        <Image
          src="/images/gmail.png"
          width={20}
          height={20}
          alt="gmail"
        />
      ),
      href: "mailto:krishnaerrorr@gmail.com",
    },
    {
      title: "instagram",
      icon: (
        <Image
          src="/images/video.png"
          alt="insta"
          width={20}
          height={20}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
