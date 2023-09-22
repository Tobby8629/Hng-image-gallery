"use client"
import { Images, NavBar } from '@/components'
import { useState } from 'react';
const Image = () => {
  const [word, setword] = useState('')
    return ( 
      <main className='min-h-screen bg-black text-white'>
        <NavBar free={setword}/>
        <Images word={word.toLocaleLowerCase()}/>
      </main>
     );
}
 
export default Image; 