import { useRef } from 'react'
import { MdClose } from "react-icons/md"
import { IoSearchOutline } from 'react-icons/io5'
import useSearchBar from '../hooks/useSearchBar'
import SearchSuggestions from './SearchSuggestions'

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch, filtered, handleSelect, handleEnter } = useSearchBar()
    const inputRef = useRef(null)

    const handleOverlayClick = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setShowSearch(false)
        }
    }

    if (!showSearch) return null

    return (
        <div
            className='fixed inset-0 bg-black/80 z-50'
            onMouseDown={handleOverlayClick}
        >
            <div
                ref={inputRef}
                className='absolute top-0 sm:top-[20%] left-0 right-0 sm:mx-auto sm:max-w-xl bg-white sm:rounded-xl shadow-md overflow-hidden'
            >
                {/* Input */}
                <div className='flex items-center gap-3 px-4 py-3'>
                    <IoSearchOutline className='text-gray-500 text-xl shrink-0' />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleEnter}
                        placeholder='Search products...'
                        className='flex-1 outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent'
                        autoFocus
                    />
                    {search && (
                        <MdClose
                            onClick={() => setSearch('')}
                            className='text-xl text-gray-400 cursor-pointer hover:text-black shrink-0'
                        />
                    )}
                </div>

                {/* Suggestions */}
                <SearchSuggestions
                    filtered={filtered}
                    search={search}
                    onSelect={handleSelect}
                />
            </div>
        </div>
    )
}

export default SearchBar