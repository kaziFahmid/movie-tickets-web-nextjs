
"use client"
import { useSession } from 'next-auth/react';
import useSWR,{mutate} from 'swr'; 
const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};



const useAdmin = () => {
    const { data: session, status } = useSession();
    const{data:admin,error}=useSWR(`https://movie-tickets-web-nextjs.vercel.app/api/admin/${session?.user?.email}`,fetcher)
    
  return [admin]
}

export default useAdmin
