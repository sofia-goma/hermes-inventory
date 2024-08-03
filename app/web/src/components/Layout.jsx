import SearchBar from "./SearchBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
   return (
      <>
         <Header />
         <SearchBar />
         <Outlet />
      </>
   );
}