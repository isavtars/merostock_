import React,{useState} from 'react'
import LeftPart from '../../components/LeftPart'
import NavBar from '../../components/NavBar'
const product =[
    {"id":"1",
    
"product":"shirt",
"category":"plane shirt",
"stock":"20",
"instock":"20",
"price":"1000",
"dateadded":"2022-12-27"

},

{"id":"1",
    
"product":"shirt",
"category":"plane shirt",
"stock":"20",
"instock":"20",
"price":"1000",
"dateadded":"2022-12-27"

},
]
const StockList = () => {
    const [item, setitem] = useState(product)
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
                      Stock Inventory List
                    </h1>  
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
                       {
                        item.map((data,index)=>{
                          return <tr key={index}>
                                <td className='ml-2'>{index}</td>
                                <td className='ml-2'>{data.product}</td>
                                <td className='ml-2'>{data.category}</td>
                                <td className='ml-2'>{data.stock}</td>
                                <td className='ml-2'>{data.instock}</td>
                                <td className='ml-2'>{data.price}</td>
                                <td className='ml-2'>{data.dateadded}</td>

                                
                                </tr>
                            
                            
                            
                        })
                       }
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

export default StockList