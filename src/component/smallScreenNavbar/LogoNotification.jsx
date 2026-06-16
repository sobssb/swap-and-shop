import { Link } from "react-router-dom";
import background from "../../assets/logo.png";

// icons
import { IoNotificationsSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
// ///////////////////////////

const LogoNotification = ({
  addToCart,
  cartList,
  sideMenubar,
  setSideMenubar,
}) => {
  return (
    <section className="mt-5 flex justify-between items-center px-3 text-[#1A1D2F]">
      {/* First section has two group of links which are justified between them */}
      <article className="flex gap-2 items-center">
        <button
          className="w-6 h-6 relative"
          onClick={() => setSideMenubar(!sideMenubar)}
        >
          <RxHamburgerMenu className="w-full h-full text-center" />
        </button>

        <button className="rounded-2xl w-25 ">
          <Link to={"/"}>
            <img src={background} alt="logo" />
          </Link>
        </button>
      </article>

      {/* Second segment */}
      <article className="flex gap-2 items-center">
        <button className="w-6 h-6">
          <RiContactsLine className="w-full h-full" />
        </button>
        <button className="w-6 h-6 relative">
          <IoNotificationsSharp className="w-full h-full text-center" />
          <div className="w-5 h-5 bg-[#F0C808] rounded-[50%] p-1 absolute -top-3.5 -right-1.5 grid place-content-center font-bold text-white text-[0.8rem]">
            9+
          </div>
        </button>
        <button className="w-6 h-6 relative">
          <Link to="/cart">
            <BsCart4 className="w-full h-full text-center" />
          </Link>
          <div className="w-5 h-5 bg-[#F0C808] text-[0.8rem] rounded-[50%] p-1 absolute -top-3.5 -right-1.5 grid place-content-center font-bold text-white ">
            {addToCart}
            {cartList?.length > 9 && "+"}
          </div>
        </button>
      </article>
    </section>
  );
};

export default LogoNotification;
