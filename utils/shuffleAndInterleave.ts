// ******************************** Author : Kishanth S ********************************
// utils/shuffleAndInterleave.ts

import { ClothingItemTypes } from '@/constants/types'

export const shuffleAndInterleave = (
  array1: ClothingItemTypes[],
  array2: ClothingItemTypes[],
): ClothingItemTypes[] => {
  const interleavedArray: ClothingItemTypes[] = []
  let menIndex = 0
  let womenIndex = 0

  while (menIndex < array1.length || womenIndex < array2.length) {
    if (menIndex < array1.length) {
      interleavedArray.push(array1[menIndex])
      menIndex++
    }
    if (womenIndex < array2.length) {
      interleavedArray.push(array2[womenIndex])
      womenIndex++
    }
  }

  return interleavedArray
}
