import { NextResponse } from 'next/server';

export const middleware = async (request) => {
  const sessionEmail = request.cookies.get('sessionEmail')?.value;

const{pathname}=request.nextUrl
  let res = await fetch(`${process.env.NEXT_PUBLIC_DEV_API_URL}/api/admin/${sessionEmail}`);
  let admin = await res.json();
  if (!sessionEmail) {
    return NextResponse.redirect(new URL(`/login?redirectUrl=${pathname}`, request.url));
  }

  if (admin?.result === false && request.nextUrl.pathname.startsWith('/dashboard/allusers')) {
    return NextResponse.redirect(new URL('/', request.url));
  }


  if (admin?.result === false && request.nextUrl.pathname.startsWith('/dashboard/managebookings')) {
    return NextResponse.redirect(new URL('/', request.url));
  }








  let response = await fetch(`${process.env.NEXT_PUBLIC_DEV_API_URL}/api/user/${sessionEmail}`);
  let user = await response.json();

  if (user?.result === false && request.nextUrl.pathname.startsWith('/dashboard/mybookings')) {
    return NextResponse.redirect(new URL('/', request.url));
  }






};

export const config = {
  matcher: ['/dashboard/:path*','/dashboard/allusers',
  '/dashboard/managebookings',
  '/dashboard/mybookings']
};