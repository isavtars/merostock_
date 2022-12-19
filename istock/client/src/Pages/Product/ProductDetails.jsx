import React from "react";
import LeftPart from "../../components/LeftPart";
import NavBar from "../../components/NavBar";
import RightPart from "../../components/RightPart";

const ProductDetails = () => {
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
                      Product List
                    </h1>  
                </div>
                {/* product list */}
                <div className="lg:ml-8 h-screen">   
                <div class="overflow-x-auto relative w-full">
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
                    <thead className="text-xs text-gray-700 uppercase">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                ID
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Product
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Category
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Stock
                            </th>
                            <th scope="col" className="py-3 px-6">
                                In Stock
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
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
                            <th scope="row" className="py-2 px-3 flex justify-self-start items-center space-x-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src="https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" className="h-20 w-20 object-cover rounded-md" />
                                <h2>Shirt</h2>
                                
                            </th>
                            <td className="py-4 px-6">
                                plane shirt
                            </td>
                            <td className="py-4 px-6">
                                20
                            </td>
                            <td className="py-4 px-6">
                                20
                            </td>
                            <td className="py-4 px-6">
                                Nrs.2999
                            </td>
                            <td className="py-4 px-6">
                                2022-08-12
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
                                plane shirt
                            </td>
                            <td className="py-4 px-6">
                                20
                            </td>
                            <td className="py-4 px-6">
                                20
                            </td>
                            <td className="py-4 px-6">
                                Nrs.2999
                            </td>
                            <td className="py-4 px-6">
                                2022-08-12
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
                                plane shirt
                            </td>
                            <td className="py-4 px-6">
                                20
                            </td>
                            <td className="py-4 px-6">
                                20
                            </td>
                            <td className="py-4 px-6">
                                Nrs.2999
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
  );
};

export default ProductDetails;
