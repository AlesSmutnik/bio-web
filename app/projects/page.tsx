import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    href: "https://woodooalda.cz/",
    src: "/logo1.png",
    alt: "Woodoo Alda",
  },
  {
    href: "https://to-do-type-script-iota.vercel.app/",
    src: "/todo.PNG",
    alt: "To-Do App",
  },
  {
    href: "http://allnat.kvalitne.cz:8080/",
    src: "/allweb.PNG",
    alt: "Allnat Web",
  },
  {
    href: "https://github.com/AlesSmutnik",
    src: "/GitHub.png",
    alt: "GitHub profil",
  },
];

export default function Page() {
  return (
    <div className="body text-white text-center mt-10">
      <h1 className="text-3xl font-[roboto] mb-10">Mé projekty</h1>

      <section className="flex flex-wrap justify-center gap-8 p-6 bg-[#606060]/40 shadow-lg shadow-white/70 rounded-xl">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            target="_blank"
            className="flex flex-col items-center justify-center transform hover:scale-105 transition duration-300 ease-in-out shadow-lg shadow-white/70 rounded-xl overflow-hidden"
          >
            <Image
              src={project.src}
              alt={project.alt}
              width={200}
              height={200}
              className="rounded-xl"
            />
          </Link>
        ))}
      </section>
    </div>
  );
}
