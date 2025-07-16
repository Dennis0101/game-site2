export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      onChange={(e) => onSearch(e.target.value)}
      placeholder="상품 검색..."
      className="w-full p-2 my-2 rounded bg-gray-700 text-white"
    />
  )
}
