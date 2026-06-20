import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { PiCrownLight, PiSparkleBold } from 'react-icons/pi' // Icon import kiya

// Props me 'bestseller' add kiya
const ProductItem = ({ id, image, name, price, bestseller }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link
      to={`/product/${id}`}
      className='text-gray-700 cursor-pointer group block'
    >
      <div className='overflow-hidden relative rounded-md aspect-square bg-gray-100'>

        <div className="absolute top-3 left-3 z-10">
          <div
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-medium shadow-sm ${bestseller
              ? "bg-black text-white"
              : "bg-white text-black border border-gray-200"
              }`}
          >
            {bestseller ? (
              <>
                <PiCrownLight className="text-sm" />
                Best Seller
              </>
            ) : (
              <>
                <PiSparkleBold className="text-sm" />
                New
              </>
            )}
          </div>
        </div>

        <img
          src={image[0]}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-black py-3 text-center text-sm font-semibold tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          VIEW PRODUCT
        </div>

      </div>

      <p className='pt-3 pb-1 text-sm truncate'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem