import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function Header() {
   const navigate = useNavigate();
   const goToLogin = (path) => {
      if (!path) return;
      navigate(path);
   }

   const logout = () => {
      localStorage.clear();
      sessionStorage.clear();
      goToLogin('/login')
   }
   return (
      <header className="bg-white stick w-full z-20 start-0 border-b border-gray-200 sticky top-0">
         <div class="mx-auto max-w-screen-2xl w-full px-4 container">
            <div class="overflow-hidden">
               <div class="flex flex-1 w-full items-center justify-between space-y-2 md:space-y-0 md:space-x-4 p-4">
                  <h1 className="text-gray-500 font-bold italic">
                     HERMESTOCK
                  </h1>
                  <div class="flex items-end justify-end space-y-3 md:space-y-0 md:space-x-3">

                     {/* logout button */}
                     <Button
                        title={'Deconnecter'}
                        handleClick={logout}
                        className='flex-shrink-0 inline-flex items-center justify-center py-2 px-3 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 gap-3'
                     >
                        <AiOutlineLogout
                           size={18}
                           fill='currentColor'
                        />
                     </Button>

                     {/* parametre button */}
                     {/* <Button
                        title={'Profile'}
                        className='hidden md:flex flex-shrink-0 inline-flex items-center justify-center py-2 px-3 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 gap-3'
                     >
                        <AiOutlineUser
                           size={18}
                           fill='currentColor'
                        />
                     </Button> */}
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}