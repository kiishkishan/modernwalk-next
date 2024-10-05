'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { truncateProductDescription } from '@/utils/truncateProductDescription'
import { ClothingItemTypes } from '@/constants/types'

const ItemCard: React.FC<ClothingItemTypes> = ({
  title,
  price,
  description,
  image,
  category,
}) => {
  // State to track screen width
  const [screenWidth, setScreenWidth] = useState<number | null>(null)

  useEffect(() => {
    // Set the initial screen width on component mount
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth)
    }

    // Update screen width on window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Truncate description and title based on the screen width
  const truncatedDescription = truncateProductDescription(
    description,
    screenWidth ?? 1440, // Default to 1440px if screenWidth is not set yet
  )
  const truncatedTitle = truncateProductDescription(title, screenWidth ?? 1440)

  return (
    <div className="relative m-2 flex flex-col rounded-2xl bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
      <h2 className="mb-2 line-clamp-2 overflow-hidden px-4 pt-4 text-center text-lg font-bold">
        {truncatedTitle}
      </h2>
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl sm:h-44 md:h-48 lg:h-56">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div
        className={`flex flex-col justify-between rounded-b-2xl border-t border-gray-300 p-4 ${
          category === "men's clothing"
            ? 'bg-green-500'
            : category === "women's clothing"
              ? 'bg-red-500'
              : 'bg-gray-500'
        }`}
      >
        <p className="mb-2 text-center font-bold text-blue-600">
          Price: ${price}
        </p>
        <div className="lg:h-15 h-auto flex-grow overflow-y-auto">
          <p className="text-sm">{truncatedDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
