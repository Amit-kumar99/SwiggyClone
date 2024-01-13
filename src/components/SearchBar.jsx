const SearchBar = () => {
  return (
    <div className="flex border pr-2 mt-5 ml-3 mb-4 justify-between rounded-md">
      <div className="w-full pr-2">
        <input className="w-full p-3" type="text" placeholder="Search"/>
      </div>
      <div className="mt-3">
        <i className="fa-solid fa-magnifying-glass"/>
      </div>
    </div>
  )
}

export default SearchBar