import { MdClose } from "react-icons/md"

const SearchSuggestions = ({ filtered, search, onSelect }) => {
    if (filtered.length > 0) return (
        <ul className='border-t border-gray-100'>
            {filtered.map((product) => (
                <li
                    key={product._id}
                    onMouseDown={() => onSelect(product._id)}
                    className='flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 cursor-pointer'
                >
                    <img
                        src={product.image[0]}
                        alt={product.name}
                        className='w-9 h-9 object-cover rounded-md shrink-0'
                    />
                    <div className='flex flex-col'>
                        <span className='text-sm text-gray-800'>{product.name}</span>
                        <span className='text-xs text-gray-400'>{product.category}</span>
                    </div>
                    <span className='ml-auto text-sm font-medium text-gray-700'>
                        ₹{product.price}
                    </span>
                </li>
            ))}
        </ul>
    )

    if (search.trim()) return (
        <p className='px-4 py-3 text-sm text-gray-400 border-t border-gray-100'>
            No products found for "{search}"
        </p>
    )

    return null
}

export default SearchSuggestions