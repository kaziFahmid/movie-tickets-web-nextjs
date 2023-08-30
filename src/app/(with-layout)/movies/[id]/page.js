"use client";
import useAdmin from "@/app/components/hooks/useAdmin";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const MoviesDetails = ({ params }) => {
  const [movie, setMovie] = useState({});
  const [seats, setSeats] = useState([]);
  const { data: session, status } = useSession();
  const [myseat, setMySeat] = useState("");
  const [admin] = useAdmin();
  const [Error, setError] = useState("");

  const [mybookings, setMyBookings] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [bookingExists, setBookingExists] = useState("");
  const router = useRouter();
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DEV_API_URL}/api/booking`);
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookings();
  }, [status, session]);
  useEffect(() => {
    const fetchBookings = async () => {
      if (status === "authenticated" && session?.user?.email) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_DEV_API_URL}/api/mybooking/${session.user?.email}`
          );
          const data = await response.json();
          setMyBookings(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchBookings();
  }, [status, session]);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseMovie = await fetch(
          `${process.env.NEXT_PUBLIC_DEV_API_URL}/api/movie/${params.id}`
        );
        const movieData = await responseMovie.json();
        setMovie(movieData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [params.id]);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseSeats = await fetch(`${process.env.NEXT_PUBLIC_DEV_API_URL}/api/seats`);
        const seatsData = await responseSeats.json();
        setSeats(seatsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  let handleBookNow = async (e) => {
    e.preventDefault();
    setBookingExists("");
    setError("");
    if (
      mybookings.some(
        (booking) => booking.seatNo === myseat && booking.movieId === movie?._id
      )
    ) {
      setBookingExists("You have already booked this seat.");
      return;
    }
    if (
      bookings.some(
        (x) => x.seatNo === myseat && bookings.movieId === movie?._id
      )
    ) {
      setBookingExists("Seat is already booked");
      return;
    }
    if (myseat === "") {
      setError("You must book a seat");
      return;
    }
    let booking = {
      email: session.user?.email,
      movieId: movie?._id,
      movieName: movie?.original_title,
      moviePoster: movie?.poster_path,
      moviePrice: parseFloat(movie?.price),
      seatNo: myseat,
      status: "pending",
    };

    const fetchBookings = async () => {
      try {
        const responseMyBookings = await fetch(
          `${process.env.NEXT_PUBLIC_DEV_API_URL}/api/mybooking/${session.user?.email}`
        );
        const myBookingsData = await responseMyBookings.json();
        setMyBookings(myBookingsData);

        const responseAllBookings = await fetch(
          `${process.env.NEXT_PUBLIC_DEV_API_URL}/api/booking`
        );
        const allBookingsData = await responseAllBookings.json();
        setBookings(allBookingsData);
      } catch (error) {
        console.error(error);
      }
    };
    const response = await fetch(`${process.env.NEXT_PUBLIC_DEV_API_URL}/api/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    });

    const resData = await response.json();
    if (resData.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Booking successful",
        showConfirmButton: false,
        timer: 1500,
      });
      await fetchBookings();
    }
  };

  const bgStyle = {
    backgroundImage: `url(${movie.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <section>
        <div style={bgStyle} className="h-96 relative">
          <div className="rounded-lg mt-5 absolute top-20 md:left-10">
            <Image
              src={movie.poster_path || "/placeholder-image.jpg"}
              width={260}
              height={260}
              alt="movies"
            />
            <p className="text-white mt-3">{movie.original_title}</p>
            <p className="text-gray-400">{movie.release_date}</p>
          </div>
        </div>
        <div className="lg:me-14 lg:mt-8 mt-60 ">
          <h1 className="text-white text-4xl lg:text-end">
            {movie.original_title}
          </h1>
          <p className="text-gray-400 lg:text-end mt-2">
            Release Date: {movie.release_date}
          </p>
          <h3 className="text-white text-3xl  lg:text-end mt-2">
            ${movie.price}
          </h3>
          <div className="rating lg:text-end flex lg:justify-end mt-4">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>

          <div className="lg:text-end mt-5">
            {status === "authenticated" ? (
              <button
                disabled={admin?.result}
                onClick={() => window.my_modal_1.showModal()}
                className="bg-yellow-400 text-black lg:w-64 btn"
              >
                Book Now
              </button>
            ) : (
              <button
                onClick={() => {
                  router.push("/login");
                }}
                className="bg-yellow-400 text-black lg:w-64 btn"
              >
                Book Now
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="mt-20">
        <h1 className="text-center text-white text-5xl  font-semibold">
          Book Seats
        </h1>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 mt-20 items-center justify-center  ">
          {seats.map((x, index) => (
            <div key={index} className="text-center">
              {" "}
              <button
                className={`btn border ${
                  mybookings.some(
                    (booking) =>
                      booking.seatNo === x.seat &&
                      booking.email === session?.user?.email &&
                      booking.movieId === movie?._id
                  )
                    ? "bg-green-500 text-white"
                    : "border-yellow-500 text-black"
                }     ${
                  bookings.some(
                    (booking) =>
                      booking.seatNo === x.seat &&
                      booking.movieId === movie?._id &&
                      booking.email !== session?.user?.email
                  )
                    ? "bg-red-500 text-white"
                    : "border-yellow-500 text-black"
                }                 `}
              >
                {x.seat}
              </button>
            </div>
          ))}
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">
                Book {movie?.original_title}
              </h3>
              <h1>Price: ${movie?.price}</h1>
            </div>
            <div>
              <button className="bg-red-500 btn text-white">Close</button>
            </div>
          </div>

          <label htmlFor="seatSelect">Select a Seat:</label>
          <select
            id="seatSelect"
            className="border rounded-md p-2 mt-2 ms-3"
            name="seat"
            required
            onChange={(e) => setMySeat(e.target.value)}
          >
            <option>Select a seat</option>
            {seats.map((x) => (
              <option key={x._id} value={x.id}>
                {x?.seat}
              </option>
            ))}
          </select>
          {Error && <p className="text-red-500 text-sm mt-3">{Error}</p>}
          {bookingExists && (
            <p className="text-red-500 text-sm mt-3">{bookingExists}</p>
          )}
          <div className="modal-action">
            <button className="btn bg-yellow-500" onClick={handleBookNow}>
              Confirm Booking
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default MoviesDetails;
