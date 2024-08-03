import React, { useState } from 'react';

// interface EditProductModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   product: ProductProps;
//   onSave: (updatedProduct: ProductProps) => void;
// }

// interface ProductProps {
//   id: string;
//   product: string;
//   category: string;
//   status: string;
//   deliveryDate?: string | null;
//   created: string;
//   lastUpdated: string;
//   price: number;
//   detail?: string | null;
// }

export default function EditProductModal({ isOpen, onClose, product, onSave }) {
   const [formData, setFormData] = useState(product);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSave = () => {
      onSave(formData);
      onClose();
   };

   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
         <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            <div className="mb-4">
               <label className="block text-gray-700">Product</label>
               <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
               />
            </div>
            <div className="mb-4">
               <label className="block text-gray-700">Category</label>
               <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
               />
            </div>
            <div className="mb-4">
               <label className="block text-gray-700">Status</label>
               <input
                  type="text"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
               />
            </div>
            <div className="mb-4">
               <label className="block text-gray-700">Delivery Date</label>
               <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate ? formData.deliveryDate.split('T')[0] : ''}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
               />
            </div>
            <div className="mb-4">
               <label className="block text-gray-700">Price</label>
               <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
               />
            </div>
            <div className="mb-4">
               <label className="block text-gray-700">Detail</label>
               <textarea
                  name="detail"
                  value={formData.detail || ''}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
               />
            </div>
            <div className="flex justify-end space-x-2">
               <button
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
               >
                  Cancel
               </button>
               <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
               >
                  Save
               </button>
            </div>
         </div>
      </div>
   );
};