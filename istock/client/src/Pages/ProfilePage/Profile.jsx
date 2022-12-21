import React from 'react';
import LeftPart from '../../components/LeftPart';
import NavBar from '../../components/NavBar';
import profile from '../.././assets/profile.jpg'

const Profile = () => {
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

                <div className='ml-3 lg:ml-6'>
                  <h1 className='text-3xl  font-semibold mb-2'>Admin Profile</h1>
                  <hr className='mb-3' />

                  {/* profile display */}
                  <div className="flex xl:items-center flex-col lg:flex lg:flex-row lg:justify-between lg:mx-10 lg:mt-3 lg:space-x-5 p-3 lg:p-0 space-y-4">
                 {/* left */}
                  <div className="lg:w-2/4 lg:space-y-2 lg:pt-7">
                   <div className='border-2 rounded-lg p-2 bg-white cursor-pointer'>
                    <div className='flex justify-between mx-2'>
                      <div><h1 className='font-semibold text-lg'>Profile</h1></div>
                      <div><button className='border-1 rounded-md p-2 bg-indigo-500 text-white'>Edit</button></div>
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-2.5'>
                   <img
                    src={profile}
                        alt="image"
                       className="w-16 h-16 rounded-md mr-4 cursor-pointer object-top object-cover"
                     />
                      <h1 className='font-semibold'>Bishal Pariyar</h1>
                      <h6 className='text-sm'>24 Years , Bharatpur</h6>
                      <p className='text-center mx-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem.</p>
                      <div className='self-start ml-5'>
                        <div className='flex justify-around space-x-3'>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            </div>
                          <div>9807296187</div>
                        </div>

                        <div className='flex justify-around space-x-3'>
                          <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>

                            </div>
                          <div>9807296187</div>
                        </div>

                        <div className='flex justify-around space-x-3'>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            </div>
                          <div>9807296187</div>
                        </div>

                        <div className='flex justify-around space-x-3'>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            </div>
                          <div>9807296187</div>
                        </div>
                       
                      </div>
                      
                    </div>
                   </div>
                  </div>

                  {/* Right */}
                  <div className="lg:w-3/4 lg:space-y-2 lg:pt-3">
                  <div className='border-2 rounded-lg p-2 bg-white cursor-pointer'>
                    hlo
                   </div>
                  </div>   
                 </div>
                </div>
          </div>
        </div>
      </div>        
    </>
  );
};

export default Profile;