import { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const [category, setCategory] = useState([]);
    const [subcategory, setSubCategory] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItem] = useState({})
    const navigate = useNavigate();

    const currency = '₹';
    const delivery_fee = 10;

    const applyFilter = () => {
        let productCopy = products.slice();

        if (search.trim()) {
            const query = search.toLowerCase().trim();
            productCopy = productCopy.filter(item => {
                const nameMatch = item.name.toLowerCase().split(" ").some(word => word.startsWith(query));
                const categoryMatch = item.category.toLowerCase().startsWith(query);
                return nameMatch || categoryMatch;
            });
        }

        if (category.length > 0) {
            productCopy = productCopy.filter(item => category.includes(item.category));
        }

        if (subcategory.length > 0) {
            productCopy = productCopy.filter(item => subcategory.includes(item.subCategory));
        }

        setFilterProducts(productCopy);
    };

    useEffect(() => {
        applyFilter();
    }, [category, subcategory, search]);

    const addToCart = async (itemId, size) => {
        const cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }
    const updateQuantity = (itemId, size, quantity) => {
        if (quantity < 0) return;

        const cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItem(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;

        for (const items in cartItems) {
            let itemInfo = products.find((p) => p._id === items);

            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount +=
                            itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }

        return totalAmount;
    };

    const value = {
        products, currency, delivery_fee,
        category, setCategory,
        subcategory, setSubCategory,
        filterProducts, setFilterProducts, applyFilter, search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartCount, updateQuantity, getCartAmount ,navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;