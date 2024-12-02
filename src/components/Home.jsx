import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <>
    <div className='w-[50%] md:w-[35%] mx-auto flex flex-col gap-10'>
        <button onClick={() => navigate("/problem1")} type="button" className='bg-slate-400 rounded-xl py-1 text-xl'>Problem 1 - Element Transfer</button>
        <button onClick={() => navigate("/problem2")} type="button" className='bg-slate-400 rounded-xl py-1 text-xl'>Problem 2 - Nested List component</button>
        <button onClick={() => navigate("/problem3")} type="button" className='bg-slate-400 rounded-xl py-1 text-xl'>Problem 3 - Infinite scroll</button>
        <button onClick={() => navigate("/problem4")} type="button" className='bg-slate-400 rounded-xl py-1 text-xl'>Problem 4 - Hit the Box Game</button>
        <button onClick={() => navigate("/problem5")} type="button" className='bg-slate-400 rounded-xl py-1 text-xl'>Problem 5 - Box split</button>
    </div>
    </>
  )
}

export default Home