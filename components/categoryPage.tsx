// ******************************** Author : Kishanth S ********************************
// components/CategoryPage.tsx

import React from 'react'
import { ClothingItemTypes } from '@/constants/types'
import ItemCard from './itemCard'

interface CategoryPageProps {
  title: string
  categoryData: ClothingItemTypes[]
}

const CategoryPage: React.FC<CategoryPageProps> = ({ title, categoryData }) => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-semibold sm:text-3xl">{title}</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {categoryData.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
            <ItemCard {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
