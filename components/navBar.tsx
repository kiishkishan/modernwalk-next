// ******************************** Author : Kishanth S ********************************
// components/Navbar.tsx

import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-100 py-4 text-gray-800">
      <Link href={'/'}>
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-semibold">Modern Walk</h1>
        </div>
      </Link>
    </nav>
  )
}

export default Navbar
