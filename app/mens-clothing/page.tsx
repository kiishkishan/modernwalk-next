// ******************************** Author : Kishanth S ********************************
// app/mens-clothing/page.tsx

import React from 'react'
import { fetchMensClothing } from '@/utils/api'
import CategoryPage from '@/components/categoryPage'
import { ClothingItemTypes } from '@/constants/types'

const MensClothingPage = async () => {
  // Fetch data for men's clothing items
  const mensClothingData: ClothingItemTypes[] = await fetchMensClothing()

  return <CategoryPage title="Men's Clothing" categoryData={mensClothingData} />
}

export default MensClothingPage
