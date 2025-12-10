import React from 'react'

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-contain mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800 mb-2 text-center product-title">{product.title}</h2>
      <p className="text-gray-600 mb-2">Category: {product.category}</p>
      <p className="text-blue-600 font-semibold mb-2">${product.price}</p>
      <div className="flex gap-2">
        {/* Edit Button */}
        <button
          onClick={() => onEdit(product)}
          className="flex items-center gap-1 px-3 py-1 rounded-lg bg-yellow-100 text-yellow-700 font-semibold shadow-sm 
               hover:bg-yellow-300 hover:text-yellow-900 transition-colors duration-300 transform hover:scale-105"
        >
          <i className="bi bi-pencil-square"></i>
        </button>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(product.id)}
          className="flex items-center gap-1 px-3 py-1 rounded-lg bg-red-100 text-red-700 font-semibold shadow-sm 
               hover:bg-red-300 hover:text-red-900 transition-colors duration-300 transform hover:scale-105"
        >
          <i className="bi bi-trash-fill"></i>
        </button>
        {/* <i
          className="bi bi-pencil-square text-yellow-500 cursor-pointer hover:text-yellow-600"
          title="Edit Product"
          onClick={() => onEdit(product)}
        ></i>
        <i
          className="bi bi-trash-fill text-red-500 cursor-pointer hover:text-red-600"
          title="Delete Product"
          onClick={() => onDelete(product.id)}
        ></i> */}
      </div>
    </div>
  )
}

export default ProductCard;