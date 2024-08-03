import { useState } from "react";
import Product from "../components/ProductLine";
import EditProductModal from "../components/EditProductModal";
import data from "../data";
export default function Home() {
   const [product, setProduct] = useState({
      id: '12345',
      product: 'Sample Product',
      category: 'Electronics',
      status: 'NO_DELIVRE',
      deliveryDate: '2024-12-31T00:00:00.000Z',
      created: '2024-01-01T00:00:00.000Z',
      lastUpdated: '2024-07-01T00:00:00.000Z',
      price: 9999, // Price in cents
      detail: 'This is a sample product detail.',
   });
   const [isEditModalOpen, setEditModalOpen] = useState(false);

   const handleEditClick = () => {
      setEditModalOpen(true);
   };

   const handleSave = (updatedProduct) => {
      setProduct(updatedProduct);
   };
   const [isShown, setIsShown] = useState(true);
   return (
      <div className="px-2 md:px-0 container py-4">
         <div className="w-full py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {
               data.map((item, i) => (
                  <Product 
                     key={item.id}
                     id={item.id}
                     product={item.product}
                     category={item.category}
                     status={item.status}
                     deliveryDate={item.deliveryDate}
                     created={item.created}
                     lastUpdated={item.lastUpdated}
                     price={item.price}
                     detail={item.detail}
                  />
               ))
            }

         </div>
         <button
            onClick={handleEditClick}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
         >
            Edit Product
         </button>

         <EditProductModal
            isOpen={isEditModalOpen}
            onClose={() => setEditModalOpen(false)}
            product={product}
            onSave={handleSave}
         />

      </div>
   )
}