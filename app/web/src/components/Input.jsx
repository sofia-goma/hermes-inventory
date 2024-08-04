export default function Input({
   label,
   placeholder,
   inputType,
   register,
   tagRef,
   className,
   inputClassName
}) {
   return (
      <div>
         <div className={`mb-5 ${className}`}>
            <label
               for={tagRef}
               className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input
               placeholder={placeholder}
               type={inputType}
               {...register(tagRef, { required: true })}
               className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${inputClassName}`}
            />
         </div>
      </div>
   );
}