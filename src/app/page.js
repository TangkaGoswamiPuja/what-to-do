"use client"

import Link from 'next/link';
import React, { useState } from 'react'

const Page = () => {
  const [tasks, setTasks] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(tasks);
    setTasks("");
  };
  return (
    <>
<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     
        <h1 className=" border p-5 
        border-8 border-black text-4xl font-bold rounded-lg">To Do App</h1>
        
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Add a new task"
            className="border p-2 border-2 border-black rounded-lg"
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
            
          />
          <button
            type="submit"
            className="border m-2 p-2 border-2 border-black rounded-lg"
          >
            Add
          </button>
        </form>
      <Link href={'/login'}><button className='btn'>login</button></Link>
    </div>
    </>
      )
}

export default Page; 