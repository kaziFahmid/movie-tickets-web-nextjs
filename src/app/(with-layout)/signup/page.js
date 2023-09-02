"use client"
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { AiFillGoogleCircle} from 'react-icons/ai';
import Cookies from 'js-cookie';
import { useRouter, useSearchParams } from 'next/navigation';


const Signup = () => {
  const { data: session, status } = useSession();

const search=useSearchParams()
const from= search.get('redirectUrl')||'/'
const {replace}=useRouter()
  let handleSignin = () => {
    signIn('google');


  };
  useEffect(() => {
    const fetchData = async () => {
      if (status === 'authenticated' && session?.user) {
        
        const user = {
          name: session.user?.name,
          email: session.user?.email,
          image: session.user?.image,
          role: "user"
        };
    
        try {
          const response = await fetch('https://movie-tickets-web-nextjs.vercel.app/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
            
          });

          replace(from)
       
          Cookies.set('sessionEmail', session.user.email);
         
        } catch (error) {
    
        }
      }
    };

    fetchData();
  }, [status, session,from,replace]);

  return (
    <div className='flex h-screen justify-center items-center'>

    <div className='text-center bg-yellow-400'>
      <button onClick={handleSignin} className='bg-blue-500 btn text-white'>
       <AiFillGoogleCircle className='text-2xl'/> Login With Google
      </button>






      
    </div>
  </div>
  );
};

export default Signup;



