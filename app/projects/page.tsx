import React from "react";
import Link from "next/link";  



export default function Page() {
    return <div className="body">
             <h1 className="title text-white text-center text-3xl font-[roboto] mt-10 ">
           Mé projekty 
        </h1>

        <section className="flex flex-row items-center justify-center gap-4 w-full mt-20 p-5 bg-[#606060]/40  h-[320px]  shadow-lg
          shadow-white/70">
             <div className="link">
             <Link href="https://woodooalda.cz/" target="_blank" className=""><img src="logo1.png" alt="" className="logow wbg  rounded-xl
             w-[500px]
             hover:bg-blue-300
            hover:text-black
           transition
          duration-300
         ease-in-out
        mt-5
       mb-5
        py-2
         shadow-lg
          shadow-white/70"></img></Link>
        </div>
         <div className="link">
             <Link href="https://to-do-type-script-iota.vercel.app/" target="_blank" className=""><img src="todo.PNG" alt="" className="logow  rounded-xl
             hover:bg-blue-300
           hover:text-black
          transition
         duration-300
        ease-in-out
       mt-5
      mb-5
     py-2
     shadow-lg
     shadow-white/70"></img></Link>
        </div>
         <div className="link">
             <Link href="http://allnat.kvalitne.cz:8080/" target="_blank" className=""><img src="allweb.PNG" alt="" className="logow rounded-xl
            hover:bg-blue-300
           hover:text-black
          transition
         duration-300
        ease-in-out
       mt-5
      mb-5
     py-2
     shadow-lg
     shadow-white/70"></img></Link>
        </div>
         <div className="link">
             <Link href="https://github.com/AlesSmutnik" target="_blank" className=""><img src="GitHub.png" alt="" className="logow rounded-xl
            hover:bg-blue-300
           hover:text-black
          transition
         duration-300
        ease-in-out
       mt-5
      mb-5
     py-2
     shadow-lg
     shadow-white/70"></img></Link>
        </div>
        </section>
       
      
    </div>
}