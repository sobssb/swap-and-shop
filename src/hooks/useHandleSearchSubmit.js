import { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import AllProducts from "../data/AllProducts";

export const useHandleSearchSubmit = () => {
  // Easy-peasy
  const searchResult = useStoreState((state) => state.searchResult);
  const setFilteredResult = useStoreActions(
    (actions) => actions.setFilteredResult,
  );
  const setIsSearch = useStoreActions((actions) => actions.setIsSearch);

  // react-router
  const navigate = useNavigate();

  //   data stored
  const { todayDeals } = AllProducts();

  useEffect(() => {
    if (!todayDeals) return;

    const uniqueBrand = [
      ...new Set(
        todayDeals.flatMap((product) => [
          product.brand,
          product.name,
          product.category,
          product.brandType,
          product.mainCategory,
        ]),
      ),
    ];

    const filterResult = uniqueBrand?.filter((product) =>
      product?.toLowerCase().includes(searchResult?.toLowerCase()),
    );
    setFilteredResult(filterResult);
  }, [searchResult]);

  // For handling the search bar
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResult.trim() === "") return;
    navigate(`/searchedProduct?q=${encodeURIComponent(searchResult)}`);
    setIsSearch(false);
  };

  return { handleSearchSubmit };
};
