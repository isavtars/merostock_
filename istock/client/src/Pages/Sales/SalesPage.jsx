import React from 'react'
import LeftPart from '../../components/LeftPart'
import NavBar from '../../components/NavBar'

const SalesPage = () => {
  return (
    <>
      <div className="bg-[#EBF5FF] pt-4 font-primaryText">
        <div className="xl:flex xl:justify-between">
            <div className="xl:w-1/4 hidden xl:block">
                <LeftPart />
            </div>
            <div className="xl:w-3/4 mt-5">
                <div className='mb-8'>
                <NavBar />
                </div>

                <div className="space-y-3 md:flex md:items-center md:justify-between md:mx-3 border-b-2 lg:ml-8 mb-3 pb-3">
                    <h1 className="text-center text-3xl  font-bold lg:ml-6 ">
                      Sales
                    </h1>  
                </div>
                {/* product list */}
                <div className="border-2 rounded-lg p-2 lg:mx-3 items-center mb-5  lg:ml-8 ">   
                <div className="overflow-x-auto relative w-full">
                     <div className="lg:ml-6 lg:mb-3">
                         <h2 className='text-xl font-medium'>Sales Summary</h2>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase">
                        <tr className='border-y-2'>
                            <th scope="col" className="py-3 px-6">
                                ID
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Product
                            </th>        
                            <th scope="col" className="py-3 px-6">
                                Quantity
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>   
                        </tr>
                    </thead>
                    
                    <tbody>  
                        <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6"> 
                            1
                            </td>
                            <th scope="row" className="py-2 px-3 flex justify-self-start items-center space-x-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src="https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" className="h-20 w-20 object-cover rounded-md" />
                                <h2>Shirt</h2>
                                
                            </th>
                            <td className="py-4 px-6">
                            <input
                              type="number"
                              id="simple-search"
                              name=''
                              className="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md"
                              placeholder="1"
                              required=""
                            />
                            </td>
                            <td className="py-4 px-6">
                                Nrs.2999
                            </td>
                            <td className="py-4 px-6">
                            <div className='flex justify-start gap-x-2'>
                                    <div>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-indigo-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                        </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-red-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                            </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6"> 
                            1
                            </td>
                            <th scope="row" className="py-2 px-3 flex justify-self-start items-center space-x-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src="https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" className="h-20 w-20 object-cover rounded-md" />
                                <h2>Shirt</h2>
                                
                            </th>
                            <td className="py-4 px-6">
                            <input
                              type="number"
                              id="simple-search"
                              name=''
                              className="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md"
                              placeholder="1"
                              required=""
                            />
                            </td>
                            <td className="py-4 px-6">
                                Nrs.2999
                            </td>
                            <td className="py-4 px-6">
                            <div className='flex justify-start gap-x-2'>
                                    <div>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-indigo-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                        </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-red-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                            </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6"> 
                            1
                            </td>
                            <th scope="row" className="py-2 px-3 flex justify-self-start items-center space-x-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src="https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" className="h-20 w-20 object-cover rounded-md" />
                                <h2>Shirt</h2>
                                
                            </th>
                            <td className="py-4 px-6">
                            <input
                              type="number"
                              id="simple-search"
                              name=''
                              className="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md"
                              placeholder="1"
                              required=""
                            />
                            </td>
                            <td className="py-4 px-6">
                                Nrs.2999
                            </td>
                            <td className="py-4 px-6">
                            <div className='flex justify-start gap-x-2'>
                                    <div>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-indigo-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                        </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-red-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                            </div>
                                </div>
                            </td>
                        </tr>
                       
                        
                    </tbody>
                    </table>
                    <div className="float-right p-2  cursor-pointer space-y-3 mt-5">
                        <div className='flex justify-around space-x-3 mx-5'>
                            <div><h3 className='font-medium'>Subtotal Price:</h3></div>
                            <div><h4>Nrs.5050</h4></div>
                        </div>
                        <div className='flex justify-around space-x-3 mx-5'>
                            <div><h3 className='font-medium'>Discount:</h3></div>
                            <div><h4>Nrs.50</h4></div>
                        </div>
                        <hr />
                        <div className='flex justify-around space-x-3 mx-5'>
                            <div><h3 className='font-medium'>Total Price:</h3></div>
                            <div><h4>Nrs.5000</h4></div>
                        </div>
                             
                    </div>
                </div>
                <hr className='my-3' />
                 <button className="border-1 rounded-md p-2 bg-indigo-500 text-white w-full">
                      Sell Items
                    </button>
                </div>
            </div>
          </div>
      </div>        
    </>
  )
}

export default SalesPage