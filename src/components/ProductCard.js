import React from 'react'

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="border rounded-xl shadow-md flex flex-col items-center bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-64 h-64 object-contain mb-4 p-4"
      />
      <div className="p-4 w-full flex flex-col items-center bg-gray-100 rounded-br-xl rounded-bl-xl">
        <div className="product-details flex flex-col items-center">
        <h2 className="font-bold text-gray-800 mb-2 text-center product-title">{product.title}</h2>
        <p className="text-gray-600 mb-2">Category: {product.category}</p>
        </div>
      
        <p className="text-blue font-semibold mb-2">${product.price}</p>
        <div className="flex gap-2">
          {/* Edit Button */}
          <button
            onClick={() => onEdit(product)}
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-yellow-100 text-yellow-700 font-semibold shadow-sm 
               hover:bg-yellow-300 hover:text-yellow-900 transition-colors duration-300 transform hover:scale-105"
          >
            <i className="bi bi-pencil-square"></i>
            Edit
          </button>

          {/* Delete Button */}
          <button
            onClick={() => onDelete(product.id)}
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-red-100 text-red-700 font-semibold shadow-sm 
               hover:bg-red-300 hover:text-red-900 transition-colors duration-300 transform hover:scale-105"
          >
            <i className="bi bi-trash-fill"></i>
            Delete
          </button>
        </div>
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