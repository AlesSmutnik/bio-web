import React from "react";
import About from "./about/page"
import Buttoncon from "./components/btncon";
import Buttonab from "./components/btnwork";


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
        w-max 
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
             </div>                
        <About />
      </div>     
  );
}
