// ******************************** Author : Kishanth S ********************************
// utils/api.ts

import axios from 'axios'

const sortByLatest = (data: any[]) => {
  return data.sort(
    (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
  )
}

const fetchClothingData = async (category: string) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`,
    )
    const sortedData = sortByLatest(response.data)
    return sortedData
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}

export const fetchMensClothing = async () => {
  return fetchClothingData("men's clothing")
}

export const fetchWomensClothing = async () => {
  return fetchClothingData("women's clothing")
}
