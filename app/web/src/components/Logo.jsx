import { Link } from "react-router-dom";

export default function Logo() {
   return (
      <Link
         to={'/home'}
         className="flex items-center space-x-3 rtl:space-x-reverse"
      >
         <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
         <span className="self-center text-2xl font-semibold whitespace-nowrap">HERMES</span>
      </Link>
   )
}