import React, { useState, useEffect } from "react";

const ProductForm = ({ onAdd, onUpdate, editingProduct, setEditingProduct }) => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        category: "",
        description: "",
        image: "",
        id: null,
    });

    // Populate form if editing
    useEffect(() => {
        if (editingProduct) {
            setProduct(editingProduct);
        }
    }, [editingProduct]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!product.title || !product.price || !product.category) {
            alert("Please fill in required fields");
            return;
        }

        if (product.id) {
            // Editing existing product
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(product),
                });
                const updatedProduct = await response.json();
                onUpdate(updatedProduct); // Update local state
                setEditingProduct(null);  // Reset editing state
            } catch (error) {
                console.error("Error updating product:", error);
            }
        } else {
            // Adding new product
            onAdd(product);
        }

        setProduct({ title: "", price: "", category: "", description: "", image: "", id: null });
    };

    return (
        <form onSubmit={handleSubmit} className="text-center">
            <h2 className="text-xl font-bold mb-4 text-start">{product.id ? "Edit Product" : "Add New Product"}</h2>

            <input type="text" name="title" placeholder="Title" value={product.title} onChange={handleChange} className="border p-2 w-full mb-2" required />
            <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} className="border p-2 w-full mb-2" required />

            <select name="category" value={product.category} onChange={handleChange} className="border p-2 w-full mb-2" required>
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>

            <input type="text" name="image" placeholder="Image URL" value={product.image} onChange={handleChange} className="border p-2 w-full mb-2" />
            <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} className="border p-2 w-full mb-2" />

            <button type="submit" className="bg-blue text-white px-4 py-2 rounded hover:bg-blue text-center mx-auto">
                {product.id ? "Update Product" : "Add Product"}
            </button>
        </form>
    );
};

export default ProductForm;
