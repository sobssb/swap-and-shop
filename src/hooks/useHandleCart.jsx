import { useStoreActions, useStoreState } from "easy-peasy";
import { MdAddShoppingCart } from "react-icons/md";

// Load cart data from signed-in user when they sign in
export const useHandleCart = () => {
  // easy-peasy
  //   creating account ans signing in
  const getUserAfterSignIN = useStoreState((state) => state.getUserAfterSignIN);
  const setGetUserAfterSignIN = useStoreActions(
    (actions) => actions.setGetUserAfterSignIN,
  );
  const createAccount = useStoreState((state) => state.createAccount);
  const setCreateAccount = useStoreActions(
    (actions) => actions.setCreateAccount,
  );

  //   cartlist
  const cartList = useStoreState((state) => state.cartList);
  const setCartList = useStoreActions((actions) => actions.setCartList);
  //   toast
  const setToast = useStoreActions((actions) => actions.setToast);
  const setAddCartSuccessfully = useStoreActions(
    (actions) => actions.setAddCartSuccessfully,
  );
  const addToCart = useStoreState((state) => state.addToCart);
  const setAddToCart = useStoreActions((actions) => actions.setAddToCart);
  const setAddCartExist = useStoreActions((actions) => actions.setAddCartExist);

  // Adding cart and cartList to the user details, showing the details of cart or cartList based on the user that signed in
  const handleUpdateUserDetails = (newCart, newCartList) => {
    // if user doesn't sign in, return i.e stop
    if (!getUserAfterSignIN) return;

    const userFullDetails = createAccount.map((user) => {
      if (
        user.email.trim().toLowerCase() ===
        getUserAfterSignIN.email.trim().toLowerCase()
      ) {
        return {
          ...user,
          cart: newCart,
          cartList: newCartList,
        };
      }
      return user;
    });

    // Saved the latest account details  to localStorage
    localStorage.setItem("allUsers", JSON.stringify(userFullDetails));
    setCreateAccount(userFullDetails);

    // update the current user signed in
    const updateSpecificUser = {
      ...getUserAfterSignIN,
      cart: newCart,
      cartList: newCartList,
    };

    localStorage.setItem("user", JSON.stringify(updateSpecificUser));
    setGetUserAfterSignIN(updateSpecificUser);
  };

  // adding product to cartlist and updating the number of cart i.e increasing
  const handleAddCart = (product) => {
    // if product is now found stop
    if (!product) return;

    // check if product added to cart exist already
    const productExist = cartList.find((cart) => cart.id === product.id);

    // Cart number increasement if card doesn't exist and less than 10
    let nextCart = addToCart;
    if (!productExist && addToCart < 9) {
      nextCart = nextCart + 1;
      setAddToCart(nextCart);
    }
    if (!productExist) {
      const updatedList = [product, ...cartList];
      handleUpdateUserDetails(nextCart, updatedList);
      setCartList(updatedList);
      setToast({
        countDown: 3,
        header: "Added to cart successfully!",
        message: "The product was added to your cart.",
        title1: "OK",
        icon: <MdAddShoppingCart className="m-auto mb-3 w-full h-full" />,
      });
      setAddCartSuccessfully(true);
      setAddCartExist(false);
    } else {
      setToast({
        countDown: 3,
        header: "Product already in cart",
        message: "This product is already in your cart.",
        title1: "OK",
        icon: <MdAddShoppingCart className="m-auto mb-3 w-full h-full" />,
      });
      setAddCartExist(true);
      setAddCartSuccessfully(false);
    }
  };

  return { handleAddCart };
};
