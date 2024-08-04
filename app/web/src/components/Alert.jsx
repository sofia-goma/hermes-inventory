import { FaInfoCircle } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
export default function Alert({ description, showVisibility, isVisible, logout, children }) {
   return (
      <div className={`overflow-y-auto overflow-x-hidden asbolut top-0 right-0 left-0 z-50 md:inset-0 h-screen w-screen fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center ${isVisible ? "" : 'hidden'}`}>
         <div className="relative p-4 w-full max-w-md max-h-full flex items-center justify-center">
            <div className="relative bg-gray-50 border border-gray-300 rounded-lg shadow">
               <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal" onClick={showVisibility}>
                  <AiOutlineClose
                     className="w-3 h-3"
                  />
               </button>
               <div className="p-4 md:p-5 text-center">
                  {
                     children ? (
                        <>
                           {children}
                        </>
                     ) : (
                        <FaInfoCircle
                           className='mx-auto mb-4 text-gray-400 w-12 h-12'
                        />
                     )
                  }

                  <h3 className="mb-5 text-lg font-normal text-gray-500">{description}</h3>
                  <button type="button" className="text-gray-50 bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center" onClick={logout}>
                     Yes, I'm sure
                  </button>
                  <button type="button" onClick={showVisibility} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">No, cancel</button>
               </div>
            </div>
         </div>
      </div>
   )
}