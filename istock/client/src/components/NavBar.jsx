import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../assets/profile.jpg";
import { loginStart, loginSuccess, loginFailure, logout } from "../redux/userReducer"
import { useDispatch,useSelector } from 'react-redux';

const NavBar = () => {
  let [open, setOpen] = useState(false);
  const dispatch=useDispatch();
  return (
    <>
      {/* Responsive Navbar */}
      <div className="">
        <nav className="mx-5 items-center md:flex md:justify-between">
          {/* search section */}
          <div className="relative">
            <div className="flex px-2 absolute inset-y-0 left-0 items-center  pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border font-primaryText border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required=""
            />
          </div>

          {/* profile section */}
          <div className="flex items-center justify-center my-5 space-x-2">
            <div className="font-primaryText ">
              <h1 className="font-bold cursor-pointer">Bishal Pariyar</h1>
              <h6>Admin Profile</h6>
            </div>

            <div className="flex items-center ">
              <img
                src={profile}
                alt="image"
                className="w-12 h-12 object-cover rounded-full mr-4 cursor-pointer"
              />

              <div>
                <svg
                  className="svg-icon w-5 h-5 mr-6 cursor-pointer"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setOpen(!open)}
                >
                  <path
                    d="M917.333333 640h-20.949333a403.2 403.2 0 0 1-22.186667 53.184l14.933334 14.933333a85.333333 85.333333 0 0 1 0 120.682667l-60.352 60.352a85.333333 85.333333 0 0 1-120.682667 0l-14.933333-14.933333a403.2 403.2 0 0 1-53.184 22.186666V917.333333a85.333333 85.333333 0 0 1-85.333334 85.333334h-85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334v-20.949333a403.2 403.2 0 0 1-53.184-22.186667l-14.933334 14.933334a85.333333 85.333333 0 0 1-120.682666 0L134.826667 828.778667a85.333333 85.333333 0 0 1 0-120.682667l14.933333-14.933333a403.2 403.2 0 0 1-22.186667-53.184H106.666667a85.333333 85.333333 0 0 1-85.333334-85.333334v-85.333333a85.333333 85.333333 0 0 1 85.333334-85.333333h20.949333a403.2 403.2 0 0 1 22.186667-53.184l-14.933334-14.933334a85.333333 85.333333 0 0 1 0-120.682666L195.221333 134.826667a85.333333 85.333333 0 0 1 120.682667 0l14.933333 14.933333a403.2 403.2 0 0 1 53.184-22.186667V106.666667a85.333333 85.333333 0 0 1 85.333334-85.333334h85.333333a85.333333 85.333333 0 0 1 85.333333 85.333334v20.949333a403.2 403.2 0 0 1 53.184 22.186667l14.933334-14.933334a85.333333 85.333333 0 0 1 120.682666 0l60.352 60.352a85.333333 85.333333 0 0 1 0 120.682667l-14.933333 14.933333a403.2 403.2 0 0 1 22.186667 53.184H917.333333a85.333333 85.333333 0 0 1 85.333334 85.333334v85.333333A85.333333 85.333333 0 0 1 917.333333 640z m42.666667-170.666667a42.666667 42.666667 0 0 0-42.666667-42.666666h-53.034666a359.68 359.68 0 0 0-43.349334-102.933334l31.402667-31.402666 6.613333-6.613334a42.666667 42.666667 0 0 0 0-60.330666l-60.352-60.330667a42.666667 42.666667 0 0 0-60.330666 0l-38.08 38.058667A359.104 359.104 0 0 0 597.333333 159.850667V106.666667a42.666667 42.666667 0 0 0-42.666666-42.666667h-85.333334a42.666667 42.666667 0 0 0-42.666666 42.666667v53.184a359.104 359.104 0 0 0-102.869334 43.264l-38.058666-38.058667a42.666667 42.666667 0 0 0-60.352 0l-60.330667 60.330667a42.666667 42.666667 0 0 0 0 60.330666l6.613333 6.613334 31.381334 31.402666A359.68 359.68 0 0 0 159.701333 426.666667H106.666667a42.666667 42.666667 0 0 0-42.666667 42.666666v85.333334a42.666667 42.666667 0 0 0 42.666667 42.666666h53.034666a359.68 359.68 0 0 0 43.349334 102.933334l-31.381334 31.402666-6.613333 6.613334a42.666667 42.666667 0 0 0 0 60.330666l60.330667 60.330667a42.666667 42.666667 0 0 0 60.352 0l6.592-6.613333 31.466666-31.445334A359.104 359.104 0 0 0 426.666667 864.149333V917.333333a42.666667 42.666667 0 0 0 42.666666 42.666667h85.333334a42.666667 42.666667 0 0 0 42.666666-42.666667v-53.184a359.104 359.104 0 0 0 102.869334-43.264l31.466666 31.445334 6.613334 6.613333a42.666667 42.666667 0 0 0 60.330666 0l60.352-60.330667a42.666667 42.666667 0 0 0 0-60.330666l-38.016-38.016A359.68 359.68 0 0 0 864.298667 597.333333H917.333333a42.666667 42.666667 0 0 0 42.666667-42.666666v-85.333334zM512 725.333333a213.333333 213.333333 0 1 1 213.333333-213.333333 213.333333 213.333333 0 0 1-213.333333 213.333333z m0-384a170.666667 170.666667 0 1 0 170.666667 170.666667 170.666667 170.666667 0 0 0-170.666667-170.666667z"
                    fill="#333333"
                  />
                </svg>

                {open && (
                  <div className="absolute right-20 xl:right-12 z-10 w-46 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                    
                    <div className="p-2">
                    <Link to="/dashboard/profile"
                        className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 font-primaryText" > 

                        <div className="flex items-center justify-between space-x-2">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <div>Profile Page</div>
                        </div>
                      </Link>

                      <Link to=""
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 font-primaryText">
                        <div className="flex items-center justify-start space-x-3">
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                              />
                            </svg>
                          </div>
                          <div onClick={()=>dispatch(logout())}>Logout</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="cursor-pointer block xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                onClick={() => setOpen(!open)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
