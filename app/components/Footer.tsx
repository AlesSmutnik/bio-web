import Link from "next/link";



export default function Footer() {
  return (
    <footer className="gap-2 flex flex-row justify-center  items-center bg-[#34656D] text-center text-sm text-white font-[robotto] py-3 fixed bottom-0 left-0 w-full shadow-inner shadow-black/30 ">
      <Link href="https://www.facebook.com/profile.php?id=61574919272925" target="_blank"><img src="/fb.png" alt="" className="w-12 hover:w-13"/></Link>
       <Link href="https://github.com/dashboard" target="_blank" ><img src="GitHub.png" alt="" className="w-20 hover:w-22 " /></Link>
      <div className="">
        &copy; {new Date().getFullYear()} Aleš web design
      </div>
      
    </footer>
  );
}
