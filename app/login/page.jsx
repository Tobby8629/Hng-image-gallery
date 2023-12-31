"use client"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import { useState } from "react";

const Login = () => {
    const submituser = async (event) => {
        event.preventDefault()
        const propertiesToCheck = [user.email,user.password];
        if (propertiesToCheck.some(property => property === '')) {
          return
        }
        else {
          signIn("credentials", 
          {email: user.email,
           password: user.password,
           redirect: true,
           callbackUrl: "/image"
          }
          )
        }
     }
     const[user, setuser] = useState({ email: 'user@example.com', password: '1password'})
    return ( 
      <section className=" min-h-screen bg-black flex flex-col justify-center items-center"> 
            <h2 className="text-white poppins my-3 md:text-xl lg:text-4xl">Login to <span className=" text-red-600 text-3xl curve mx-1 lg:text-6xl"> Image Gallery</span></h2>
            <FontAwesomeIcon icon={faUser} className=" text-gray-500 text-9xl" />
            <form onSubmit={(event)=>submituser(event)} className="flex flex-col w-3/4 md:w-2/6 my-5">
            <input className="my-2 p-3 w-full text-black" required type="email" placeholder="enter your email" value={user.email}  onChange={(e) => setuser({...user, email: e.target.value })} />
            <input className="my-2 p-3 w-full text-black" required type='password' placeholder="password" value={user.password}  onChange={(e) => setuser({...user, password: e.target.value })}/>
            <button type='submit' className="bg-white text-black text-base w-1/2 p-2 mx-auto">sign up</button>
          </form>
      </section>
    );
}
 
export default Login;