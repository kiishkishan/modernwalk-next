// ******************************** Author : Kishanth S ********************************
// utils/flashSaleData.ts

import { useState, useEffect } from 'react'
import { fetchMensClothing, fetchWomensClothing } from '@/utils/api'
import { shuffleAndInterleave } from '@/utils/shuffleAndInterleave'
import { ClothingItemTypes } from '@/constants/types'

const FlashSaleData = () => {
  const [clothingData, setClothingData] = useState<ClothingItemTypes[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const mensData = await fetchMensClothing()
      const womensData = await fetchWomensClothing()

      const interleavedData: ClothingItemTypes[] = shuffleAndInterleave(
        mensData,
        womensData,
      )

      const selectedData: ClothingItemTypes[] = interleavedData.slice(0, 4)

      console.log(selectedData)

      setClothingData(selectedData)
    }

    fetchData()
  }, [])

  return clothingData
}

export default FlashSaleData
