type SearchBarProps = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({ setTitle }: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
      <input
        type="text"
        placeholder="Enter a title..."
        onChange={handleChange}
        className="border border-gray-200 rounded p-2 mt-2 w-full"
      />
    </div>
  );
}

export default SearchBar;
