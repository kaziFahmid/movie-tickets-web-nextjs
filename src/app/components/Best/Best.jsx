
import Image from 'next/image'


const Best = () => {

 

  return (
    <section className='grid lg:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-6 mt-32'>
      <div >
<Image src={'https://i.ibb.co/XzKNpkh/War-PNG-Clipart.png'} width={550} height={550} alt='picture'/>
      </div>
      <div className='text-white flex justify-center items-center'> 
      <div >
      <h1 className='text-white text-4xl font-semibold mb-5'>The Best Movies in this platform </h1>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis velit beatae aperiam saepe molestias hic et, nostrum commodi eum rem modi sequi mollitia aliquam in vero sapiente quam eius distinctio! Exercitationem illum excepturi impedit optio quia incidunt odit saepe itaque reprehenderit totam ut, vel consectetur dolorum, voluptatum repellat quae aperiam est distinctio eaque possimus perferendis animi asperiores ab. Officiis! </p>
      </div>
      </div>
    </section>
  )
}

export default Best
