"use client"
import Link from 'next/link';
import React from 'react';

const page = () => {
    // const handelSignup = () =>  async{
        // onSubmit={handelSignup}   
    // };  

    return (
        <>
<div className='border-2 p-12 w-1/2 ' >

<form >

<label htmlFor='name'>name</label><br></br>

<input type="text" placeholder="Type name" className="input input-bordered w-full max-w-xs" />
<br></br>
<label htmlFor='email'>Email</label><br></br>

<input type="email" placeholder="Type email" className="input input-bordered w-full max-w-xs" />
<br></br>
<label htmlFor='password'>Password</label><br></br>

<input type="password" placeholder="Type password" className="input input-bordered w-full max-w-xs" /> <br></br>
<button className="btn btn-primary">signup</button>
 
 <h2>or sign in with <button className='btn btn-primary'>GOOGLE</button>
 </h2>

 <h2>Do not have a account? <Link className='text-blue-500' href={'/login'}> login</Link></h2>
</form>
</div>
</>
    );
};

export default page;