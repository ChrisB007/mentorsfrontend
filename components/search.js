export default function Example() {
  return (
    <div>
      <div className="mt-1 relative flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search for mentor"
          className="shadow-sm text-center h-10 m-2 focus:ring-gray-500 focus:border-gray-500 block w-full pr-12  sm:w-80 sm:text-sm lg:w-80 border-gray-300 rounded-md"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <button className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
