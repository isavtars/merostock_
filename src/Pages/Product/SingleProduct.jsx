import React from 'react'
import LeftPart from '../../components/LeftPart'
import NavBar from '../../components/NavBar'

const SingleProduct = () => {
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

                <div className="space-y-3 md:flex md:items-center md:justify-between md:mx-3 lg:ml-8 mb-3 pb-3">
                    <h1 className="text-center text-2xl font-primaryText font-semibold lg:ml-6 ">
                      Product Details
                    </h1>  
                </div>
                {/* product Details */}
                <div className="flex flex-col lg:flex-row  lg:justify-items-start lg:mx-10 lg:space-x-8 mx-3 p-3 lg:m-5 border-2 rounded-md lg:mb-5">
                 <div className='p-2'>
                    <img src="https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="singleimage" className='w-full xl:mb-10 mb-3 rounded-md object-cover'/>
                 </div>

                 <div className='pt-5'>
                    <div>
                    <h1 className='text-3xl font-semibold items-start'>shirt</h1>
                    <h2 className='font-semibold'>Nrs. 2000</h2>
                    </div>
                    <div className='pt-5 md:flex md:flex-row flex flex-col'>
                    <h1 className='text-xl font-semibold items-start mr-5'>sizes</h1>
                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer mb-3">
                      <div className='md:flex items-center'>
                        <div className="flex items-center ml-3 space-x-3">
                          <h1 className="font-medium">XS</h1>
                          <input
                            id="default-checkbox"
                            checked
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
                            checked
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div className="flex items-center ml-3 space-x-3">
                          <h1 className="font-medium">XXL</h1>
                          <input
                            id="default-checkbox"
                            checked
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className='pt-5 md:flex md:flex-row flex flex-col'>
                    <h1 className='text-xl font-semibold items-start mr-3'>colors</h1>
                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer mb-3">
                      <div className='md:flex items-center'>
                        <div className="flex items-center ml-3 space-x-3">
                          <h1 className="font-medium">Black</h1>
                          <input
                            id="default-checkbox"
                            checked
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div className="flex items-center ml-3 space-x-3">
                          <h1 className="font-medium">White</h1>
                          <input
                            id="default-checkbox"
                            checked
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div className="flex items-center ml-3 space-x-3">
                          <h1 className="font-medium">Yellow</h1>
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div className="flex items-center ml-3 space-x-3">
                          <h1 className="font-medium">Green</h1>
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className='lg:pt-5 flex items-center'>
                    <h1 className='text-xl font-semibold items-start mr-5'>Category</h1>
                    <h3 className='font-semibold text-lg'>plane shirt</h3>
                    </div>
                    <div className='pt-5 flex items-center'>
                    <h1 className='text-xl font-semibold items-start mr-5'>In Stock</h1>
                    <h3 className='font-semibold text-lg'>5</h3>
                    </div>
                </div>   
                </div>
            </div>
          </div>
      </div>        
    </>
  )
}

export default SingleProduct