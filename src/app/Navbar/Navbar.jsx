"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import React, { useState } from 'react'
import { GrMenu } from 'react-icons/gr';
import Cookies from 'js-cookie';
import Image from 'next/image';
const Navbar = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSignOut = () => {
    signOut('google'); 

 
    Cookies.remove('sessionEmail'); 
  };
  return (
<>


<nav className="navbar bg-black text-neutral-content sticky top-0 flex md:flex-col lg:flex-row lg:justify-around justify-between items-center z-50">
  <a className="btn btn-ghost normal-case text-xl">Box Office</a>


  
<div className="relative md:hidden block ">
    <div className='flex justify-end'>
    <button
    onClick={toggleDropdown}
      className='bg-yellow-500 btn '
      >
      {isOpen? 'X':<GrMenu className='text-xl '/>}  
      </button>
    </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 divide-y divide-gray-300 rounded shadow-lg">
          {status === 'authenticated'&&
  <div className="avatar  mt-2 flex justify-center">
  <div className="w-10 rounded-full  ">
    <Image alt='person' src={session?.user.image} width={50} height={50} />
  </div>
</div>}

          <Link
            href="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
           Home
          </Link>
          <Link
            href="/movies"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
           Movies
          </Link>
          <Link
            href="/contactus"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Contact us
          </Link>
          {status === 'authenticated'&& <Link
            href="/dashboard"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
         Dashboard
          </Link>}
         

          {status === 'authenticated'? 
<div className='text-center'> 
<button className='bg-yellow-500 btn text-black px-12' onClick={()=> signOut('google')}>Logout</button>   
</div>
    : 
        <Link href='/login'  className="block px-4 py-2 hover:bg-gray-200"><button className='bg-yellow-500 btn text-black px-12'>Login</button></Link>
}  


{status==='authenticated'?'':<Link href='/signup'  className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Signup</Link>}





        </div>
      )}
    </div>

  <ul className='  justify-center items-center gap-6 md:flex hidden '>
    <li className='cursor-pointer hover:text-yellow-500 duration-500' ><Link href='/'>Home</Link></li>
    <li className='cursor-pointer hover:text-yellow-500 duration-500'><Link href='/movies'>Movies</Link></li>





    <li className='cursor-pointer hover:text-yellow-500 duration-500'><Link href='/contactus'>Contact us</Link></li>





    <li className='cursor-pointer hover:text-yellow-500 duration-500'></li>
  {status === 'authenticated'&& <li className='cursor-pointer hover:text-yellow-500 duration-500'><Link href='/dashboard'>Dashboard</Link></li>}  
   
 {status === 'authenticated'? <li onClick={handleSignOut} className='cursor-pointer hover:text-yellow-500 duration-500'>
 <button className='bg-yellow-500 btn text-black px-12'>Logout</button>   
    </li>: <li className='cursor-pointer hover:text-yellow-500 duration-500'>
        <Link href='/login'><button className='bg-yellow-500 btn text-black px-12'>Login</button></Link>
    </li>}  
{status === 'authenticated'&&<li>
  <div className="avatar">
  <div className="w-10 rounded-full">
    <Image alt='person' src={session?.user.image} width={50} height={50}/>
  </div>
</div></li>}
 {status==='authenticated'?'':<li className='cursor-pointer hover:text-yellow-500 duration-500'><Link href='/signup'>Signup</Link></li>}
  </ul>
</nav>






</>
  )
}

export default Navbar
