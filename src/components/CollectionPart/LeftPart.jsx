import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
const LeftPart = () => {

  const { category, setCategory, subcategory, setSubCategory, search, setSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);


  const toggleCategory = (e) => {
    //   console.log(e.target.value);
    //  prev mean current state
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };


  return (
    <div className="min-w-60">
      {/* Mobile Filter Toggle */}
      <p
        onClick={() => setShowFilter(!showFilter)}
        className="my-2 text-xl flex items-center cursor-pointer gap-2 sm:hidden font-medium text-gray-800"
      >
        FILTERS
        <MdOutlineKeyboardArrowRight
          className={`sm:hidden transition-all ${showFilter ? "rotate-90" : ""}`}
        />
      </p>

      {/* Filter Container */}
      <div className={`flex flex-col ${showFilter ? "" : "hidden"} sm:block`}>
        {/* 1. Search Box (Hidden on Mobile) */}
        <div className="mb-8 hidden sm:block">
          <p className="mb-3 text-[15px] font-semibold text-gray-500 tracking-wider uppercase">
            Search By Product
          </p>
          <div className="flex items-center bg-[#f9f9f9] border border-gray-300 px-3 py-2.5 rounded-[3px] w-full">
            <IoSearchOutline className="text-gray-400 text-lg" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search......"
              className="ml-2 outline-none w-full text-sm bg-transparent placeholder-gray-400 text-gray-700"
            />
          </div>
        </div>

        {/* ================= NEW LAYOUT FOR MOBILE (Side-by-Side) ================= */}
        <div className="flex flex-row sm:flex-col gap-10 sm:gap-0 mt-4 sm:mt-0">
          {/* 2. Main Categories (Left Side on Mobile) */}
          <div className="mb-6 flex-1 sm:flex-none">
            <p className="mb-4 text-[11px] font-semibold text-gray-500 tracking-wider uppercase">
              Categories
            </p>
            <div className="flex flex-col gap-3.5 text-sm text-gray-800">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="w-4 h-4 cursor-pointer accent-black"
                  type="checkbox"
                  value={"Men"}
                  onChange={toggleCategory}
                />
                <span>Men</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="w-4 h-4 cursor-pointer accent-black"
                  type="checkbox"
                  value={"Women"}
                  onChange={toggleCategory}
                />
                <span>Women</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="w-4 h-4 cursor-pointer accent-black"
                  type="checkbox"
                  value={"Bags"}
                  onChange={toggleCategory}
                />
                <span>Bags</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="w-4 h-4 cursor-pointer accent-black"
                  type="checkbox"
                  value={"Kids"}
                  onChange={toggleCategory}
                />
                <span>Kids</span>
              </label>
            </div>
          </div>

          {/* Desktop par divider line dikhegi, Mobile par vertical line ya gayab kar sakte hain */}
          <hr className="hidden sm:block my-6 border-gray-300" />

          {/* 3. SubCategories (Right Side on Mobile) */}
          <div className="mb-6 flex-1 sm:flex-none">
            {/* Mobile par heading deni zaroori hai structure balance karne ke liye */}
            <p className="mb-4 sm:hidden text-[11px] font-semibold text-gray-500 tracking-wider uppercase">
              Type
            </p>
            <div className="flex flex-col gap-3.5 text-sm text-gray-800">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="w-4 h-4 cursor-pointer accent-black"
                  type="checkbox"
                  value={"Topwear"}
                  onChange={toggleSubCategory}
                />
                <span>Topwear</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="w-4 h-4 cursor-pointer accent-black"
                  type="checkbox"
                  value={"Bottomwear"}
                  onChange={toggleSubCategory}
                />
                <span>Bottomwear</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="w-4 h-4 cursor-pointer accent-black"
                  type="checkbox"
                  value={"Winterwear"}
                  onChange={toggleSubCategory}
                />
                <span>Winterwear</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="w-4 h-4 cursor-pointer accent-black"
                  type="checkbox"
                  value={"Travelbag"}
                  onChange={toggleSubCategory}
                />
                <span>Travelbag</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="w-4 h-4 cursor-pointer accent-black"
                  type="checkbox"
                  value={"Handbag"}
                  onChange={toggleSubCategory}
                />
                <span>Handbag</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="w-4 h-4 cursor-pointer accent-black"
                  type="checkbox"
                  value={"Backpack"}
                  onChange={toggleSubCategory}
                />
                <span>Backpack</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPart;
