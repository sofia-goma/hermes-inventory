import { useState } from 'react';
import Input from './Input';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useForm } from 'react-hook-form';


export default function AddProduct({ isOpen, onClose, product, onSave }) {
   const { register, handleSubmit } = useForm();
   const [open, setOpen] = useState(false);
   // const [formData, setFormData] = useState(product);

   const handleChange = (e) => {
      const { name, value } = e.target;
      // setFormData({ ...formData, [name]: value });
   };

   const handleSave = () => {
      onSave(formData);
      onClose();
   };

   const onSubmit = (data) => {
      alert("submit")
      setOpen(!open);
      console.log(data);
   };

   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-center">AJOUTER UN PRODUIT</h2>

            <Input
               register={register}
               inputType="text"
               label="Product"
               tagRef="product"
               className="mb-1"
               inputClassName="w-full p-2 border border-gray-300 rounded mt-1 outline-none bg-white rounded-none"
            />

            <Input
               register={register}
               inputType="text"
               label="Category"
               tagRef="category"
               className="mb-1"
               inputClassName="w-full p-2 border border-gray-300 rounded mt-1 outline-none bg-white rounded-none"
            />

            <Input
               register={register}
               inputType="text"
               label="Status"
               tagRef="status"
               className="mb-1"
               inputClassName="w-full p-2 border border-gray-300 rounded mt-1 outline-none bg-white rounded-none"
            />

            <Input
               register={register}
               inputType="date"
               label="Delivery Date"
               tagRef="deliveryDate"
               className="mb-1"
               inputClassName="w-full p-2 border border-gray-300 rounded mt-1 outline-none bg-white rounded-none"
            />

            <Input
               register={register}
               inputType="number"
               label="Price"
               tagRef="price"
               className="mb-1"
               inputClassName="w-full p-2 border border-gray-300 rounded mt-1 outline-none bg-white rounded-none"
            />

            <Input
               register={register}
               inputType="text"
               label="Detail"
               tagRef="detail"
               className="mb-1"
               inputClassName="w-full p-2 border border-gray-300 rounded mt-1 outline-none bg-white rounded-none"
            />

            <div className="flex justify-end space-x-2">
               <button
                  onClick={onClose}
                  className="p-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
               >
                  Cancel
               </button>

               <button
                  onClick={onClose}
                  className="p-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
               >
                  <AiFillPlusCircle
                     className='h-4 w-4 mr-2 -ml-0.5'
                     size={18}
                  />
                  <span>AJOUTER PRODUIT</span>
               </button>
            </div>

         </form>
      </div>
   );
};