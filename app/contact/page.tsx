import React from "react";
import Link from "next/link";
import ConForm from "./ContactForm";
import Image from "next/image";
export default function ContactPage() {

  return (
    <div>
        <div className="flex flex-row justify-center gap-5 mt-3 mb-3 ">
              <Link href="/contact"className="hover:text-green-500  border p-2 bg-white/25 rounded-xl">a.smutnik@seznam.cz</Link> 

              <Link href="/contact"className="hover:text-green-500  border p-2 bg-white/25 rounded-xl">+420 774 579 768</Link> 
        </div>
        <div className="flex flex-col items-center mb-5 ">
              <Link href="https://github.com/dashboard"target="_blank" ><Image src="/GitHub.png" alt="" width={50} height={50} className="w-15 hover:w-20 border bg-white/25 rounded-xl"></Image></Link>
        </div> 
         
          <ConForm />
         </div>




  );
}


