"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Header = () => {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <section className="flex w-full justify-between bg-secondary p-4 shadow-md">
      <div className="flex items-center gap-2">
        <Image
          className="object-contain"
          src="/assistant.png"
          width={50}
          height={50}
          alt="logo"
        />

        <span className="font-semibold">Ai Mock Interview</span>
      </div>
      <ul className="hidden items-center justify-between gap-6 p-4 md:flex">
        <li
          className={`cursor-pointer transition-all hover:scale-105 hover:text-primary ${path === "/dashboard" && "font-bold text-primary"}`}
        >
          Dashboard
        </li>
        <li
          className={`cursor-pointer transition-all hover:scale-105 hover:text-primary ${path === "/dashboard/questions" && "font-bold text-primary"}`}
        >
          Questions
        </li>
        <li
          className={`cursor-pointer transition-all hover:scale-105 hover:text-primary ${path === "/dashboard/upgrade" && "font-bold text-primary"}`}
        >
          Upgrade
        </li>
        <li
          className={`cursor-pointer transition-all hover:scale-105 hover:text-primary ${path === "/dashboard/how" && "font-bold text-primary"}`}
        >
          How it works ?
        </li>
      </ul>

      <UserButton />
    </section>
  );
};

export default Header;
