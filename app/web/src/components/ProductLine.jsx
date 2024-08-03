import React from 'react';

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
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 -ml-0.5" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
               </svg>
               Supprimer
            </button>

            <button type="button" data-drawer-target="drawer-update-product" data-drawer-show="drawer-update-product" aria-controls="drawer-update-product" class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 -ml-0.5" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
               </svg>
               Modifier
            </button>
         </div>

      </div>
   );
};