import { NextResponse } from 'next/server';

export const middleware = async (request) => {
  const sessionEmail = request.cookies.get('sessionEmail')?.value;

const{pathname}=request.nextUrl
  let res = await fetch(`http://localhost:3000/api/admin/${sessionEmail}`);
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








  let response = await fetch(`http://localhost:3000/api/user/${sessionEmail}`);
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