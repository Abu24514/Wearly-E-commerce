import { PiSparkleBold } from 'react-icons/pi'
import Heading from './Heading'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'


const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const filtered = products
        .filter(item => item.bestseller !== true)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      const bags = filtered.filter(item => item.category === "Bags").slice(0, 1);
      const women = filtered.filter(item => item.category === "Women").slice(0, 2);
      const men = filtered.filter(item => item.category === "Men").slice(0, 2);
      const kids = filtered.filter(item => item.category === "Kids").slice(0, 1);

      setLatestProducts([...bags, ...women, ...men, ...kids]);
    }
  }, [products])

  return (
    <div className='my-10'>
      <div className='mt-8 mb-6'>
        <Heading text='New Arrivals' title='Fresh fits in our latest drop' content='See All' icon={<PiSparkleBold />} />
      </div>
      {/* rendering */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-5'>
        {latestProducts.map((item, index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} bestseller={item.bestseller} />
        ))}

      </div>
      <div className="h-px  bg-neutral-200 sm:mt-25 mt-15" />
    </div>
  )
}

export default LatestCollection;
