import React, { useState,useEffect} from 'react'
import LeftPart from '../../components/LeftPart'
import NavBar from '../../components/NavBar'
import api  from "../../api/constUrl"
import { useNavigate } from 'react-router-dom'
useNavigate

// import {storage} from "../../../fireBaseConfig.js"
// import { v4 } from "uuid";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,

// } from "firebase/storage";


const ProductAdd = () => {
  const navigate=useNavigate();

  //productCustomize
  //Caterozies
  const [Cinput, setCinput] = useState({
    Categories:""
  });
  //console.log(Cinput)
  const [csmpc, setcsmpc] = useState([]);

  //fetching customize products
  useEffect(()=>{
    const fetcustomizeproduct=async()=>{
     const response=await api.get("customize/cstomizepro");
     //console.log(response.data)
     setcsmpc(response.data)
    };
    fetcustomizeproduct();
 },[])


const handleChangeC=(e)=>{
  setCinput({...Cinput,[e.target.name]:e.target.value})
}

 const customiZeCSubmit=async()=>{
  //console.log("customiZeCSubmit")
  try{
    const response=await api.post("customize/productadd",Cinput);
    //console.log(response.data)
  }catch(err){
    //console.log(err)
  }
  
 }

 //productCustomize
  //SelectedSizes
  const [Sinput, setSinput] = useState({
    SelectedSizes:""
  });
  //console.log(Sinput)
  const [ssmpc, setssmpc] = useState([]);

  //fetching customize products
  useEffect(()=>{
    const fetsizesproduct=async()=>{
     const response=await api.get("customize/getsize");
     //console.log(response.data)
     setssmpc(response.data)
    };
    fetsizesproduct();
 },[])


const handleChangeS=(e)=>{
  setSinput({...Cinput,[e.target.name]:e.target.value})
}

 const customiZeSSubmit=async()=>{
  //console.log("customiZeCSubmit")
  try{
    const response=await api.post("customize/sizeadd",Sinput);
    //console.log(response.data)
  }catch(err){
    //console.log(err)
  }
  
 }


 //productCustomize
  //SelecteColors
  const [Coinput, setCoinput] = useState({
    selectColor:""
  });
  //console.log(Coinput)
  const [cosmpc, setcosmpc] = useState([]);

  //fetching customize products
  useEffect(()=>{
    const fetColorproduct=async()=>{
     const response=await api.get("customize/getcolor");
     //console.log(response.data)
     setcosmpc(response.data)
    };
    fetColorproduct();
 },[])


const handleChangeCo=(e)=>{
  setCoinput({...Coinput,[e.target.name]:e.target.value})
}

 const customiZeCoSubmit=async()=>{
  //console.log("customiZeCSubmit")
  try{
    const response=await api.post("customize/coloradd",Coinput);
    //console.log(response.data)
  }catch(err){
    //console.log(err)
  }
  
 }


//main works products add

const [input ,setinput]=useState({});
const [ImageUpload, setImageUpload] = useState([])
console.log(ImageUpload)
//console.log(ImageUpload)

  //all for products
  const handleChange=(e)=>{
    setinput({...input,[e.target.name]:e.target.value})
    console.log(input)
  }

//productSubmit
const  productSubmit=async(e)=>{
  e.preventDefault();
  try{
    const response=await api.post("productapi/add",{...input,image:ImageUpload},{
    headers:{
      "Content-Type": "multipart/form-data",
    },
 });
    console.log(response.data);
    if(response.data.success){
      swal({
      title: "sucessfully",
      text: "Product added sucessfully ",
      icon: "success",
      buttons: true,
    })  
    e.target.reset();
    setinput("");
    setImageUpload("");
    navigate("/dashboard/productdetails")
      }else{
          swal({
      title: "Faillde",
      text: "validation error",
      icon: "warning",
      
    })  
      }

  }catch(err){
     
     swal({
      title: "Warrning",
      text: "server errors",
      icon: "warning",
      
    })  
  }
}




  

  // //firebasestore
  // const [imageUpload, setImageUpload] = useState(null);
  // const [imageUrls, setImageUrls] = useState([]);
  // const imagesListRef = ref(storage, "images/");

  // const uploadFile = () => {
  //   let text = "Press a button!\nEither OK or Cancel.";
  // if (confirm(text) == true) {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage,` images/${imageUpload.name + v4()}`);
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageUrls((prev) => [...prev, url]);      
  //     });
  //   });
  // } else {
  //   text = "You canceled!";
  // } 
  // };
  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);


  return (
    <>
      <div className="bg-[#EBF5FF] pt-4 font-primaryText">
      <form onSubmit={productSubmit}>
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
                      Product Add sucessfully
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

                      <div className="items-center bg-white mb-5 ">
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
                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer    mb-3">
                      <div className="items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Categories</h1>

                      </div>
                      <div className=''>
                      <div className="flex justify-start gap-x-1 xl:justify-between items-center">
                        <div className='ml-2'>
                        <input
                         className='w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                         type="text" 
                         placeholder="Add Category"
                         name="Categories"
                         onChange={handleChangeC}
                          />
                          </div>
                        <div>
                        <button 
                        className='border-1 rounded-md p-1.5 bg-indigo-500 text-white'
                        onClick={customiZeCSubmit}  
                        >Add</button>
                        </div>  
                      </div>
                      
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
                        onChange={handleChange}
                        >
                        {
                          csmpc.map((item,index)=>{
                          return  <option value={item.Categories} key={index}>
                                   {item.Categories}
                          </option>
                        })
                        }
                        </select>
                      </div>
                    </div>
                    {/* size info */}
                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer mb-3">
                      <div className="items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Selected Sizes</h1>
                      </div>
                      <div className=''>
                      <div className="flex justify-start gap-x-1 xl:justify-between items-center">
                        <div className='ml-2'>
                        <input className='w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                        type="text"  
                        placeholder="Add Sizes" 
                        name='SelectedSizes'
                        onChange={handleChangeS}


                        />
                        </div>
                        <div>
                        <button
                         className='border-1 rounded-md p-1.5 bg-indigo-500 text-white'
                         onClick={customiZeSSubmit}
                         >
                        Add</button>
                        </div>  
                      </div>
                      
                      </div>
                      <div className="items-center p-2">
                        <label
                          htmlFor="countries_multiple"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Size Selected
                        </label>
                        <select
                        multiple
                        name='sizes'
                        onChange={handleChange}
                        
                        >
                        {
                          ssmpc.map((item,index)=>{
                          return  <option value={item.SelectedSizes} key={index}>
                                   {item.SelectedSizes}
                          </option>
                        })
                        }
                        </select>
                      </div>
                    </div>
                    {/* color info */}
                    <div className="border-2 rounded-lg p-2 bg-white cursor-pointer mb-3">
                      <div className="items-center justify-between space-x-5  p-2 bg-white cursor-pointer hover:text-pink-500">
                        <h1 className="font-semibold">Selected Color</h1>
                      </div>
                      <div className=''>
                      <div className="flex justify-start gap-x-1 xl:justify-between items-center">
                        <div className='ml-2'>
                        <input className='w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                        type="text"  
                        placeholder="Add Colors" 
                        name='selectColor'
                        onChange={handleChangeCo}


                        />
                        </div>
                        <div>
                        <button
                         className='border-1 rounded-md p-1.5 bg-indigo-500 text-white'
                         onClick={customiZeCoSubmit}
                         >
                        Add</button>
                        </div>  
                      </div>
                      
                      </div>
                      <div className="items-center p-2">
                        <label
                          htmlFor="countries_multiple"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Size selectColor
                        </label>
                        <select
                        multiple
                        name='color'
                        onChange={handleChange}
                        
                        >
                        {
                          cosmpc.map((item,index)=>{
                          return  <option value={item.selectColor} key={index}>
                                   {item.selectColor}
                          </option>
                        })
                        }
                        </select>
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
                              name='code'
                              onChange={handleChange}
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
                              onChange={handleChange}
                              name='totalStock'
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
                              name='productName'
                              onChange={handleChange}
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

                            
                           
                              {/*helo to the good night*/}
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
                                { /*firebase images inputs*/}
                               <input
                               id="dropzone-file"
                               type="file"
                               name='image'
                               className="hidden"
                               onChange={(e) => {
                                 setImageUpload(e.target.files[0]);
                               }}
                             />
                              </label>
                            </div>
                            {/*helo to the good night*/}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Add Button */}
                  <div className="items-center mx-3">
                    <button className="border-1 rounded-md p-2 bg-indigo-500 text-white w-full">
                      Add Products
                    </button>          
                  </div>
                  </div>   
                  
                </div>
          </div>
        </div>
        </form>
      </div>        
    </>
  )
}

export default ProductAdd;