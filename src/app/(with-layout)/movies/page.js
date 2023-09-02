
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Box Office|Movies',
  description: 'Generated by create next app',
}

const Movies = async() => {
    // const response = await fetch('https://movie-tickets-web-nextjs.vercel.app/api/movie');
    // const movies = await response.json();
    let movies=[]
  return (
    <>
    <section className= "flex justify-center items-center h-56 bg-center bg-cover bg-no-repeat bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(https://images.thedirect.com/media/article_full/marvel-posters-ranked.jpg)]">
    <h1 className="text-center font-bold text-6xl text-white">Movies</h1>
    </section>

      <section className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 mt-8 '>
    {movies.map(({_id,original_title,release_date,poster_path})=>
    

    <div key={_id} className=" mx-auto h-fit group rounded-lg  mt-5  hover:scale-110 duration-500 transform-gpu cursor-pointer ">
    <div className="relative overflow-hidden">
    <div className='w-[250px] h-[375px] overflow-hidden' > 
 <Image className='w-full h-full object-cover' src={poster_path} priority width={500} height={500} alt='movies'/>
 </div>
     
      <div className="absolute h-full w-full bg-yellow-300/30 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <Link href={`/movies/${_id}`} >    <button className="bg-black hover:bg-yellow-300 hover:text-black duration-300 text-white py-2 px-5">Book Now</button>
      </Link>
      </div>
    </div>
    <p className='text-white mt-3'>{original_title}</p>
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

export default Movies
