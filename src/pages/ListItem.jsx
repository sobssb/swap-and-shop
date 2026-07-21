import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import H2_Element from "../component/H2_Element";
import { IoSearchSharp } from "react-icons/io5";
import background from "../assets/backgroundBanner.png"

const ListItem = () => {
  const [searchList, setSearchList] = useState("");

  const handleSearchHelp = (e) => {
    e.preventDefault();
    if (searchHelp === "") return;
  };
  return (
    <main className="lg:px-5 px-3">
      <button className="rounded-2xl w-25 my-5 mx-auto grid place-content-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </button>

      <H2_Element text="Start your listing" className="font-light" />

      <form
        action=""
        className=" flex grow relative my-5"
        onSubmit={handleSearchHelp}
      >
        <input
          className="border border-slate-700 w-full pr-1 pl-13 text-2xl focus:outline-none h-10  rounded-2xl  placeholder:text-gray-900"
          type="text"
          value={searchList}
          onChange={(e) => setSearchList(e.target.value)}
          placeholder="Tell us what you're selling"
        />

        <button
          className="py-1 w-10 h-10 absolute left-3 top-[50%] -translate-y-[50%]"
          type="submit"
        >
          <IoSearchSharp className="w-full h-full" />
        </button>
      </form>

      <section className="flex overflow-x-scroll [&::-webkit-scrollbar]:h-0  mt-10 gap-2">

        <div className="min-w-60 max-w-65 min-h-65 rounded-lg bg-gray-200 p-5">
          <p className="text-[.8rem] mt-7 mb-0.5">STEP 1</p>
          <H2_Element
            text={"Share item details"}
            className={"font-bold text-[1rem]"}
          />
          <p className="text-[.8rem] -mt-1">
            Use keywords like brand, model, or unique info (ISBN, MPN, VIN).
          </p>
        </div>

        <div className="min-w-60 max-w-65 min-h-65 rounded-lg bg-gray-200 p-5">
            <img src={background} alt="step 2 image" />
          <p className="text-[.8rem] mt-7 mb-0.5">STEP 2</p>
          <H2_Element
            text={"Find a match"}
            className={"font-bold text-[1rem]"}
          />
          <p className="text-[.8rem] -mt-1">
            We'll search our catalog to find similar items.
          </p>
        </div>

        <div className="min-w-60 max-w-65 min-h-65 rounded-lg bg-gray-200 p-5">
            <img src={background} alt="step 2 image" />
          <p className="text-[.8rem] mt-7 mb-0.5">STEP 3</p>
          <H2_Element
            text={"Edit and list"}
            className={"font-bold text-[1rem]"}
          />
          <p className="text-[.8rem] -mt-1">
            You can preview or make changes before listing your item.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ListItem;
