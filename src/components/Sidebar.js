import { GiAtom } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import Search from './Search'

const Sidebar = () => {
   return (
      <aside className="w-72 py-8 px-5 flex-shrink-0 h-screen bg-gray-100 overflow-y-auto">
         <a
            className="flex items-center text-pink-600"
            href="#">
            <div className="relative">
               <GiAtom className="h-16 w-16 inline-block animate-rotate origin-center"/>
               <div className="absolute inset-0 flex items-center justify-center">
                  <FaHeart className="h-2 w-2" />
               </div>
            </div>
            <div className="ml-2 inline-block text-3xl">react-icons</div>
         </a>
         <Search />
      </aside>
   )
}

export default Sidebar
