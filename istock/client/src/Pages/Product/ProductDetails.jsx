import React, { useState,useEffect  } from "react";
import { useSelector} from 'react-redux';
import LeftPart from "../../components/LeftPart";
import NavBar from "../../components/NavBar";
import swal from "sweetalert"
import { Link } from "react-router-dom";
// import RightPart from "../../components/RightPart";
import api from "../../api/constUrl"

const ProductDetails = () => {
  // const token = useSelector((state) => state.user.currentUser.token);

    const [product,setproduct] = useState([]);
    const [input,setinput] = useState('');
    const [dataitem, setdataitem] = useState([])
    const deleteproduct=async(id,idx)=>{
      try {
       swal({
         title: "Are you sure?",
         text: "Once deleted, you will not be able to recover this imaginary file!",
         icon: "warning",
         buttons: true,
         dangerMode: true,
       })
        const response=api.delete(`productapi/deletebyid/${id}`,{...product})
           if( response.data.success){
 
             const newproductlist=product.filter((filter,index)=>{
               return index !==idx;
             })
             setproduct(newproductlist)
             swal( {
               title: "admin delete success?",
               text: "you item was delete",
               icon: "success",
             });
   
           }else{
             swal({
               title: "you are not admin?",
               text: "you cant delete any items if you want to delete item you can login admin accounts",
               icon: "warning",
               
             })
       
           }
         
        
   
       
 
      } catch (error) {
       console.log(error)
      }
      
     }
    useEffect(() => {
      const getProduct=async()=>{
       const response = await api.get("productapi/getproducts");
       console.log(response.data);
       setproduct(response.data);
       setdataitem(response.data)
      };

      getProduct();
    }, [])

    
 useEffect(() => {

  const searchfilter=async()=>{
    try{

      const response =await api.get(`/productapi/productsearch?search=${input}`,{
        // headers:{

          
        //   token:token,

        // }
      })
      setproduct(response.data)

      
      console.log(response.data)

    }catch(err){
      console.log(err)
    }


  }

  if(input) searchfilter();
  else{
    setproduct(dataitem)
  }

   
   
 }, [input])
 const search=(e)=>{
  setinput(e.target.value);
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
            <form >
                <div className='mb-8'>
                <NavBar />
                </div>
                 
                <div className="space-y-3 md:flex md:items-center md:justify-between md:mx-3 border-b-2 lg:ml-8 mb-3 pb-3">
                    <h1 className="text-center text-2xl font-primaryText font-semibold lg:ml-6 ">
                      Product List
                    </h1>  
                </div>
                {/* product list */}
                <div className="lg:ml-8 h-screen border-2 rounded-lg lg:mx-3">   
                <div className="overflow-x-auto relative w-full">
                  <div className="md:flex md:justify-between space-y-3">
                  <span className="p-3">Show <input className="w-12 h-8" type="text" /> entries</span>
                  <div className="xl:mr-5 mx-3">
                 <input
                type="text"
                id="simple-search"
                onChange={search}
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
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody> 
                      {product.map((data,index)=>{
                           let  dateTimeFormat3 = new Intl.DateTimeFormat('en-US', data.createdAt);
                            return <tr key={index}>
                            <td className="py-4 px-6"> 
                              {index+1}
                            </td>
                            <th scope="row" className="py-2 px-3 flex justify-self-start items-center space-x-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src={data.image} alt="img" className="h-20 w-20 object-cover rounded-md" />
                                <h2>{data.productName}</h2>                               
                           </th>
                           <td className="py-4 px-6">
                               {data.category}
                            </td>

                            <td className="py-4 px-6">
                            {data.totalStock}
                            </td>

                            <td className="py-4 px-6">
                            {data.totalStock}
                            </td>

                            <td className="py-4 px-6">
                            {data.newPrice}
                        </td>
                        <td className="py-4 px-6">
                            {dateTimeFormat3.format()}
                        </td>
                        <td className="py-4 px-6">
                        <div className='flex justify-start gap-x-2'>
                                    <div>
                                   <Link to={`/dashboard/productedit/${data._id}`}>  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-indigo-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg></Link> 
                                    </div>
                                    <div>
                                       
                                        <svg onClick={()=>deleteproduct(data._id,index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-red-500">
                                            
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                    </div>
                        </div>
                        </td>
                             </tr>
                        })
                      }   
                    </tbody>
                </table>
                </div>
                </div>
                </form>
            </div>
          </div>
      </div>        
    </>
  );
};

export default ProductDetails;
