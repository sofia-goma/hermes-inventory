export default function Navbar() {
   return (
      <div className="pl-10 text-xs text-gray-700 uppercase bg-gray-50">
         <thead class="">
            <tr>
               <th scope="col" class="p-4">
                  <div class="flex items-center">
                     <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                     <label for="checkbox-all" class="sr-only">checkbox</label>
                  </div>
               </th>
               <th scope="col" class="p-4">Product</th>
               <th scope="col" class="p-4">Category</th>
               <th scope="col" class="p-4">Stock</th>
               <th scope="col" class="p-4">Sales/Day</th>
               <th scope="col" class="p-4">Sales/Month</th>
               <th scope="col" class="p-4">Rating</th>
               <th scope="col" class="p-4">Sales</th>
               <th scope="col" class="p-4">Revenue</th>
               <th scope="col" class="p-4">Last Update</th>
            </tr>
         </thead>
      </div>
   )
}