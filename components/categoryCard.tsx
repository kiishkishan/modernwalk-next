// ******************************** Author : Kishanth S ********************************
//

import React from 'react'
import Link from 'next/link'

const CategoryCard: React.FC<{ title: string }> = ({ title }) => {
  // Determine background color class based on title
  const bgColorClass =
    title.toLowerCase() === "men's clothing" ? 'bg-green-500' : 'bg-red-500'

  // Determine URL based on title
  const url =
    title.toLowerCase() === "men's clothing"
      ? '/mens-clothing'
      : '/womens-clothing'

  return (
    <div className="w-full px-2 lg:w-1/2">
      <Link href={url}>
        <div
          className={`flex h-48 items-center justify-center rounded-lg shadow-md sm:h-40 md:h-52 lg:h-64 ${bgColorClass}`}
        >
          <p className="text-lg font-semibold"> {title} </p>
        </div>
      </Link>
    </div>
  )
}

export default CategoryCard
