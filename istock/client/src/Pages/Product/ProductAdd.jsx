import React, { useState } from 'react'
import LeftPart from '../../components/LeftPart'
import NavBar from '../../components/NavBar'
import { Link } from 'react-router-dom'

const ProductAdd = () => {

const [input ,setinput]=useState({});
  const handleChange=(e)=>{
    setinput({...input,[e.target.name]:e.target.value})
    console.log(input)
  }
  return (
    <>
      <div className="bg-[#EBF5FF] pt-4">
        <div className="xl:flex xl:justify-between">
            <div className="xl:w-1/4 hidden xl:block">
                <LeftPart />
            </div>
            <div className="xl:w-3/4 mt-5">
                <div className='mb-8'>
                <NavBar />
                </div>

                <div className="space-y-3 md:flex md:items-center md:justify-between md:mx-3">
                  <div>
                    <h1 className="text-center text-2xl font-primaryText font-semibold lg:ml-6">
                      Product Add
                    </h1>
                  </div>
                  
                </div>

                <div className="flex flex-col lg:flex lg:flex-row lg:justify-between lg:mx-10 lg:mt-5 lg:space-x-5 p-3 lg:p-0 space-y-4">
                 {/* left */}
                  <div className="lg:w-1/4 lg:space-y-2 lg:pt-3">
                    {/* price info */}
                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer mb-3">
                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold text-xl">Pricing Info</h1>
                      </div>

                      <div className="items-centerbg-white mb-5 ">
                          <div className="p-3 space-y-2">
                            <label className="font-medium">
                              Product Price Old
                            </label>
                            <input
                              type="number"
                              id="simple-search"
                              name='productOldprice'
                              onChange={handleChange}
                              className="bg-gray-50 border font-primaryText border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Nrs. 2000"
                              required=""
                            />
                          </div>
                          <div className="p-3 space-y-2">
                            <label className="font-medium">
                              Product Price New
                            </label>
                            <input
                              type="number"
                              name='newPrice'
                              onChange={handleChange}
                              id="simple-search"
                              className="bg-gray-50 border font-primaryText border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Nrs. 5000"
                              required=""
                            />
                          </div>
                        
                      </div>
                    </div>
                    {/* categories info */}
                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer mb-3">
                      <div className="items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Categories</h1>
                      </div>
                      <div className="items-center p-2">
                        <label
                          htmlFor="countries_multiple"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Categories Selected
                        </label>
                        <select
                          multiple
                          name='category'
                          id="countries_multiple"
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option value="Pants">Pants</option>
                          <option value="Shirts">Shirts</option>
                          <option value="Shoes">Shoes</option>
                          <option value="Jackets">Jackets</option>
                        </select>
                      </div>
                    </div>
                    {/* size info */}
                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer mb-3">
                      <div className="items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Selected Sizes</h1>
                      </div>
                      <div>
                        <div className="flex items-center ml-3 space-x-3">
                          <h1 className="font-medium">XS</h1>
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div className="flex items-center ml-3 space-x-3">
                          <h1 className="font-medium">S</h1>
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div className="flex items-center ml-3 space-x-3">
                          <h1 className="font-medium">M</h1>
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div className="flex items-center ml-3 space-x-3">
                          <h1 className="font-medium">L</h1>
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div className="flex items-center ml-3 space-x-3">
                          <h1 className="font-medium">XL</h1>
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div className="flex items-center ml-3 space-x-3">
                          <h1 className="font-medium">XXL</h1>
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                      </div>
                    </div>
                    {/* color info */}
                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer mb-3">
                      <div className="p-2 cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Select Colors</h1>
                      </div>

                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Blue</h1>
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Black</h1>
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Red</h1>
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                    </div>
                    {/* inventory info */}
                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer mb-3">
                      <div className="flex items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Inventory Info</h1>
                      </div>

                      <div className="flex items-center justify-between space-x-5  bg-white mb-5">
                        <div>
                          <div className="p-3 space-y-2">
                            <label className="font-medium">SKU</label>
                            <input
                              type="text"
                              id="simple-search"
                              className="bg-gray-50 border font-primaryText border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="SKU2022"
                              required=""
                            />
                          </div>
                          <div className="p-3 space-y-2">
                            <label className="font-medium">
                              Total Stock Quantity
                            </label>
                            <input
                              type="text"
                              id="simple-search"
                              className="bg-gray-50 border font-primaryText border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="1455"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="lg:w-3/4 bg-[#EBF5FF] lg:space-y-2 ">
                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer mb-3">
                      <div className="items-center space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-bold">Basic Information</h1>
                      </div>

                      <div className="items-center space-x-5 mb-5">
                        <div>
                          <div className="md:flex items-center md:justify-items-start p-3 md:space-x-5">
                            <label className="font-medium">Name</label>
                            <input
                              type="text"
                              id="simple-search"
                              className="bg-gray-50 border font-primaryText border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  px-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Nike Shoe"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer mb-3">
                      <div className="items-center space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-bold">Images</h1>
                      </div>

                      <div className="items-center space-x-5 mb-5">
                        <div>
                          <div className="p-3 space-y-5">
                            <label className="font-medium">
                              Upload an Image
                            </label>

                            <div className="flex items-center justify-center w-full">
                              <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                              >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <svg
                                    aria-hidden="true"
                                    className="w-10 h-10 mb-3 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    ></path>
                                  </svg>
                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">
                                      Click to upload
                                    </span>{" "}
                                    or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                  </p>
                                </div>
                                <input
                                  id="dropzone-file"
                                  type="file"
                                  className="hidden"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Add Button */}
                  <div className="items-center mx-3">
                    <button className="border-1 rounded-md p-2 bg-indigo-500 text-white w-full">
                      Add
                    </button>
                    <Link to="/userprofile">go to profile</Link>
                  </div>
                  </div>   
                </div>
          </div>
        </div>
      </div>        
    </>
  )
}

export default ProductAdd