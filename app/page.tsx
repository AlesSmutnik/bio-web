import React from "react";
import Buttoncon from "./components/btncon";
import Buttonab from "./components/btnwork";
import Btnabout from "./components/btnabout";

export default function Home() {
  return (
 
     <div className="">
       <header>
           <h1 className="
           flex
            flex-col
             items-center 
               justify-center 
                font-bold 
                 text-[#ffff] 
                  font-[roboto]
                   text-center 
                    text-3xl 
                     h-32
                      bg-[#34656D]/40
                       shadow-xl
                       ">
                       Životopisný web Page</h1>
                           

              <div className="
              flex
               flex-row
                items-center
                 justify-center
                  gap-2
                   mt-1
                    text-[#ffff]
                     font-[roboto]
                      text-lg
                      "><p>Narozen 4.11.1986</p>
                               <p>v Pardubicích</p>       
         </div>
       </header> 
         <div className="
        w-max-3xl 
         mx-auto 
          mt-5 
           mb-5 
            p-2
             gap-4 
              flex 
               flex-row 
                items-center 
                 justify-center 
                 ">
                 <Buttoncon />
                  <Buttonab />
                   <Btnabout/>
             </div>    
                <div className="
           mb-35
            mt-5
             p-5
              text-black
               font-[robotto]
                text-lg
                 bg-white/40
                  rounded-lg
                   shadow-lg
                    max-w-3xl
                     lg:mx-auto 
                         "                     >
                <h2 className="
                text-bold
                 text-black
                  text-2xl
                   text-center
                    mt-1
                     mb-2">
                      Kdo jsem?</h2>
                          
             <p>Zkušený technik s více než 15 lety praxe v průmyslové výrobě, z toho 11 let na vedoucích pozicích (Team Leader, Shift Leader, Production Engineer).
             Mám silné technické myšlení, orientaci na přesnost, kvalitu a efektivitu procesů.
             Poslední dva roky se intenzivně věnuji programování webových aplikací (React, Next.js, TypeScript) a rozvoji v oblasti IT.
             Hledám pozici, kde mohu spojit své technické zkušenosti, manažerské schopnosti a nově nabyté IT dovednosti.</p>
           </div>
        
           </div>     
  );
}
