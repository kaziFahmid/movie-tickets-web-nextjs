
import Image from 'next/image'
const UpcomingMovies =  async () => {
    // const response = await fetch('http://localhost:3000/api/movie');
    // const movies = await response.json();
    let movies=[]
  return (
    <>
    <h1 className='text-white text-center lg:text-5xl text-3xl mt-40 font-semibold  '>Upcoming Movies</h1>
<section className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-8 '>
    {movies.slice(6,12).map(({_id,original_title,release_date,poster_path})=><div key={_id}  className='rounded-lg  mt-5 mx-auto'>
    <div className='w-[250px] h-[375px] overflow-hidden' > 
 <Image className='w-full h-full object-cover' src={poster_path} priority width={500} height={500} alt='movies'/>
 </div>
    <p className='text-white'>{original_title}</p>
    <p className='text-gray-400'>{release_date}</p>
    <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
</div>
)}



</section>
    </>
  )
}

export default UpcomingMovies
