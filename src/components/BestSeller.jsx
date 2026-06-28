import { PiCrownLight } from 'react-icons/pi'
import Heading from './Heading'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import ProductItemSkeleton from './Skeletons/ProductItemSkeleton'

const BestSeller = () => {
    const { products, isLoading } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            const bestProduct = products.filter((item) => item.bestseller);

            const bags = bestProduct.filter(item => item.category === "Bags").slice(0, 2);
            const women = bestProduct.filter(item => item.category === "Women").slice(0, 2);
            const men = bestProduct.filter(item => item.category === "Men").slice(0, 2);
            const kids = bestProduct.filter(item => item.category === "Kids").slice(0, 2);

            setBestSeller([...bags, ...women, ...men, ...kids]);
        }
    }, [products])

    return (
        <div className='my-10'>
            <div className='mt-8 mb-6'>
                <Heading
                    text='Best sellers'
                    title='Our best selling pieces'
                    icon={<PiCrownLight />}
                    content='All Products'
                />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6 mt-6 px-4 sm:px-0'>

                {isLoading ? [...Array(8)].map((_, i) => (
                    <ProductItemSkeleton key={i} />
                )) : bestSeller.map((item) => (
                    // ✅ explicitly pass karo
                    <ProductItem
                        key={item._id}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        bestseller={item.bestseller}
                    />
                ))
                }

            </div>
        </div>
    )
}

export default BestSeller