// ******************************** Author : Kishanth S ********************************
// truncateProductDescription.ts

export const truncateProductDescription = (
  description: string,
  screenWidth: number,
): string => {
  const lgMaxLength = 80 // Maximum length for large screens
  const mdMaxLength = 40 // Maximum length for medium screens
  const smMaxLength = 20 // Maximum length for small screens

  if (screenWidth >= 1024) {
    // Large screens
    if (description.length > lgMaxLength) {
      return description.substring(0, lgMaxLength - 3) + '...'
    }
  } else if (screenWidth >= 768) {
    // Medium screens
    if (description.length > mdMaxLength) {
      return description.substring(0, mdMaxLength - 3) + '...'
    }
  } else {
    // Small screens
    if (description.length > smMaxLength) {
      return description.substring(0, smMaxLength - 3) + '...'
    }
  }

  return description
}
