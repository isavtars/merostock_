import React from 'react'
import LeftPart from '../../components/LeftPart'
import NavBar from '../../components/NavBar'

const Purchase = () => {
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
                  <div>
                    <h1 className="text-center text-2xl font-primaryText font-semibold lg:ml-6 ">
                      Purchase items
                    </h1>
                    </div>  
                  <div>
                  <button className="flex justify-center mx-auto lg:flex lg:justify-between items-center space-x-1 border-1 rounded-md p-2 bg-indigo-500 text-white lg:w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                     <h3>Add Purchase item</h3>
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
                                Items
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Supplier
                            </th>                          
                            <th scope="col" className="py-3 px-6">
                                Total
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Paid
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Date Added
                            </th>
                        </tr>
                    </thead>
                    <tbody>  
                        <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6"> 
                            1
                            </td>
                            <td className="py-4 px-6">
                               shirt
                            </td>
                            <td className="py-4 px-6">
                                Bibek Suppliers
                            </td>
                            <td className="py-4 px-6">
                                Nrs. 5500
                            </td>
                            <td className="py-4 px-6">
                                Nrs. 5000
                            </td>
                            <td className="py-4 px-6">
                                2022-08-12
                            </td>
                        </tr>

                        <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6"> 
                            1
                            </td>
                            <td className="py-4 px-6">
                               shirt
                            </td>
                            <td className="py-4 px-6">
                                Bibek Suppliers
                            </td>
                            <td className="py-4 px-6">
                                Nrs. 5500
                            </td>
                            <td className="py-4 px-6">
                                Nrs. 5000
                            </td>
                            <td className="py-4 px-6">
                                2022-08-12
                            </td>
                        </tr>

                        <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6"> 
                            1
                            </td>
                            <td className="py-4 px-6">
                               shirt
                            </td>
                            <td className="py-4 px-6">
                                Bibek Suppliers
                            </td>
                            <td className="py-4 px-6">
                                Nrs. 5500
                            </td>
                            <td className="py-4 px-6">
                                Nrs. 5000
                            </td>
                            <td className="py-4 px-6">
                                2022-08-12
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

export default Purchase