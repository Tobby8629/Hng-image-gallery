'use client'
import { Loading } from '@/components'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


export default function Home() {
  const {data} = useSession()
  const detail =JSON.stringify(data)
  const [load, setload] = useState(true)
  const route = useRouter()
  useEffect(()=>{
    data === null ? setload(false) : setload(true)
    data && route.replace('/image')
  },[data]) 

  return (
    <>
    {load ? <Loading /> :
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center ">
      <div className='text-3xl my-5'>
        <h2 className=''>Welcome to <span className=' text-rose-600 italic'>Image Gallery</span></h2>
      </div>
      {!data && <button onClick={()=>signIn()} className='p-2 px-5 border-2 text-2xl rounded-lg border-rose-600 hover:bg-rose-600 hover:text-white transition-all'>Sign In</button>}
    </main>
    }
    </>
  )
}
