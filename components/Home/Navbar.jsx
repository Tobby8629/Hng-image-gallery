'use client'
import { signOut } from "next-auth/react";

const NavBar = () => {
    return (
     <section className="flex justify-between md:p-5 lg:p-7">
       <h2>Image Gallery</h2>
       <button onClick={()=>signOut()}>Logout</button>
     </section>   
    );
}
 
export default NavBar;