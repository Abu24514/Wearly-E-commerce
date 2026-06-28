import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Heading from '../components/Heading'
import { TbCirclesRelation } from 'react-icons/tb';
import ProductItem from './ProductItem';
import ProductItemSkeleton from './Skeletons/ProductItemSkeleton';

const RelatedProduct = ({ category, subCategory }) => {
    const { products, isLoading } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productCopy = [...products]
            productCopy = productCopy.filter((item) => category === item.category);
            productCopy = productCopy.filter((item) => subCategory === item.subCategory);
            setRelated(productCopy.slice(0, 4));
        }
    }, [products])

    return (
        <div className='my-24'>
            <Heading title='You might also like' content='All Products' text='Related Products' icon={<TbCirclesRelation />} />
            <div className='grid grid-cols-1 mt-6 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-5'>
                {isLoading
                    ? [...Array(4)].map((_, i) => (
                        <ProductItemSkeleton key={i} />
                    ))
                    : related.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} bestseller={item.bestseller} />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProduct