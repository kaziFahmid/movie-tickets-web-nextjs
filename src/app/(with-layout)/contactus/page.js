
import React from 'react'

import { BsFillTelephoneFill } from 'react-icons/bs';

import { MdEmail } from 'react-icons/md';



const Contactus = () => {
  return (
    <>
    <section  className='h-64 flex justify-center items-center bg-no-repeat  bg-center bg-[url(https://e1.pxfuel.com/desktop-wallpaper/1003/964/desktop-wallpaper-7680x4320-spiderman-homecoming-new-movie-poster-chinese-spider-man.jpg)] bg-cover'>
        <h1 className='text-center text-white font-bold text-5xl'>Contact Us</h1>

    </section>

    <section className='grid lg:grid-cols-2 grid-cols-1 justify-center items-center mt-20 max-w-6xl mx-auto'>
<div >
<h1 className='text-white text-4xl text-center lg:text-start mb-6 font-semibold'>GET IN TOUCH</h1>
<ul>
    <li className='flex lg:justify-start md:justify-center  justify-center items-center gap-4'> < BsFillTelephoneFill className='text-yellow-400 text-3xl'/><span className='text-xl text-white'>Phone</span></li>
    <li className='flex lg:justify-start md:justify-center justify-center items-center gap-4 mt-4'> <MdEmail className='text-yellow-400 text-3xl'/><span className='text-xl'><span className='text-xl text-white'>Email</span></span></li>
</ul>
</div>


<div className='mt-28 lg:mt-0'>
    <h1 className='text-white text-3xl text-center font-bold mb-5  '>
    SEND US A MESSAGE
    </h1>
<div className='flex justify-center items-center gap-5'>
<div>
<input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-lg bg-black text-white" />
</div>
<div>
<input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-lg bg-black text-white" />
</div>
</div>

<div className='text-center mt-5'>
<input type="email" placeholder="Email" className="input input-bordered input-warning w-full max-w-lg bg-black text-white" />
</div>

<div className='text-center mt-5'>
<textarea className="textarea textarea-warning max-w-lg h-56 w-full bg-black text-white" placeholder="Bio"></textarea>
</div>
<div className='text-center mt-4'>
    <button className='text-black btn bg-yellow-500 w-full max-w-lg'>Submit</button>
</div>
</div>







    </section>
      
    </>
  )
}

export default Contactus
