const Search = ({ placeholder }) => {
   return (
      <div className="mt-5">
         <input 
            className="p-3 w-full rounded-md bg-gray-200 border-2 border-gray-300 focus:bg-white focus:outline-none focus:border-pink-600"
            type="text" 
            placeholder={placeholder}
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = placeholder}
         />
      </div>
   )
}

Search.defaultProps = {
   placeholder: '🔍  Search'
}

export default Search
