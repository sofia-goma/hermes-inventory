import { Outlet, useNavigate } from "react-router-dom";

export default function AuthLayout() {
   const isLogged = localStorage.getItem('accessToken');
   console.log(isLogged);

   if (isLogged) {
      return <Outlet />
   }
   return <Outlet />
}