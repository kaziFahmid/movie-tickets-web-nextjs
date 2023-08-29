"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';






const MyBookings = () => {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (status === 'authenticated' && session?.user?.email) {
        try {
          const response = await fetch(`http://localhost:3000/api/mybooking/${session.user?.email}`);
          const data = await response.json();
          setBookings(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchBookings();
  }, [status, session]);

  
  const fetchBookings = async () => {
    if (status === 'authenticated' && session?.user?.email) {
      try {
        const response = await fetch(`http://localhost:3000/api/mybooking/${session.user?.email}`);
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('An error occurred while fetching bookings:', error);
      }
    }
  };
  const handleCancelBooking = async (id) => {
    const response = await fetch(`http://localhost:3000/api/mybookings/${id}`, {
            method: 'DELETE'
          });
          toast.success('Booking Canceled!')
          fetchBookings()
  };

let handleRequestForRefund= async(id)=>{
  try {
    await fetch(`http://localhost:3000/api/mybookings/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'requested for refund' }),
    });
    toast.success('Request for refund done!')
    fetchBookings()
  } catch (error) {
    console.error('Error making user a user:', error);
  }
}

let handleCancelRefund= async(id)=>{
  try {
    await fetch(`http://localhost:3000/api/mybookings/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'pending' }),
    });
    toast.success('Request for refund canceled!')
    fetchBookings()
  } catch (error) {
    console.error('Error making user a user:', error);
  }
}












  return (
    <div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <h1 className='text-center mt-28 text-4xl text-white mb-4'>My Bookings</h1>
      <div className="overflow-x-auto  h-96">
        <table className="table">
          <thead>
            <tr className='bg-yellow-500 text-black'>
              <th>Sl</th>
              <th>Image</th>
              <th>Movie Name</th>
              <th>Price</th>
              <th>Email</th>
              <th>Seat</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><Image src={booking.moviePoster} alt="Movie" width={60} height={60} /></td>
                <td>{booking.movieName}</td>
                <td>{booking.moviePrice}</td>
                <td>{booking.email}</td>
                <td>{booking.seatNo}</td>
                <td ><span className={booking.status==='pending'&&'text-yellow-500'||booking.status==='approved'&&'text-green-500'||booking.status==='rejected'&&'text-red-500'||booking.status==='requested for refund'&&'text-yellow-300'||booking.status==='accepted refund'&& 'text-green-500'}>{booking.status==='requested for refund'?"wait for refund":booking.status}</span></td>
                <td className=' flex flex-col justify-center gap-2 items-center'>
              <button className='text-white bg-red-500 btn'onClick={()=>handleCancelBooking(booking._id)}>Cancel Booking</button>
              
         {booking.status==='requested for refund'?<button className='bg-red-700 text-white btn' onClick={()=>handleCancelRefund(booking._id)}>Cancel refund</button>:<button className='text-white bg-yellow-500 btn'onClick={()=>handleRequestForRefund(booking._id)} disabled={booking.status==='accepted refund'}>Request for refund</button>}
              </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
