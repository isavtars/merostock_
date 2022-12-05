import React from "react";

import LeftPart from "../../components/LeftPart";
import NavBar from "../../components/NavBar";
import RightPart from "../../components/RightPart";

const ProductDetails = () => {
  return (
    <>
      <div className="hidden xl:block bg-[#EBF5FF] font-primaryText">
        <div className="xl:flex xl:justify-between">
          <div className="lg:w-1/4">
            <LeftPart />
          </div>
          <div className="lg:w-3/4">
            <div className="mt-10">
              <NavBar />
              <div>
                {/* hero section */}
                <div className="flex justify-between ml-10 mt-5 border-b-2 pb-2">
                  <div>
                  <h1 className="text-3xl font-primaryText font-semibold">
                    Products
                  </h1>
                  </div>
                  <div>
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
                  </div>
                </div>

                <div className="flex justify-between mx-10 mt-5 space-x-5">
                  {/* left */}
                  <div className="w-1/4">
                    <div className="flex items-center justify-between space-x-5 border-2 rounded-lg p-2 bg-white mb-5">
                      <h1 className="font-semibold">Filter</h1>
                      <button className="border-1 rounded-xl p-3 bg-indigo-500 text-white">
                        Reset
                      </button>
                    </div>

                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer">
                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Categories</h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>

                      <div class="flex items-center justify-between space-x-5  bg-white mb-5">
                        <div >               
                          <input
                            type="text"
                            id="simple-search"
                            className="bg-gray-50 border font-primaryText border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search"
                            required=""
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Pants</h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Shirt</h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Jacket</h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer">
                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Select Sizes</h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <ul className="flex justify-around">
                          <li className="border-2 rounded-md p-1 font-medium">XS</li>
                          <li className="border-2 rounded-md p-1 font-medium">S</li>
                          <li className="border-2 rounded-md p-1 font-medium">M</li>
                          <li className="border-2 rounded-md p-1 font-medium">L</li>
                          <li className="border-2 rounded-md p-1 font-medium">XL</li>
                          <li className="border-2 rounded-md p-1 font-medium">XXL</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer">
                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Select Colors</h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>

                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Blue</h1>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      </div>
                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Black</h1>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      </div>
                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Red</h1>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      </div>
                    </div>

                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer">
                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Pricing Ranges</h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                      <div className="space-y-5">
                        <div className="flex justify-between">
                        <label htmlFor="" className="text-sm">Minimize Price</label>
                        <input type="search" name="" id="" className="text-sm w-16 rounded-lg mx-2 " />
                        </div>

                        <div className="flex justify-between">
                        <label htmlFor="" className="text-sm">Maximize Price</label>
                        <input type="search" name="" id="" className="text-sm w-16 rounded-lg mx-2" />
                        </div>

                      </div>
                    </div>

                  </div>
                  {/* Right */}
                  <div className="w-3/4 bg-[#EBF5FF] border-2 space-y-2 p-2 rounded-lg">
                    
                    <div className="flex justify-self-stretch bg-white rounded-xl">
                    <div className="p-2 rounded-xl">
                      <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="shoes" className="w-28 h-28 object-cover rounded-lg"/>
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between h-1/2">
                        <div>                        
                        <h1 className="p-2 font-semibold text-xl">Nike Shoes</h1>
                        </div>
                      </div>
                      <div className="h-1/2">
                      <div className="p-2">
                        <h1>Price</h1>
                        <h3 className="font-bold">Nrs. 5000</h3>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div className="flex justify-self-stretch bg-white rounded-xl">
                    <div className="p-2 rounded-xl">
                      <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="shoes" className="w-28 h-28 object-cover rounded-lg"/>
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between h-1/2">
                        <div>                        
                        <h1 className="p-2 font-semibold text-xl">Nike Shoes</h1>
                        </div>
                      </div>
                      <div className="h-1/2">
                      <div className="p-2">
                        <h1>Price</h1>
                        <h3 className="font-bold">Nrs. 5000</h3>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div className="flex justify-self-stretch bg-white rounded-xl">
                    <div className="p-2 rounded-xl">
                      <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="shoes" className="w-28 h-28 object-cover rounded-lg"/>
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between h-1/2">
                        <div>                        
                        <h1 className="p-2 font-semibold text-xl">Nike Shoes</h1>
                        </div>
                      </div>
                      <div className="h-1/2">
                      <div className="p-2">
                        <h1>Price</h1>
                        <h3 className="font-bold">Nrs. 5000</h3>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div className="flex justify-self-stretch bg-white rounded-xl">
                    <div className="p-2 rounded-xl">
                      <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="shoes" className="w-28 h-28 object-cover rounded-lg"/>
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between h-1/2">
                        <div>                        
                        <h1 className="p-2 font-semibold text-xl">Nike Shoes</h1>
                        </div>
                      </div>
                      <div className="h-1/2">
                      <div className="p-2">
                        <h1>Price</h1>
                        <h3 className="font-bold">Nrs. 5000</h3>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div className="flex justify-self-stretch bg-white rounded-xl">
                    <div className="p-2 rounded-xl">
                      <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="shoes" className="w-28 h-28 object-cover rounded-lg"/>
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between h-1/2">
                        <div>                        
                        <h1 className="p-2 font-semibold text-xl">Nike Shoes</h1>
                        </div>
                      </div>
                      <div className="h-1/2">
                      <div className="p-2">
                        <h1>Price</h1>
                        <h3 className="font-bold">Nrs. 5000</h3>
                        </div>
                      </div>
                    </div>
                    </div>

                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block xl:hidden bg-[#EBF5FF] -mt-10 pt-5">
      <RightPart />
        </div>
    </>
  );
};

export default ProductDetails;
