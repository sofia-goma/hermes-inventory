import { useState } from 'react';
import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai';
import EditProductModal from './EditProductModal';

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
//

export default function Product({
   id,
   product,
   category,
   status,
   deliveryDate,
   created,
   lastUpdated,
   price,
   detail,
}) {
   const [isEditModalOpen, setEditModalOpen] = useState(false);
   const handleEditClick = () => {
      console.log('Hello');
      // setEditModalOpen(true);
   };

   const handleSave = (updatedProduct) => {
      // setProduct(updatedProduct);
   };

   const handleAddProduct = () => {
      console.log('Add Product');
      setEditModalOpen(!isEditModalOpen);
   }
   return (
      <div className='border hover:cursor-pointer border-gray-200 shadow-md hover:bg-gray-100 p-3'>
         <div className="font-medium text-gray-500">
            <div className="flex flex-col space-y-4">
               <div className="flex justify-between">
                  <span className="font-bold">ID:</span>
                  <span>{id}</span>
               </div>
               <div className="flex justify-between">
                  <span className="font-bold">Product:</span>
                  <span>{product}</span>
               </div>
               <div className="flex justify-between">
                  <span className="font-bold">Category:</span>
                  <span>{category}</span>
               </div>
               <div className="flex justify-between">
                  <span className="font-bold">Status:</span>
                  <span>{status}</span>
               </div>
               <div className="flex justify-between">
                  <span className="font-bold">Delivery Date:</span>
                  <span>{deliveryDate ? new Date(deliveryDate).toLocaleDateString() : 'N/A'}</span>
               </div>
               <div className="flex justify-between">
                  <span className="font-bold">Created:</span>
                  <span>{new Date(created).toLocaleDateString()}</span>
               </div>
               <div className="flex justify-between">
                  <span className="font-bold">Last Updated:</span>
                  <span>{new Date(lastUpdated).toLocaleDateString()}</span>
               </div>
               <div className="flex justify-between">
                  <span className="font-bold">Price:</span>
                  <span>${(price / 100).toFixed(2)}</span>
               </div>
               {detail && (
                  <div className="flex justify-between">
                     <span className="font-bold">Detail:</span>
                     <span>{detail}</span>
                  </div>
               )}
            </div>
         </div>

         <div className="flex gap-4 items-center mt-4">
            <button type="button" data-modal-target="delete-modal" data-modal-toggle="delete-modal" class="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center">
               <AiOutlineDelete
                  className="h-4 w-4 mr-2 -ml-0.5"
                  size={18}
                  fill="currentColor"
               />
               Supprimer
            </button>

            <button
               type="button"
               onClick={() => setEditModalOpen(!isEditModalOpen)}
               className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
               <AiFillEdit
                  className="h-4 w-4 mr-2 -ml-0.5"
                  size={18}
               />
               Modifier
            </button>
         </div>
         <EditProductModal
            isOpen={isEditModalOpen}
            onClose={() => setEditModalOpen(false)}
            onSave={handleSave}
         />
      </div>
   );
}