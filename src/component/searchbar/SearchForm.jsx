import { useStoreActions, useStoreState } from "easy-peasy";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import SearchDropDown from "./SearchDropDown";
import ArrowDropDown from "../ArrowDropDown";
import NavBarLinkListNames from "../../data/NavBarLinkListNames";
import { useHandleSearchSubmit } from "../../hooks/useHandleSearchSubmit";
// icons
import { IoSearchSharp } from "react-icons/io5";

const SearchForm = () => {
  // Easy-peasy
  const setIsSearch = useStoreActions((actions) => actions.setIsSearch);
  const searchResult = useStoreState((state) => state.searchResult);
  const setSearchResult = useStoreActions((actions) => actions.setSearchResult);

  const { allCategories } = NavBarLinkListNames();

  const closeSearch = useDetectOutsideClick(() => setIsSearch(false));

  const { handleSearchSubmit } = useHandleSearchSubmit();
  // flex grow relative z-100

  return (
    <div
      className="px-3 lg:px-0 my-1 lg:my-0 flex grow relative border-y-[.5px] lg:border-y-0 border-slate-200 lg:border-0 py-2 lg:py-0 w-full z-50"
      // ref={closeSearch}
    >
      <form action="" className=" flex grow" onSubmit={handleSearchSubmit}>
        <input
          className="border border-slate-500 h-10 w-full pr-35 pl-13 rounded-2xl focus:outline-none lg:pr-49  lg:text-2xl"
          type="text"
          value={searchResult}
          onChange={(e) => setSearchResult(e.target.value)}
          placeholder="Search Anything"
          onClick={() => setIsSearch(true)}
          onFocus={() => setIsSearch(true)}
        />

        <button
          className="py-1 w-9 h-8 absolute left-6 top-[50%] -translate-y-[50%]  lg:w-10 lg:h-10  lg:left-3"
          type="submit"
        >
          <IoSearchSharp className="w-full h-full" />
        </button>
      </form>

      <div className="absolute right-7 top-[50%] -translate-y-[50%]  lg:right-3">
        <ArrowDropDown
          title="All Categories"
          watchListLinks={allCategories}
          className="overflow-y-scroll [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar-thumb]:bg-gray-400  z-1000 -left-15 min-w-50"
        />
      </div>

      <SearchDropDown />
    </div>
  );
};

export default SearchForm;
