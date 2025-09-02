import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import SummaryApi from '../common'
import AdminProductCard from '../components/AdminProductCard'
import deleteProduct from '../helpers/deleteProduct'
import { FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify'

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false)
  const [allProduct, setAllProduct] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [productToDelete, setProductToDelete] = useState(null)

  const fetchAllProduct = async() => {
    const response = await fetch(SummaryApi.allProduct.url)
    const dataResponse = await response.json()
    setAllProduct(dataResponse?.data || [])
  }

  useEffect(() => {
    fetchAllProduct()
  }, [])

  const handleDeleteClick = (product) => {
    setProductToDelete(product)
    setShowDeleteModal(true)
  }

  const handleDelete = async () => {
    try {
      const result = await deleteProduct(productToDelete._id)
      if(result.message === "Product deleted successfully") {
        await fetchAllProduct()
        toast("Product deleted successfully")
      } else {
        toast(result.message || "Failed to delete product")
      }
    } catch (error) {
      alert("Error deleting product")
    } finally {
      setShowDeleteModal(false)
      setProductToDelete(null)
    }
  }

  return (
    <div>
      <div className='bg-white py-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>All Product</h2>
        <button className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full' 
          onClick={() => setOpenUploadProduct(true)}>
          Upload Product
        </button>
      </div>

      {/* Product List */}
      <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
        {allProduct.map((product, index) => (
          <div key={index+"allProduct"} className="relative">
            <AdminProductCard data={product} fetchdata={fetchAllProduct}/>
            <button
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              onClick={() => handleDeleteClick(product)}
              title="Delete Product"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="mb-4">Are you sure you want to delete "{productToDelete?.name}"?</p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Product Modal */}
      {openUploadProduct && (
        <UploadProduct 
          onClose={() => setOpenUploadProduct(false)} 
          fetchData={fetchAllProduct}
        />
      )}
    </div>
  )
}

export default AllProducts