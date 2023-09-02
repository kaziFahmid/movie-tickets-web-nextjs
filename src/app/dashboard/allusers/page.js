'use client'
import Image from 'next/image';
import useSWR,{ mutate }from 'swr'; 


const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};










const AllUsers = () => {
  const { data: users, error } = useSWR('http://localhost:3000/api/users',fetcher);


  if (error) {
    return <div>Error loading data</div>;
  }
  const handleMakeAdmin = async (_id) => {
    try {
      await fetch(`http://localhost:3000/api/users/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role: 'admin' }),
      });
      
      mutate('http://localhost:3000/api/users');
;
    } catch (error) {
      console.error('Error making user admin:', error);
    }
  };

  const handleMakeUser = async (_id) => {
    try {
      await fetch(`http://localhost:3000/api/users/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role: 'user' }),
      });
   
      mutate('http://localhost:3000/api/users');
    } catch (error) {
      console.error('Error making user a user:', error);
    }
  };



  
  return (
 <>
      <h1 className='text-center mt-28 text-4xl text-white mb-4'>All users</h1>
      <div className="overflow-x-auto ">
        <table className="table">
          <thead>
            <tr className='bg-yellow-500 text-black'>
              <th>Sl</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {users?.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                
                <div className="avatar">
  <div className="w-12 rounded-full">
    <Image src={user?.image} width={20}height={20} alt='avatar' />
  </div>
</div>
                
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td className='flex justify-center items-center gap-6'>
                  <button onClick={()=>handleMakeAdmin(user?._id)} className='btn bg-yellow-400 text-black' disabled={user?.role==='admin'}>Admin</button>
                  <button onClick={()=>handleMakeUser(user?._id)} className='btn bg-green-400 text-black' disabled={user?.role==='user'}>User</button>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>
  );
};

export default AllUsers;
