import { useState } from "react";
import background from "../assets/logo.png";
import SignLogNavCat from "../component/largeScreenNavbar/SignLogNavCat";
import LogoNotification from "../component/smallScreenNavbar/LogoNotification";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import H2_Element from "../component/H2_Element";
import SideBar from "../component/smallScreenNavbar/SideBar";
import Footer from "../layout/Footer";
import HelpSuggestion from "../component/HelpSuggestion";
import Button from "../component/Button";
import { IoSearchSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

const HelpContact = ({
  addToCart,
  cartList,
  sideMenubar,
  setSideMenubar,
  isSignedIn,
  getUserAfterSignIN,
  getUserName,
  sideMenu,
}) => {
  const [searchHelp, setSearchHelp] = useState("");

  const navigate = useNavigate();

  const handleSearchHelp = () => {
    e.preventDefault();
    if (searchHelp === "") return;
  };
  return (
    <main>
      <nav className="sticky top-0 bg-white z-20 border-b-[.5px] border-slate-200 pb-1">
        {/* large screen */}
        <section className="hidden lg:flex justify-between flex-col">
          <SignLogNavCat
            getUserName={getUserName}
            isSignedIn={isSignedIn}
            getUserAfterSignIN={getUserAfterSignIN}
          />
        </section>

        {/* mobile screen */}
        <section
          className="lg:hidden flex justify-between flex-col relative"
          ref={sideMenu}
        >
          <LogoNotification
            addToCart={addToCart}
            cartList={cartList}
            sideMenubar={sideMenubar}
            setSideMenubar={setSideMenubar}
            sideMenubar={sideMenubar}
            setSideMenubar={setSideMenubar}
            isSignedIn={isSignedIn}
            getUserAfterSignIN={getUserAfterSignIN}
            getUserName={getUserName}
          />

          <SideBar
            sideMenubar={sideMenubar}
            setSideMenubar={setSideMenubar}
            isSignedIn={isSignedIn}
            getUserAfterSignIN={getUserAfterSignIN}
            getUserName={getUserName}
          />
        </section>
      </nav>

      <section className="py-3.5 lg:px-5 px-3 my-1 flex flex-col md:flex-row">
        <button className="rounded-2xl w-25 mt-1 lg:block hidden">
          <Link to={"/"}>
            <img src={background} alt="logo" />
          </Link>
        </button>

        <H2_Element
          text="Customer Service"
          className="font-light mx-auto md:mt-0 mt-3"
        />
      </section>

      <section className="py-5.5 lg:px-5 px-3 my-1 bg-blue-300 md:mt-0 -mt-5">
        <H2_Element text="How can we help you today?" className=" " />
        <form
          action=""
          className=" flex grow relative"
          onSubmit={handleSearchHelp}
        >
          <input
            className="border border-slate-500 w-full pr-49 pl-13 text-2xl focus:outline-none h-10  rounded-2xl bg-white"
            type="text"
            value={searchHelp}
            onChange={(e) => setSearchHelp(e.target.value)}
            placeholder="Search Swap And Shop Help"
          />

          <button
            className="py-1 w-10 h-10 absolute left-3 top-[50%] -translate-y-[50%]"
            type="submit"
          >
            <IoSearchSharp className="w-full h-full" />
          </button>
        </form>
      </section>

      <section className="py-5.5 px-5 my-1 bg-gray-200 lg:mx-5 mx-3 mt-5 rounded-lg">
        <article className="">
          <H2_Element text="Suggestions for you" className="font-light" />
          <p className="-mt-2">Select an action or article to learn more</p>
        </article>

        <article className="mt-4 flex items-start md:flex-row flex-col gap-5">
          <div className="lg:w-1/2 w-full">
            <H2_Element
              text="Get personalized help and see your recent orders"
              className="font-bold text-[1rem]"
            />
            {!getUserAfterSignIN && (
              <div>
                <Button
                  buttonTitle="Sign in to your account"
                  className="bg-amber-300 px-3 py-1.5 text-[1.3rem] mb-3 font-medium rounded-lg w-full lg:w-fit"
                  handleClick={() => navigate("/profile")}
                />
                <p className="text-center lg:text-left">
                  Don't have an account
                </p>
                <p
                  className="cursor-pointer lg:mt-2 underline font-bold text-center lg:text-left"
                  onClick={() => navigate("/profile/createAccount")}
                >
                  Don't have an account
                </p>
              </div>
            )}
          </div>

          <div className="lg:w-1/2 w-full">
            <HelpSuggestion
              text="Buying as a Guest"
              phrase="Popular article - 4 min"
            />

            <HelpSuggestion
              text="Get help if you bought as a guest"
              phrase="Popular article - 3 min"
            />

            <HelpSuggestion
              text="Get help with an item that hasn't arrived"
              phrase="Popular article - 4 min"
            />

            <HelpSuggestion
              text="Creating a Swap and Shop account"
              phrase="Popular article - 2 min"
            />

            <HelpSuggestion
              text="Get help with a hacked account"
              phrase="Popular article - 2 min"
            />

            <HelpSuggestion
              text="Reset your password"
              phrase="Popular article - 2 min"
            />
          </div>
        </article>
      </section>

      <section className="lg:px-5 px-3 mt-4 flex flex-col">
        <H2_Element
          text="Browse help articles"
          className="font-light text-[1rem]"
        />
        <article className="p-5 grid place-content-center">
          <div className="grid grid-cols-3  md:gap-x-100 sm:gap-x-50 gap-x-10  gap-y-5">
            <div className="bg-gray-100  grid place-content-center w-20 rounded-[50%] h-20">
              <IoSearchSharp />
            </div>

            <div className="bg-gray-100  grid place-content-center w-20 rounded-[50%] h-20">
              <IoSearchSharp />
            </div>

            <div className="bg-gray-100  grid place-content-center w-20 rounded-[50%] h-20">
              <IoSearchSharp />
            </div>

            <div className="bg-gray-100  grid place-content-center w-20 rounded-[50%] h-20">
              <IoSearchSharp />
            </div>

            <div className="bg-gray-100  grid place-content-center w-20 rounded-[50%] h-20">
              <IoSearchSharp />
            </div>

            <div className="bg-gray-100  grid place-content-center w-20 rounded-[50%] h-20">
              <IoSearchSharp />
            </div>
          </div>
        </article>
      </section>

      <section className="py-4 my-1 bg-gray-200 lg:mx-5 mx-3 mt-5 rounded-lg text-center">
        <H2_Element text="Need more help" className="font-medium" />
        <p>
          Get the help you need from our automated assistant, or contact an
          agent
        </p>

        <Button
          buttonTitle="Contact"
          className="bg-[#021cff] px-3 py-1.5 text-[1.3rem] my-3 font-medium rounded-4xl text-white w-55"
          handleClick={() => navigate("/profile")}
        />
      </section>

      <section className="py-4 my-1 bg-gray-200 lg:mx-5 mx-3 mt-5 rounded-lg text-center">
        <H2_Element text="Other options for you" className="font-medium" />
        <p className="underline my-2">Start a return</p>
        <p className="underline my-2">Report an item that hasn't arrived</p>
      </section>

      <Footer />
    </main>
  );
};

export default HelpContact;
