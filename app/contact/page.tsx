import React from "react";
import Link from "next/link";
import ConForm from "./ContactForm";
import Image from "next/image";
export default function ContactPage() {

  return (
    <div>
        <div className="flex flex-row justify-center gap-5 mt-5 mb-5 ">
              <Link href="/contact"className="hover:text-red-500  border p-2 bg-white/25 rounded-2xl">a.smutnik@seznam.cz</Link> 

              <Link href="/contact"className="hover:text-red-500  border p-2 bg-white/25 rounded-2xl">+420 774 579 768</Link> 
        </div>
        <div className="flex flex-col items-center mb-5 ">
              <Link href="https://github.com/dashboard"target="_blank" ><Image src="/GitHub.png" alt="" width={40} height={40} className="w-25 hover:w-26 border p-2 bg-white/25 rounded-2xl"></Image></Link>
        </div> 
         
          <ConForm />
         </div>




  );
}


