import { FaSearch, FaPlus } from 'react-icons/fa';


export default function SearchBar({ handleClick }) {
   return (
      <div className='border-b'>
         <div className='px-2 md:px-0 container'>
            <div class="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between py-3">
               <div class="w-full md:w-1/2">
                  <form class="flex items-center">
                     <label for="simple-search" class="sr-only">Search</label>
                     <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                           <FaSearch size={18} className='fill-gray-500 hover:cursor-pointer' />
                        </div>
                        <input type="text" id="simple-search" placeholder="Chercher un produit" required="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 outline-none" />
                     </div>
                  </form>
               </div>
               <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                  <button
                     type="button"
                     class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                     onClick={handleClick}>
                     <FaPlus size={18} className='h-3.5 w-3.5 mr-1.5 -ml-1' />
                     Ajouter produit
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}