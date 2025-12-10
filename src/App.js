import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products whenever searchTerm or filterCategory changes
  useEffect(() => {
    let updated = [...products];

    if (searchTerm) {
      updated = updated.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCategory) {
      updated = updated.filter(p => p.category === filterCategory);
    }

    setFilteredProducts(updated);
  }, [searchTerm, filterCategory, products]);

  // Add new product
  const handleAddProduct = async (product) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const newProduct = await res.json();
      setProducts([...products, newProduct]);
      setShowModal(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Update product
  const handleUpdateProduct = async (updatedProduct) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${updatedProduct.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      const data = await res.json();
      setProducts(products.map(p => (p.id === data.id ? data : p)));
      setShowModal(false);
      setEditingProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Delete product
  const handleDeleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" });
      setProducts(products.filter(p => p.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Open modal
  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  // Edit product
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-5 py-5">
      <h1 className="text-3xl font-bold text-center">
        Product Management Dashboard
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center my-5 gap-2">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/3"
        />

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/3"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        <button
          onClick={handleOpenAddModal}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
        >
          Add New Product
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => { setShowModal(false); setEditingProduct(null); }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <ProductForm
              onAdd={handleAddProduct}
              onUpdate={handleUpdateProduct}
              editingProduct={editingProduct}
              setEditingProduct={setEditingProduct}
            />
          </div>
        </div>
      )}

      {/* Product Card Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-xl mt-10">
          No Product Found
        </p>
      )}
    </div>
  );
}

export default App;
