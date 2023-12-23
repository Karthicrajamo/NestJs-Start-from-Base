import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-slate-200'>
        <Link href={'/'} className='mr-5'>NextJs</Link>
        <Link href={'/users'}>User</Link>
    </div>
  )
}

export default NavBar