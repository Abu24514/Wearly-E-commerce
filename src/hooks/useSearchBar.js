import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const useSearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch, products } =
    useContext(ShopContext);
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    if (!search.trim()) return [];
    const query = search.toLowerCase().trim();
    return products
      .filter((p) => {
        const nameMatch = p.name
          .toLowerCase()
          .split(" ")
          .some((word) => word.startsWith(query));
        const categoryMatch = p.category?.toLowerCase().startsWith(query);
        return nameMatch || categoryMatch;
      })
      .slice(0, 8);
  }, [search, products]);

  const handleSelect = (id) => {
    setShowSearch(false);
    setSearch("");
    navigate(`/product/${id}`);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && search.trim()) {
      setShowSearch(false);
      navigate("/collection");
    }
  };

  return {
    search,
    setSearch,
    showSearch,
    setShowSearch,
    filtered,
    handleSelect,
    handleEnter,
  };
};

export default useSearchBar;
