import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";
// icons
import { GoArrowUpLeft } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";

const SearchDropDown = () => {
  const isSearch = useStoreState((state) => state.isSearch);
  const setIsSearch = useStoreActions((actions) => actions.setIsSearch);
  const searchResult = useStoreState((state) => state.searchResult);
  const filteredResult = useStoreState((state) => state.filteredResult);

  const navigate = useNavigate();

  // close drop down option on clicked link

  const handleCloseOptions = (query) => {
    navigate(`/searchedProduct?q=${encodeURIComponent(query)}`);
    setIsSearch(false);
  };

  return (
    <>
      {searchResult?.length > 0 && isSearch && (
        <div className="max-h-110 h-fit bg-white shadow-2xl absolute top-14 p-4 w-[calc(100%-24px)] rounded-2xl text-gray-900 break-all left-[50%] right-[50%] -translate-x-[50%] overflow-y-scroll [&::-webkit-scrollbar]:w-0">
          <ul>
            <li
              className="flex items-center gap-4 justify-start py-2 cursor-pointer -mx-4 px-4 hover:bg-[#F7F7F7] 
                            active:bg-gray-300"
              onClick={() => handleCloseOptions(searchResult)}
            >
              <IoSearchSharp className="text-2xl" />

              {searchResult?.length < 100
                ? `${searchResult}`
                : `${searchResult?.slice(0, 500)}...`}
            </li>

            {filteredResult?.length > 0 &&
              filteredResult?.map((product, index) => (
                <li
                  className="flex items-center gap-2.5 justify-between py-2 -mx-4 px-4 border-t border-slate-300 cursor-pointer hover:bg-[#F7F7F7] 
                            active:bg-gray-300"
                  key={index}
                  onClick={() => handleCloseOptions(product)}
                >
                  <div className="flex gap-4 items-center justify-between">
                    <IoSearchSharp className="text-2xl" />
                    {product}
                  </div>

                  <GoArrowUpLeft className="text-2xl" />
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchDropDown;
