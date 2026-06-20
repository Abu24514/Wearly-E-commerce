import { useContext, useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { ShopContext } from "../../context/ShopContext";
const CustomDrop = () => {
  const { filterProducts, setFilterProducts, applyFilter } = useContext(ShopContext);

  const sortOptions = [
    { value: "relevant", label: "Sort by : Relevant" },
    { value: "low-high", label: "Sort by : Low to High" },
    { value: "high-low", label: "Sort by : High to Low" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions[0]);
  const [sortType, setSortType] = useState('relevant');

  const sortProduct = () => {
    let fpCopy = [...filterProducts];
    switch (sortType) {
      case 'low-high': setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low': setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter()
        break;
    }
  }
  useEffect(() => {
    sortProduct()
  }, [sortType])
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-sm bg-white cursor-pointer outline-none"
      >
        {selected.label}
        <FiChevronDown
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-1 w-full bg-white border border-gray-200 rounded-sm shadow-md z-10">
          {sortOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                setSelected(option);
                 setSortType(option.value); 
                setIsOpen(false);
              }}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-200 ${selected.value === option.value
                ? "bg-black text-white"
                : "text-gray-700"
                }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CustomDrop;
