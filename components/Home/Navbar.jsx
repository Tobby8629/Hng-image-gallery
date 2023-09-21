'use client'
import { signOut } from "next-auth/react";

const NavBar = () => {
    return (
     <section className="flex justify-between p-2 px-3 md:p-5 lg:p-7 fixed top-0 w-full z-40 bg-black xl:px-10">
       <h2 className="border-1 border-rose-600 curve text-xl md:text-3xl md:p-2 md:px-3 lg:text-5xl lg:px-5 px-2">Image Gallery</h2>
       <button onClick={()=>signOut()} className="lg:text-3xl poppins">Logout</button>
     </section>   
    );
}
 
export default NavBar;