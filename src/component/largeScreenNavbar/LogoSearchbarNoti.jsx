import { Link } from "react-router-dom";
import background from "../../assets/logo.png";
import SearchForm from "../searchbar/SearchForm";
import { useStoreState } from "easy-peasy";

// icons
import { IoNotificationsSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { CiLocationOn, CiMoneyCheck1 } from "react-icons/ci";
// ///////////////////////////

const LogoSearchbarNoti = () => {
  // Easy peasy
  const addToCart = useStoreState((state) => state.addToCart);
  const cartList = useStoreState((state) => state.cartList);

  return (
    <section className="flex gap-3 items-center border-y-[.5px] border-slate-200 py-3.5 px-5 my-1">
      {/* this is the logo */}
      <button className="rounded-2xl w-25">
        <Link to={"/"}>
          <img src={background} alt="logo" loading="lazy" />
        </Link>
      </button>

      <button className="w-9 h-9">
        <CiLocationOn className="w-full h-full" />
      </button>

      {/* search bar */}

      <SearchForm />

      <button className="w-9 h-9">
        <CiMoneyCheck1 className="w-full h-full" />
      </button>

      <button className="w-9 h-9 relative">
        <IoNotificationsSharp className="w-full h-full text-center" />
        <div className="w-6 h-6 bg-[#F0C808] text-[0.8rem] rounded-[50%] p-1 absolute -top-3.5 -right-1.5 grid place-content-center font-bold text-white">
          0
        </div>
      </button>

      <button className="w-9 h-9 relative">
        <Link to="/cart">
          <BsCart4 className="w-full h-full text-center" />
        </Link>
        <div className="w-6 h-6 bg-[#F0C808] text-[0.8rem] rounded-[50%] p-1 absolute -top-3.5 -right-1.5 grid place-content-center font-bold text-white">
          {addToCart}
          {cartList?.length > 9 && "+"}
        </div>
      </button>
    </section>
  );
};

export default LogoSearchbarNoti;
