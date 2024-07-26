import { navigationLink } from '../data/navigation';
import { NavLink, Link } from "react-router-dom";

export default function Navigation() {
   return (
      <nav className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
         <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
               <NavLink
                  to="/home"
                  end
                  className={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0`}
               >
                  Acceuil
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/home/about"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ${({ isActive }) => isActive ? 'text-red-500' : ''}`}
               >
                  About
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/home/services"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}
               >
                  Services
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/home/contact"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}
               >
                  Contact
               </NavLink>
            </li>
         </ul>
      </nav>
   );
}