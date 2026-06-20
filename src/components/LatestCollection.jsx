import { PiSparkleBold } from 'react-icons/pi'
import Heading from './Heading'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'


const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  const newProduct = products.filter(item => (item.bestseller !== true));
  // console.log(newProduct);


  useEffect(() => {
    if (products && products.length > 0) {
      const newProduct = products.filter(item => (item.bestseller !== true));
      const bags = newProduct.filter(item => item.category === "Bags").slice(0, 1); //1
      const women = newProduct.filter(item => item.category === "Women").slice(2, 4);
      const men = newProduct.filter(item => item.category === "Men").slice(1, 2);//1
      const kids = newProduct.filter(item => item.category === "Kids").slice(1, 3);

      setLatestProducts([...bags , ...women , ...men , ...kids])

    }

  }, [])

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

export default LatestCollection
