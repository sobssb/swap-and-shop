import { useState } from "react";
import background from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Toast from "../component/Toast";

const SignIn = ({
  showPassword,
  setShowPassword,
  createAccount,
  isCompleteLogin,
  setIsCompleteLogin,
  setGetUserAfterSignIN,
  setIsSignedIn,
  countDown,
  toast,
  setToast,
  setAddToCart,
  setCartList,
}) => {
  // States
  const [signInUserNameEmail, setSignInUserNameEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [logoutToast, setLogoutToast] = useState(false);
  const [signinToastSuccessful, setSigninToastSuccessful] = useState(false);
  const [logoutToastSuccessful, setLogoutToastSuccessful] = useState(false);

  // Find user details from create account details
  const findUserDetails = createAccount.find(
    (user) =>
      user.email.trim().toLocaleLowerCase() ===
        signInUserNameEmail.trim().toLocaleLowerCase() ||
      user.userName.trim().toLocaleLowerCase() ===
        signInUserNameEmail.trim().toLocaleLowerCase(),
  );

  // Store user details in local storage after sign in
  if (findUserDetails) {
    localStorage.setItem("user", JSON.stringify(findUserDetails));
  }

  const navigate = useNavigate();

  // Handle errors
  const handleCheckDetails = () => {
    const newErrors = {};
    if (signInUserNameEmail.trim() === "") {
      newErrors.userNameEmail = "Please enter your username or email";
    }

    if (signInPassword.trim() === "") {
      newErrors.password = "Please enter your password";
    }

    if (
      signInUserNameEmail.trim() !== "" &&
      signInUserNameEmail.trim().toLowerCase() !==
        findUserDetails?.userName.trim().toLowerCase() &&
      signInUserNameEmail.trim().toLowerCase() !==
        findUserDetails?.email.trim().toLowerCase()
    ) {
      newErrors.userNameEmailNotFound =
        "Username or email not found, try again";
    }

    if (
      signInPassword.trim() !== "" &&
      signInPassword !== findUserDetails?.password
    ) {
      newErrors.userPasswordNotFound = "Password not found, try again";
    }
    setIsCompleteLogin(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle sign in
  const handleSignIn = (e) => {
    e.preventDefault();
    const isValid = handleCheckDetails();
    if (!isValid) return;

    setGetUserAfterSignIN(findUserDetails);
    setIsSignedIn(true);
    setToast(true);
    setSigninToastSuccessful(true);

    // reset states
    setSignInUserNameEmail("");
    setSignInPassword("");
  };

  const handleStopSignIn = () => {
    setToast(false);
  };

  // Handle log out
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setIsSignedIn(false);
    setAddToCart(0);
    setCartList([]);
    setLogoutToast(false);
    setToast(true);
    setLogoutToastSuccessful(true);
  };

  const handleSuccessFullLogOut = () => {
    setToast(false);
    navigate("/");
  };

  const handleSuccesfullSignIn = () => {
    navigate("/");
    setToast(false);
  };

  return (
    <main className="p-3 lg:p-5 flex flex-col min-h-screen">
      {toast && signinToastSuccessful && (
        <Toast
          countDown={countDown}
          header={"Sign in successfully!"}
          phrase={`Click "OK" to go back to home page`}
          title1={"OK"}
          icon={<IoSearchSharp className="m-auto mb-3 w-full h-full" />}
          handleFirstClick={handleSuccesfullSignIn}
        />
      )}

      {toast && logoutToast && (
        <Toast
          countDown={countDown}
          header={"Log out Account?"}
          phrase={"Are you sure you want to logout?"}
          title1={"Cancle"}
          title2={"Logout"}
          icon={<IoSearchSharp className="m-auto mb-3 w-full h-full" />}
          buttonIcon={<IoSearchSharp />}
          handleFirstClick={handleStopSignIn}
          handleSecondClick={handleLogOut}
        />
      )}

      {toast && logoutToastSuccessful && (
        <Toast
          countDown={countDown}
          header={"Log out successfully!"}
          phrase={`Click "OK" to go back to home page`}
          title1={"Ok"}
          icon={<IoSearchSharp className="m-auto mb-3 w-full h-full" />}
          handleFirstClick={handleSuccessFullLogOut}
        />
      )}
      <button className="rounded-2xl w-25 mt-1">
        <Link to={"/"}>
          <img src={background} alt="logo" />
        </Link>
      </button>
      <section
        className="flex grow flex-col justify-center items-center m-auto"
        style={{
          width: `min(400px, 100%)`,
        }}
      >
        <h2 className="text-2xl font-bold mb-2">Sign in to your account</h2>
        <div className="bg-gray-200 flex p-2 gap-5 justify-between items-center flex-nowrap w-full rounded-lg">
          <p className="whitespace-nowrap">New to Swap?</p>
          <button className="rounded-2xl border border-slate-400 px-4 py-1 ">
            <Link className="whitespace-nowrap" to="/profile/createAccount">
              Create Account
            </Link>
          </button>
        </div>

        {Object.keys(isCompleteLogin).length > 0 && (
          <div className="border-2 border-red-700 px-8 py-4 rounded-lg relative w-full mt-2">
            <section className="absolute w-5 bg-red-700 h-full top-0 left-0 rounded-l-md"></section>

            <section>
              <p className="font-bold mb-1">There was a problem</p>
              {isCompleteLogin.userNameEmail && (
                <p className="text-[1rem]">{isCompleteLogin.userNameEmail}</p>
              )}
              {isCompleteLogin.email && (
                <p className="text-[1rem]">{isCompleteLogin.email}</p>
              )}
              {isCompleteLogin.password && (
                <p className="text-[1rem]">{isCompleteLogin.password}</p>
              )}

              <div>
                {isCompleteLogin.userNameEmailNotFound && (
                  <p className="text-[1rem]">
                    {isCompleteLogin.userNameEmailNotFound}
                  </p>
                )}
                {isCompleteLogin.userPasswordNotFound && (
                  <p className="text-[1rem]">
                    {isCompleteLogin.userPasswordNotFound}
                  </p>
                )}
              </div>
            </section>
          </div>
        )}

        <form
          action=""
          className="flex flex-col justify-center items-center gap-2 mt-10 w-full"
          onSubmit={handleSignIn}
        >
          <input
            className={`border ${isCompleteLogin.userNameEmail || isCompleteLogin.userNameEmailNotFound ? `border-red-600` : `border-slate-500`} text-2xl focus:outline-none rounded-lg py-1.5 px-3 w-full text-black placeholder:text-gray-600`}
            type="text"
            name="username"
            id="username"
            placeholder="Email or Username"
            value={signInUserNameEmail}
            autoFocus
            autoComplete="on"
            onChange={(e) => setSignInUserNameEmail(e.target.value)}
          />

          <label htmlFor="password" className="relative w-full">
            <input
              className={`border ${isCompleteLogin.password || isCompleteLogin.userPasswordNotFound ? `border-red-600` : `border-slate-500`} text-2xl focus:outline-none rounded-lg py-1.5 px-3 w-full text-black placeholder:text-gray-600`}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="********"
              autoComplete="on"
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
            />
            <IoSearchSharp
              className="absolute top-[50%] -translate-y-[50%] right-5 cursor-pointer text-2xl"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </label>

          <button
            type="submit"
            className=" text-2xl focus:outline-none rounded-lg py-1.5 px-3 w-full bg-blue-700 text-white"
          >
            Continue
          </button>
        </form>
      </section>

      <button
        onClick={() => {
          setToast(true);
          setLogoutToast(true);
        }}
        className="mt-5"
      >
        Log Out
      </button>
    </main>
  );
};

export default SignIn;
