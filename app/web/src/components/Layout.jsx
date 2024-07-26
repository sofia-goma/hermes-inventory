import SearchBar from "./SearchBar";
import Header from "./Header";
// import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Product from "./Product";
// import DeleteModal from "./DeleteModal";
import { useState } from "react";
// import Shared from "./shared/shared";
// import PreviewDrawer from "./shared/PreviewDrawer";
// import ModalHeader from "./shared/ModalHeader";
import TableNavigation from "./TableNavigation";

export default function Layout() {
   const [isShown, setIsShown] = useState(true);
   return (
      <>
         <Header />
         <SearchBar />
         {/* <Shared /> */}
         {/* <ModalHeader /> */}

         {/* <PreviewDrawer /> */}
         {/* <DeleteModal className={isShown ? 'hidden': 'hidden'} /> */}
         <Navbar />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <TableNavigation />
         {/* <Outlet /> */}
      </>
   );
}