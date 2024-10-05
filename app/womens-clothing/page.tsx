// ******************************** Author : Kishanth S ********************************
// app/mens-clothing/page.tsx

import React from 'react'
import { fetchWomensClothing } from '@/utils/api'
import CategoryPage from '@/components/categoryPage'
import { ClothingItemTypes } from '@/constants/types'

const WomensClothingPage = async () => {
  // Fetch data for men's clothing items
  const womensClothingData: ClothingItemTypes[] = await fetchWomensClothing()

  return (
    <CategoryPage title="Women's Clothing" categoryData={womensClothingData} />
  )
}

export default WomensClothingPage
