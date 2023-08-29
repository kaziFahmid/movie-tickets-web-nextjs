'use client'
import Image from 'next/image';
import { Toaster, toast } from 'react-hot-toast';
import useSWR,{mutate} from 'swr'; 
const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};









const ManageBookings = () => {
  const { data: bookings, error } = useSWR('http://localhost:3000/api/booking',fetcher);
  





  let handleApprove= async(_id)=>{
    try {
      await fetch(`http://localhost:3000/api/booking/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'approved' }),
      });
      toast.success('Successfully approved!')
      mutate('http://localhost:3000/api/booking');
    } catch (error) {
      console.error('Error making user a user:', error);
    }
  }
  let handleReject=async(_id)=>{
    try {
      await fetch(`http://localhost:3000/api/booking/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'rejected' }),
      });
      toast.success('Successfully rejected!')
      mutate('http://localhost:3000/api/booking');
    } catch (error) {
      console.error('Error making user a user:', error);
    }
  }
  
  
  
let handleAcceptRefund= async(_id)=>{
  try {
    await fetch(`http://localhost:3000/api/booking/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'accepted refund' }),
    });
    toast.success('Successfully Accepted Refund!')
    mutate('http://localhost:3000/api/booking');
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
  <h1 className='text-center mt-28 text-4xl text-white mb-4'>Manage Bookings</h1>
<div className="overflow-x-auto h-96 ">
  <table className="table">
    <thead>
      <tr className='bg-yellow-500 text-black'>
        <th>Sl</th>
        <th>Image</th>
        <th>Movie Name</th>
        <th>Email</th>
        <th>Ticket Price</th>
        <th>Seats</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className='text-white'>
{bookings?.map((x,index)=>{
  return <tr key={index}>
    <td>{index+1}</td>
    <td>
    
    <div className="avatar">
  <div className="w-14 rounded">
    <Image src={x?.moviePoster} width={50} height={50} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
    
    </td>
    <td>{x?.movieName}</td>
    <td>{x?.email}</td>
    <td>{x?.moviePrice}</td>
    <td>{x?.seatNo}</td>
    <td><span className={x.status==='pending'&&'text-yellow-500'||x.status==='approved'&&'text-green-500'||x.status==='rejected'&&'text-red-500'||x.status==='requested for refund'&& 'text-yellow-300'||x.status==='accepted refund'&&'text-green-500'}>{x?.status}</span></td>
    <td className='flex justify-center items-center gap-5'>
      {x.status==='requested for refund'?<button className='btn bg-green-500 text-white'onClick={()=>handleAcceptRefund(x?._id)}>Accept Refund</button>:<button className='btn bg-green-500 text-white'onClick={()=>handleApprove(x?._id)}>Approve</button>}
      
      <button className='btn bg-red-500 text-white' onClick={()=>handleReject(x?._id)}>Reject</button>
    </td>
  </tr>
})}
 
   
    </tbody>
  </table>
</div>
    </div>
  )
}

export default  ManageBookings
