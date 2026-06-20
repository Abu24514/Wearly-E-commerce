import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import ProductItem from "../ProductItem";
import CustomDrop from "./CustomDrop";

const RightPart = () => {
    const { filterProducts, search } = useContext(ShopContext);
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 8;
    const totalPages = Math.ceil(filterProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = filterProducts.slice(startIndex, startIndex + productsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [filterProducts]);

    return (
        <>
            {/* Header */}
            <div className="mb-8 sm:mb-10 mt-4 sm:mt-0 flex justify-between items-start">
                <div>
                    <h1 className="text-xl sm:text-[40px] tracking-tight font-medium text-gray-900 mb-3">
                        Explore Our Collection
                    </h1>
                    <p className="text-gray-500 text-[11px] sm:text-base">
                        {search.trim()
                            ? `Showing results for "${search}"`
                            : "Discover handpicked products made just for you."
                        }
                    </p>
                </div>
                <div className="relative text-[10px] sm:text-sm">
                    <CustomDrop />
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
                {currentProducts.length > 0 ? (
                    currentProducts.map((item) => (
                        <ProductItem
                            key={item._id}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            bestseller={item.bestseller}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-400 py-16 text-sm">
                        {search.trim() ? `No results for "${search}"` : "No products found."}
                    </div>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12 mb-8">
                    <button
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border rounded-md text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition"
                    >
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        return (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-md text-sm font-medium transition
                                    ${currentPage === page ? "bg-black text-white" : "border hover:bg-gray-100"}`}
                            >
                                {page}
                            </button>
                        );
                    })}

                    <button
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border rounded-md text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition"
                    >
                        Next
                    </button>
                </div>
            )}
        </>
    );
};

export default RightPart;