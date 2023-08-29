"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi';
import useAdmin from '../components/hooks/useAdmin';
import useUser from '../components/hooks/useUser';
const DashboardLayout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const[admin]=useAdmin()
  const[user]=useUser()
  

  return (

   <>
 
   
 <div className="relative lg:hidden block ">
    <div className='flex justify-end'>
    <button
        onClick={toggleDropdown}
        className="block  mt-4 me-5 px-4 py-2 btn bg-yellow-400"
      >
        {isOpen?"X":<BiMenuAltRight className='text-2xl'/>}
      </button>
    </div>
      {isOpen && (
        <div className="absolute right-0 z-50  mt-2 w-48 bg-white border border-gray-300 divide-y divide-gray-300 rounded shadow-lg">
    {admin?.result&& <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Admin</a>}   
    
     {admin?.result&&<Link href='/' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home</Link>}     
{admin?.result&&<Link href='/dashboard/allusers' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">All User</Link>}

{admin?.result&&<Link href='/dashboard/managebookings' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Manage Bookings</Link>}

{user?.result&&<a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">User</a>}

{user?.result&&<Link href='/' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home</Link>}

{user?.result&&<Link href='/dashboard/mybookings' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Bookings</Link>}







        </div>
      )}
    </div>
   <section className='grid grid-cols-1 lg:grid-cols-12'>
      
      <div className='lg:col-span-2 hidden lg:block'>
        <div className='bg-yellow-500 min-h-screen pt-8'>
        {admin?.result && (
  <h1 className='text-center text-white text-3xl'>Admin</h1>
)}
{user?.result && (
  <h1 className='text-center text-white text-3xl'>Users</h1>
)}

{admin?.result && (
  <ul className='mt-28 ms-8'>
    <li><Link href='/'>Home</Link></li>
    <li className='mt-5'><Link href='/dashboard/allusers'>All User</Link></li>
    <li className='mt-5'><Link href='/dashboard/managebookings'>Manage Bookings</Link></li>
  </ul>
)}

{user?.result && (
  <ul className='mt-28 ms-8'>
    <li className='mt-5'><Link href='/'>Home</Link></li>
    <li className='mt-5'><Link href='/dashboard/mybookings'>My Bookings</Link></li>
  </ul>
)}





        </div>
      </div>
      <div className='lg:col-span-10'>
      {children}
      </div>
    </section>
   
   
   
   
   
   </>
  )
}

export default DashboardLayout
