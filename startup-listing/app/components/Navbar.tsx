import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth, signIn, signOut } from '@/auth';

const Navbar = async () => {
  const session = await auth();
  return (
    <header className='bg-gray-800 text-white p-4'>
      <nav className='flex justify-between items-center'>
        <Link href={'/'}>
            <Image src='/image.png' alt='logo' width={144} height={50} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href='/startup/create'>
                <span>create</span>
              </Link>
              <form action={async() => {
                'use server'
                await signOut({redirectTo: '/'})  
                }}>
                <button type='submit'>
                  Logout
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form action={async() => {
              'use server'
              await signIn('github')
              }}>
                <button type='submit'>
                  Login
                </button>
              {/* <span>Login</span> */}
            </form>
          )}

        </div>
      </nav>
      Navbar
    </header>
  )
}

export default Navbar
