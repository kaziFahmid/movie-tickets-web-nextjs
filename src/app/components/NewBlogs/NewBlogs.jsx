import Image from 'next/image'
import React from 'react'

const NewBlogs = () => {
  return (
    <>
   <div className='max-w-6xl mx-auto mt-36'>





   <div className='grid lg:grid-cols-2 grid-cols-1'>
        <div > 
           <div className=' border-b-4 border-yellow-500 lg:w-96' >
           <small className='text-yellow-400'>OUR BLOG</small>
            <h1 className='text-white text-4xl font-bold mb-5'>News & Blog Update</h1>
           </div>
        </div>
        <div className='mt-8 lg:mt-0 md:mt-8'>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos architecto adipisci, ab inventore molestias vero consequatur non consequuntur vel ut cumque dolorum sed excepturi, voluptatibus 
                
            </p>
        </div>

    </div>
    <section className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 grid-cols-1 mt-8'>

    <div className=" bg-gray-950 border-b-4 border-yellow-500 text-white rounded overflow-hidden shadow-lg">
  <Image  src="https://i.ibb.co/tLsGJGg/teamwork-3213924-1280.jpg" alt="Blog" width={500} height={500}/>
  <div className="px-6 py-8">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className=" text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
 
</div>






<div className=" bg-gray-950 border-b-4 border-yellow-500 text-white rounded overflow-hidden shadow-lg">
  <Image  src="https://i.ibb.co/tLsGJGg/teamwork-3213924-1280.jpg" alt="Blog" width={500} height={500}/>
  <div className="px-6 py-8">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className=" text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
 
</div>




<div className=" bg-gray-950 border-b-4 border-yellow-500 text-white rounded overflow-hidden shadow-lg">
  <Image  src="https://i.ibb.co/tLsGJGg/teamwork-3213924-1280.jpg" alt="Blog" width={500} height={500}/>
  <div className="px-6 py-8">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className=" text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
 
</div>

    </section>















   </div>
    </>
  )
}

export default NewBlogs
