
export default function Button({
   title,
   type,
   className = '',
   children,
   handleClick,
   classNameT = ''
}) {
   return (
      <button
         onClick={handleClick}
         type={type}
         className={`flex-shrink-0 inline-flex items-center justify-center py-2 px-3 text-xs font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 gap-3 ${className}`}>
         {children}
         <p className={`${classNameT}`}>
            {title}
         </p>
      </button>
   );
}