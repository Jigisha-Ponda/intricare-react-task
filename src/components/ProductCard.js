import React from 'react'

function ProductCard({product}) {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-contain mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">{product.title}</h2>
      <p className="text-gray-600 mb-2">Category: {product.category}</p>
      <p className="text-blue-600 font-semibold mb-2">${product.price}</p>
    </div>
  )
}

export default ProductCard;