import React from "react";
import Link from "next/link";

export default function btnwork(){

return(
    <button className="
    flex
     flex-row
      items-center
       justify-center
        w-40
         mx-auto
          rounded-xl
           bg-blue-800/60
            hover:bg-blue-300
           hover:text-black
          transition
         duration-300
        ease-in-out
       mt-5
      mb-5
     py-2
      font-bold
         font-[robotto]
          text-xl
           text-white
            shadow-lg
             shadow-black/30
              border border-black
              ">

                    <Link href="/projects">Projekty</Link>
     </button>
)
}