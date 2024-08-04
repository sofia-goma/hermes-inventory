import { useState } from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import EditProductModal from "./EditProductModal";
import AddProduct from "./AddProduct";
export default function Layout() {
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
      <>
         <Header />
         <SearchBar
            handleClick={handleAddProduct}
         />
         <Outlet />
         <AddProduct
            isOpen={isEditModalOpen}
            onClose={() => setEditModalOpen(false)}
            onSave={handleSave}
         />
      </>
   );
}