import React from 'react'
import LeftPart from '../../components/LeftPart'
import NavBar from '../../components/NavBar'

const CustomerList = () => {
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

                <div className="space-y-3 md:flex md:items-center md:justify-between md:mx-3 border-b-2 lg:ml-8 mb-3 pb-3">
                    <h1 className="text-center text-2xl font-primaryText font-semibold lg:ml-6 ">
                      Customer List
                    </h1> 
                    <div>
                  <button className="flex justify-center mx-auto lg:flex lg:justify-between items-center space-x-1 border-1 rounded-md p-2 bg-indigo-500 text-white lg:w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                     <h3>Add  Customer Details</h3>
                    </button>
                  </div> 
                </div>
                {/* product list */}
                <div className="lg:ml-8 h-screen lg:mx-3 border-2 rounded-md">   
                <div className="overflow-x-auto relative w-full">
                  <div className="md:flex md:justify-between space-y-3">
                  <span className="p-3">Show <input className="w-12 h-8" type="text" /> entries</span>
                  <div className="xl:mr-5 mx-3">
                 <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border font-primaryText border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search"
                required=""
                 />
                  </div>
                  </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase border-b-2">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                ID
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Customer
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Register Date
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Mail
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Phone
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Total Order
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
                            <td className="py-4 px-6">
                                Asim Sharma
                            </td>
                            <td className="py-4 px-6">
                                2022-12-27
                            </td>
                            <td className="py-4 px-6">
                               asimsharma@gmail.com
                            </td>
                            <td className="py-4 px-6">
                                9811111111
                            </td>
                            <td className="py-4 px-6">
                                5
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
                            <td className="py-4 px-6">
                                Asim Sharma
                            </td>
                            <td className="py-4 px-6">
                                2022-12-27
                            </td>
                            <td className="py-4 px-6">
                               asimsharma@gmail.com
                            </td>
                            <td className="py-4 px-6">
                                9811111111
                            </td>
                            <td className="py-4 px-6">
                                5
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
                            <td className="py-4 px-6">
                                Asim Sharma
                            </td>
                            <td className="py-4 px-6">
                                2022-12-27
                            </td>
                            <td className="py-4 px-6">
                               asimsharma@gmail.com
                            </td>
                            <td className="py-4 px-6">
                                9811111111
                            </td>
                            <td className="py-4 px-6">
                                5
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
                </div>
                </div>
            </div>
          </div>
      </div>        
    </>
  )
}

export default CustomerList