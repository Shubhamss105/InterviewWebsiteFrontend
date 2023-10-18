import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa"; 

const Login = ({ isUserAuthenticated }) => {
  const navigate = useNavigate();
  const { setAccount, setIsLoggedIn } = useContext(DataContext);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [isFetching, setIsFetching] = useState(false); 

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const { email, password } = login;

    try {
      setIsFetching(true); // Set isFetching to true when fetching data

      const res = await fetch("https://interview-backend-p341.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.status === 200) {
        // Login successful
        setAccount({ email });
        isUserAuthenticated(true);
        setIsLoggedIn(true);
        toast.success("Successful Login", {
          autoClose: 3000,
        });

        navigate("/details");
      } else if (res.status === 401) {
        // Authentication failed
        console.log("Authentication failed");
        toast.error("Invalid email or password");
      } else {
        // Handle other status codes as needed
        console.log("Unexpected status code: " + res.status);
        toast.error("Something went wrong on the server");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong on the client");
    } finally {
      setIsFetching(false); // Set isFetching back to false after data is fetched
    }
  };

  return (
    <>
      <div className="flex flex-col w-full max-w-md px-4 py-4 pt-8 pb-4 mt-20 bg-white rounded-lg shadow-lg sm:px-6 md:px-8 lg:px-10 m-auto">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
          Login To Your Account
        </div>
        <div className="mt-8">
          <form action="#" autoComplete="off">
            <div className="flex flex-col mb-2">
              <div className="flex relative">
                <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t-68 28h-32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black/80 focus:border-transparent"
                  placeholder="Your email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex relative">
                <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t28-68v-576q0-40 28-68t-68 28h-32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                  </svg>
                </span>
                <input
                  type="password"
                  className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black/80 focus:border-transparent"
                  placeholder="Your password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto">
                <a href="/" className="inline-flex text-sm font-thin text-black sm:text-sm hover:indigo-gray-700">
                  Forgot Your Password?
                </a>
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                className="py-2 px-4 bg-black hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                onClick={handleSubmitLogin}
              >
                {isFetching ? (
                  <FaSpinner className="animate-spin mx-auto"  /> // Display the spinner when isFetching is true
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Link to="/signup" className="inline-flex items-center text-sm font-bold text-center text-black hover:text-black/80">
            Don't have an account? Signup Here
          </Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
