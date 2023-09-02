
"use client"
import { useSession } from 'next-auth/react';
import useSWR,{mutate} from 'swr'; 
const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};



const useUser = () => {
    const { data: session, status } = useSession();
    const{data:user,error}=useSWR(`https://movie-tickets-web-nextjs.vercel.app/api/user/${session?.user?.email}`,fetcher)
    
  return [user]
}

export default useUser
