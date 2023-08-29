
import Image from 'next/image'


const PopularMovies = async () => {
    const response = await fetch('http://localhost:3000/api/movie',{ cache: 'force-cache' });
     const movies = await response.json();

     
  return (
    <>
    <h1 className='text-white text-center lg:text-5xl text-3xl mt-40 font-semibold  '>Popular Movies</h1>
<section className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-8 '>
    {movies.slice(0,6).map(({_id,original_title,release_date,poster_path})=><div key={_id}  className='rounded-lg  mt-5 mx-auto'>
    <Image className='rounded-lg' src={poster_path} width={260} height={260} alt='movies'/>
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

export default PopularMovies
