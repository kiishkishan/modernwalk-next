// ******************************** Author : Kishanth S ********************************
// components/Loading.tsx

import React from 'react'

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200">
      <p className="text-lg font-semibold">Loading...</p>
    </div>
  )
}

export default Loading
