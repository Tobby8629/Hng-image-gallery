'use client'
import { signOut } from "next-auth/react";

const NavBar = ({free}) => {
    return (
     <section className="flex justify-between items-center p-3 px-2 md:p-5 lg:p-7 fixed top-0 w-full z-40 bg-black xl:px-10">
       <h2 className="border-1 text-center border-rose-600 curve text-sm md:text-3xl md:p-2 md:px-3 lg:text-5xl lg:px-5 px-2">Image Gallery</h2>
       <label className="px-2 mx-3 md:w-1/2 border-1 border-rose-600 rounded-3xl">
          <input placeholder="search image" className="bg-transparent text-xs p-1 md:p-3 md:text-xl lg:text-xl b outline-none" onChange={(event)=>free(event.target.value)}  />
        </label>
       <button onClick={()=>signOut()} className="lg:text-3xl poppins outline-none">Logout</button>
     </section>   
    );
}
 
export default NavBar;