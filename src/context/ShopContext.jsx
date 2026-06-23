import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userAxios from '../configs/api';
import toast from "react-hot-toast";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [category, setCategory] = useState([]);
    const [subcategory, setSubCategory] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItem] = useState({});
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const currency = '₹';
    const delivery_fee = 10;

    // -------------------- Products --------------------

    const getProductData = async () => {
        try {
            const { data } = await userAxios.get('/api/product/list');
            if (data.success) {
                setProducts(data.products);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    // -------------------- Filters --------------------

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

    // -------------------- Cart --------------------

    const getUserCart = async () => {
        try {
            const { data } = await userAxios.get('/api/cart/get');
            if (data.success) {
                setCartItem(data.cartData);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const addToCart = async (itemId, size) => {
        // pehle local state update - UI fast lagegi
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

        // phir backend me save karo
        try {
            await userAxios.post('/api/cart/add', { itemId, size });
        } catch (error) {
            toast.error('Cart update failed');
        }
    }

    const updateQuantity = async (itemId, size, quantity) => {
        if (quantity < 0) return;

        const cartData = structuredClone(cartItems);

        // quantity 0 ho toh item hata do
        if (quantity === 0) {
            delete cartData[itemId][size];
        } else {
            cartData[itemId][size] = quantity;
        }

        setCartItem(cartData);

        try {
            await userAxios.patch('/api/cart/update', { itemId, size, quantity });
        } catch (error) {
            toast.error('Update failed');
        }
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) { }
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((p) => p._id === items);
            if (!itemInfo) continue;
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalAmount;
    };

    // -------------------- Effects --------------------

    useEffect(() => {
        getProductData();
        getUserCart();
    }, [])

    useEffect(() => {
        applyFilter();
    }, [category, subcategory, search, products]);

    // -------------------- Value --------------------

    const value = {
        products, currency, delivery_fee,
        category, setCategory,
        subcategory, setSubCategory,
        filterProducts, setFilterProducts, applyFilter,
        search, setSearch, showSearch, setShowSearch,
        cartItems, setCartItem, addToCart, getCartCount, updateQuantity, getCartAmount,
        navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;