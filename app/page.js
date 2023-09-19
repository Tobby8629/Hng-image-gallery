'use client'
import { Images, NavBar } from '@/components'
import { useSession } from 'next-auth/react'


export default function Home() {
  const {data} = useSession()
  const detail =JSON.stringify(data)
  
  return (
    <main className="min-h-screen bg-black p-5 text-white">
      <NavBar />
      <Images />
    </main>
  )
}
