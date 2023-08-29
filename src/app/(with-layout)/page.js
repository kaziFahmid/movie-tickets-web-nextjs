import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import Best from "../components/Best/Best";
import FeedBack from "../components/FeedBack/FeedBack";
import NewBlogs from "../components/NewBlogs/NewBlogs";
import Ourservices from "../components/Ourservices/Ourservices";
import PopularMovies from "../components/PopularMovies/PopularMovies";
import Quality from "../components/Quality/Quality";
import UpcomingMovies from "../components/UpcomingMovies/UpcomingMovies";

export default function Home() {
  return (
    <>
      <Banner />
      <Best />
      <PopularMovies />
      <UpcomingMovies />
      <AboutUs />
      <Ourservices />
      <Quality />
      <FeedBack />
      <NewBlogs />
    </>
  );
}
