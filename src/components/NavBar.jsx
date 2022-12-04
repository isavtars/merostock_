import React from "react";
import { useState } from "react";
import profile from "../assets/profile.jpg";
import svg_com from './svg_com'


const NavBar = () => {

  let [open, setOpen] = useState(false);
  return (
    <>
    {/* Responsive for large Devices */}
      <div className="hidden xl:block">
        <nav className="flex justify-between items-center">
          <div class="flex items-center xl:ml-8">
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
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
          </div>

          <div className="flex items-center justify-center space-x-2">
            <div className="font-primaryText">
              <h1 className="font-bold cursor-pointer">Bishal Pariyar</h1>
              <h6>Admin Profile</h6>
            </div>

            <div className="flex items-center ">
              <img
                src={profile}
                alt="image"
                className="w-12 h-12 object-cover rounded-full mr-4 cursor-pointer"
              />
              <svg
                className="svg-icon w-8 h-8 mr-6 cursor-pointer"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M917.333333 640h-20.949333a403.2 403.2 0 0 1-22.186667 53.184l14.933334 14.933333a85.333333 85.333333 0 0 1 0 120.682667l-60.352 60.352a85.333333 85.333333 0 0 1-120.682667 0l-14.933333-14.933333a403.2 403.2 0 0 1-53.184 22.186666V917.333333a85.333333 85.333333 0 0 1-85.333334 85.333334h-85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334v-20.949333a403.2 403.2 0 0 1-53.184-22.186667l-14.933334 14.933334a85.333333 85.333333 0 0 1-120.682666 0L134.826667 828.778667a85.333333 85.333333 0 0 1 0-120.682667l14.933333-14.933333a403.2 403.2 0 0 1-22.186667-53.184H106.666667a85.333333 85.333333 0 0 1-85.333334-85.333334v-85.333333a85.333333 85.333333 0 0 1 85.333334-85.333333h20.949333a403.2 403.2 0 0 1 22.186667-53.184l-14.933334-14.933334a85.333333 85.333333 0 0 1 0-120.682666L195.221333 134.826667a85.333333 85.333333 0 0 1 120.682667 0l14.933333 14.933333a403.2 403.2 0 0 1 53.184-22.186667V106.666667a85.333333 85.333333 0 0 1 85.333334-85.333334h85.333333a85.333333 85.333333 0 0 1 85.333333 85.333334v20.949333a403.2 403.2 0 0 1 53.184 22.186667l14.933334-14.933334a85.333333 85.333333 0 0 1 120.682666 0l60.352 60.352a85.333333 85.333333 0 0 1 0 120.682667l-14.933333 14.933333a403.2 403.2 0 0 1 22.186667 53.184H917.333333a85.333333 85.333333 0 0 1 85.333334 85.333334v85.333333A85.333333 85.333333 0 0 1 917.333333 640z m42.666667-170.666667a42.666667 42.666667 0 0 0-42.666667-42.666666h-53.034666a359.68 359.68 0 0 0-43.349334-102.933334l31.402667-31.402666 6.613333-6.613334a42.666667 42.666667 0 0 0 0-60.330666l-60.352-60.330667a42.666667 42.666667 0 0 0-60.330666 0l-38.08 38.058667A359.104 359.104 0 0 0 597.333333 159.850667V106.666667a42.666667 42.666667 0 0 0-42.666666-42.666667h-85.333334a42.666667 42.666667 0 0 0-42.666666 42.666667v53.184a359.104 359.104 0 0 0-102.869334 43.264l-38.058666-38.058667a42.666667 42.666667 0 0 0-60.352 0l-60.330667 60.330667a42.666667 42.666667 0 0 0 0 60.330666l6.613333 6.613334 31.381334 31.402666A359.68 359.68 0 0 0 159.701333 426.666667H106.666667a42.666667 42.666667 0 0 0-42.666667 42.666666v85.333334a42.666667 42.666667 0 0 0 42.666667 42.666666h53.034666a359.68 359.68 0 0 0 43.349334 102.933334l-31.381334 31.402666-6.613333 6.613334a42.666667 42.666667 0 0 0 0 60.330666l60.330667 60.330667a42.666667 42.666667 0 0 0 60.352 0l6.592-6.613333 31.466666-31.445334A359.104 359.104 0 0 0 426.666667 864.149333V917.333333a42.666667 42.666667 0 0 0 42.666666 42.666667h85.333334a42.666667 42.666667 0 0 0 42.666666-42.666667v-53.184a359.104 359.104 0 0 0 102.869334-43.264l31.466666 31.445334 6.613334 6.613333a42.666667 42.666667 0 0 0 60.330666 0l60.352-60.330667a42.666667 42.666667 0 0 0 0-60.330666l-38.016-38.016A359.68 359.68 0 0 0 864.298667 597.333333H917.333333a42.666667 42.666667 0 0 0 42.666667-42.666666v-85.333334zM512 725.333333a213.333333 213.333333 0 1 1 213.333333-213.333333 213.333333 213.333333 0 0 1-213.333333 213.333333z m0-384a170.666667 170.666667 0 1 0 170.666667 170.666667 170.666667 170.666667 0 0 0-170.666667-170.666667z"
                  fill="#333333"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>

    {/* Responsive for small devices */}
      <div className="block xl:hidden">
          <div class="mx-5 items-center">
            <div class="relative">
              <div class="flex px-2 absolute inset-y-0 left-0 items-center  pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
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
          </div>

          <div className="flex items-center justify-center my-5 space-x-5">
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
             <svg_com/>
            </div>

            <div className="cursor-pointer" onClick={()=>setOpen(!open)}>
              {
              
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            }
            </div>
          </div>
      </div>
    </>
  );
};

export default NavBar;
