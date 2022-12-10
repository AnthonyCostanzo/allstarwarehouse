const SearchBox = ({ onSearchChange, searchField }) => {
  return (
    <input
      onChange={onSearchChange}
      type="search"
      placeholder="search for an item ... "
      className="w-80 border-[1.5px] p-1 border-black"
    />
  );
};

export default SearchBox;
