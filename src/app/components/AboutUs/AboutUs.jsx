"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'

const AboutUs = () => {

  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

  return (
    <div
      id="about"
      className="lg:grid-cols-2 grid grid-cols-1 justify-center items-center mt-36 max-w-6xl mx-auto gap-8"
    >
      <div data-aos="fade-right"  >
        <h1 className="text-white font-semibold text-4xl mb-5">About US</h1>
        <p className="text-gray-400 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quidem ex assumenda, veniam totam nulla eius alias nostrum excepturi
          eum repellendus ad nobis repudiandae odit quam debitis qui officia
          adipisci officiis maxime accusamus! Suscipit eum quo adipisci
          veritatis dolor eligendi!
        </p>
      </div>
      <div  data-aos="fade-down">
        <iframe
          className="w-full h-96"
          src="https://www.youtube.com/embed/COvnHv42T-A"
          title="YouTube video player"
     
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
