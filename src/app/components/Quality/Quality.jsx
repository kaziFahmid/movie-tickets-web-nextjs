import Image from 'next/image'


const Quality = () => {
  return (
    <section className=' lg:bg-gray-950 flex mt-52 lg:h-60 justify-between items-center gap-6 lg:flex-row flex-col'>
        <div className='lg:ms-12'>
            <h1 className='text-white text-3xl font-bold'>NEED QUALITY MOVIE OR VIDEO? CHOOSE YOUR PLAN NOW</h1>
            </div>

    <div className='w-[300px] h-[416px] mb-44 overflow-hidden'>
    <Image src='https://i.ibb.co/FHm0DjZ/deadpool-14354.png' className=' w-full h-full object-cover ' width={300} height={300} alt='deadpool' priority />
    </div>
    </section>
  )
}

export default Quality
