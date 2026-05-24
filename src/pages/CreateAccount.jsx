import { useState } from "react";
import { Link } from "react-router-dom";
import background from "../assets/logo.png";
import { v4 as uuid } from "uuid";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Toast from "../component/Toast";

const CreateAccount = ({
  showPassword,
  setShowPassword,
  setCreateAccount,
  isCompleteLogin,
  setIsCompleteLogin,
  createAccount,
  toast,
  setToast,
  countDown,
}) => {
  // States
  const [logInUserName, setLogInUserName] = useState("");
  const [logInFirstLastName, setLogInFirstLastName] = useState("");
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");

  const navigate = useNavigate();

  // Check if email already exists
  const isExistingAccountDetails = createAccount.find(
    (account) =>
      account.email.trim().toLowerCase() === logInEmail.trim().toLowerCase(),
  );

  // check if username already exists
  const isExistingUserName = createAccount.find(
    (username) =>
      username.userName.trim().toLowerCase() ===
      logInUserName.trim().toLocaleLowerCase(),
  );

  // Handle errors
  const handleDetailsError = () => {
    const newErrors = {};
    /* const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/; */

    if (logInUserName.trim() === "") {
      newErrors.userName = "Please enter a username";
    }

    if (logInFirstLastName.trim() === "") {
      newErrors.firstLastName = "Please enter your first and last name";
    }

    if (logInEmail.trim() === "") {
      newErrors.email = "Please enter your email";
    }
    /* if (!emailRegex.test(logInEmail.trim())) {
      newErrors.wrongEmailRegex = "Invalid email";
    } */

    if (logInPassword.trim() === "") {
      newErrors.password = "Please enter a password";
    }

    /* if (!passwordRegex.test(logInPassword.trim())) {
      newErrors.wrongPasswordRegex =
        "Weak password, password must contain at least a uppercase, a lowercase, a number, a special character and at least 8 characters";
    } */

    if (isExistingAccountDetails) {
      newErrors.existingAccount =
        "Create another account, this email already exists. Use another email";
    }

    if (isExistingUserName) {
      newErrors.existingUserName = "Username taken, use another username";
    }

    setIsCompleteLogin(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle create account
  const handleCreateAccount = (e) => {
    e.preventDefault();
    const id = uuid();
    const accountDetails = {
      id,
      firstLastName: logInFirstLastName,
      userName: logInUserName,
      email: logInEmail,
      password: logInPassword,
    };
    const erros = handleDetailsError();
    if (!erros) return;

    const newAccountList = [...createAccount, accountDetails];
    localStorage.setItem("currentUser", JSON.stringify(newAccountList));
    setCreateAccount(newAccountList);
    setToast(true);

    // reset states
    setLogInUserName("");
    setLogInFirstLastName("");
    setLogInEmail("");
    setLogInPassword("");
    if (countDown === 0 && toast) {
      navigate("/profile");
    }
  };

  const handleSuccessfulLogin = () => {
    navigate("/profile");
    setToast(false);
  };

  return (
    <main className="relative p-3 lg:p-5 flex flex-col min-h-screen">
      {toast && (
        <Toast
          countDown={countDown}
          header={"Account created successfully!"}
          phrase={`Click "OK" to go back to sign in page`}
          title1={"OK"}
          // title2={"Logout"}
          icon={<IoSearchSharp className="m-auto mb-3 w-full h-full" />}
          handleFirstClick={handleSuccessfulLogin}
        />
      )}

      <section className="flex flex-row justify-between items-center mt-1">
        <button className="rounded-2xl w-25">
          <Link to={"/"}>
            <img src={background} alt="logo" />
          </Link>
        </button>

        <button className="underline">
          <Link className="whitespace-nowrap" to="/profile">
            Sign in
          </Link>
        </button>
      </section>

      <section
        className="flex flex-col justify-start mt-10 m-auto"
        style={{
          width: `min(500px, 100%)`,
        }}
      >
        <h2 className="text-2xl font-bold mb-1">Create an account</h2>

        {Object.keys(isCompleteLogin).length > 0 && (
          <div className="border-2 border-red-700 px-8 py-4 rounded-lg relative">
            {/* Error icon */}
            <section className="absolute w-5 bg-red-700 h-full top-0 left-0 rounded-l-md"></section>

            {/* Error messages */}
            <section>
              <p className="font-bold mb-1">There was a problem</p>
              {isCompleteLogin.existingAccount && (
                <p className="text-[1rem]">{isCompleteLogin.existingAccount}</p>
              )}

              {!isCompleteLogin.existingAccount &&
                isCompleteLogin.firstLastName && (
                  <p className="text-[1rem]">{isCompleteLogin.firstLastName}</p>
                )}

              {!isCompleteLogin.existingAccount && isCompleteLogin.userName && (
                <p className="text-[1rem]">{isCompleteLogin.userName}</p>
              )}

              {isCompleteLogin.existingUserName && (
                <p className="text-[1rem]">
                  {isCompleteLogin.existingUserName}
                </p>
              )}

              {!isCompleteLogin.existingAccount && isCompleteLogin.email && (
                <p className="text-[1rem]">{isCompleteLogin.email}</p>
              )}
              {/* {!isCompleteLogin.existingAccount &&
                !isCompleteLogin.email &&
                isCompleteLogin.wrongEmailRegex && (
                  <p className="text-[1rem]">
                    {isCompleteLogin.wrongEmailRegex}
                  </p>
                )} */}

              {!isCompleteLogin.existingAccount && isCompleteLogin.password && (
                <p className="text-[1rem]">{isCompleteLogin.password}</p>
              )}
              {/* {!isCompleteLogin.existingAccount &&
                !isCompleteLogin.password &&
                isCompleteLogin.wrongPasswordRegex && (
                  <p className="text-[1rem]">
                    {isCompleteLogin.wrongPasswordRegex}
                  </p>
                )} */}
            </section>
          </div>
        )}

        <p className="font-bold mt-2 mb-1">
          Enter you full name and choose your business password
        </p>

        {/* Create Account Form */}
        <form
          action=""
          className="flex flex-col justify-center items-center gap-2 w-full"
          onSubmit={handleCreateAccount}
        >
          <input
            className={`border ${isCompleteLogin.firstLastName || isCompleteLogin.existingAccount ? `border-red-600` : `border-slate-500`} text-2xl focus:outline-none rounded-lg py-1.5 px-3 w-full text-black placeholder:text-gray-600`}
            type="text"
            name="firstLastName"
            id="firstLastname"
            placeholder="First and last name"
            value={logInFirstLastName}
            autoFocus
            autoComplete="on"
            onChange={(e) => setLogInFirstLastName(e.target.value)}
          />

          <input
            className={`border ${isCompleteLogin.userName || isCompleteLogin.existingAccount ? `border-red-600` : `border-slate-500`} text-2xl focus:outline-none rounded-lg py-1.5 px-3 w-full text-black placeholder:text-gray-600`}
            type="text"
            name="username"
            id="name"
            placeholder="Username"
            value={logInUserName}
            autoComplete="on"
            onChange={(e) => setLogInUserName(e.target.value)}
          />

          <input
            className={`border ${isCompleteLogin.email || isCompleteLogin.wrongEmailRegex || isCompleteLogin.existingAccount || isCompleteLogin.existingUserName ? `border-red-600` : `border-slate-500`} text-2xl focus:outline-none rounded-lg py-1.5 px-3 w-full text-black placeholder:text-gray-600`}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={logInEmail}
            autoComplete="on"
            onChange={(e) => setLogInEmail(e.target.value)}
          />

          <label htmlFor="password" className="relative w-full">
            <input
              className={`border ${isCompleteLogin.password || isCompleteLogin.wrongPasswordRegex || isCompleteLogin.existingAccount || isCompleteLogin.existingUserName ? `border-red-600` : `border-slate-500`} text-2xl focus:outline-none rounded-lg py-1.5 px-3 w-full text-black placeholder:text-gray-600`}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="********"
              autoComplete="on"
              value={logInPassword}
              onChange={(e) => setLogInPassword(e.target.value)}
            />
            <IoSearchSharp
              className="absolute top-[50%] -translate-y-[50%] right-5 cursor-pointer text-2xl"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </label>

          <label className="my-3">
            By <span className="font-bold">Creating an account</span> you agree
            to our{" "}
            <Link className="underline text-blue-800">User Agreement</Link> and
            acknowledge reading our{" "}
            <Link className="underline text-blue-800">User Privacy Notice</Link>
          </label>
          <button
            type="submit"
            className=" text-2xl focus:outline-none rounded-lg py-1.5 px-3 w-full bg-blue-700 text-white"
          >
            Create Account
          </button>
        </form>
      </section>
    </main>
  );
};

export default CreateAccount;
