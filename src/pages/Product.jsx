import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Button from "../components/Button";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, cartItems, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        // console.log(item);
        return null;
      }
    });
  };
  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size");
      return;
    }

    addToCart(productData._id, size);
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div className="pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {productData.image.map((m, i) => (
              <img onClick={() => setImage(m)} src={m} key={i} className="w-[24%]  sm:w-full sm:mb-3 shrink-0 cursor-pointer" />
            ))}
          </div>
          <div className="w-full sm:w-[80%] ">
            <img className="w-full " src={image} alt="" />
          </div>
        </div>

        {/* productInfo */}
        <div className="flex-1" >
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_dull_icon} alt="" />
            <p className="pl-2">{122}</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={` rounded py-2 px-4 bg-gray-200 ${item === size ? 'border border-black' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <Button
            onClick={handleAddToCart}
            content="Add to Cart"
            BgColor="#000"
            Color="white"
            HoverBg="#171717"
            HoverColor="white"
            ArrowColor="white"
            ArrowHoverColor="white"
          />
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 flex flex-col gap-1 mt-5">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description and Review Sections */}
      <div className="md:mt-20 mt-15">
        <div className="flex">
          <b className="border px-5 py-4 text-sm">Description</b>
          <p className="border px-5 py-4 text-sm">Reviews(122)</p>
        </div>
        <div className="flex flex-col gap-2 mt-2 px-2 py-6 text-sm text-gray-500 leading-relaxed tracking-normal">
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>

          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>
      {/* Display related Products */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
