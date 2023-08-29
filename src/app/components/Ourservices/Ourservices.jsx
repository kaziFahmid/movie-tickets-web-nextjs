
import { BiSolidCameraMovie } from 'react-icons/bi';
const Ourservices = () => {
  return (
    <section>
      <div className='text-center text-white mt-48'>
        <small className='text-yellow-400'>OUR SERVICES</small>
   
        <h1 className='text-4xl'>WHAT WE OFFER</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
</p>
</div>

<div className='grid lg:grid-cols-3 gap-7 max-w-6xl mx-auto mt-8 md:grid-cols-2 grid-cols-1'>
<div className=" hover:bg-yellow-400 hover:text-black duration-200 bg-black shadow-xl text-white border border-yellow-400">
  <div className="card-body">
  <div>
            <BiSolidCameraMovie className='text-4xl'/>
        </div>
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>


<div  className=" hover:bg-yellow-400 hover:text-black duration-200 bg-black shadow-xl text-white border border-yellow-400">
  <div className="card-body">
  <div>
            <BiSolidCameraMovie className='text-4xl'/>
        </div>
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>

<div  className=" hover:bg-yellow-400 hover:text-black duration-200 bg-black shadow-xl text-white border border-yellow-400">
  <div className="card-body">
  <div>
            <BiSolidCameraMovie className='text-4xl'/>
        </div>
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>

</div>
      
    </section>
  )
}

export default Ourservices
