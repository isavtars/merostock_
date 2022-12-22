import React from "react";
import LeftPart from "../../components/LeftPart";
import NavBar from "../../components/NavBar";
import profile from "../.././assets/profile.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="bg-[#EBF5FF] pt-4 font-primaryText">
        <div className="xl:flex xl:justify-between">
          <div className="xl:w-1/4 hidden xl:block">
            <LeftPart />
          </div>
          <div className="xl:w-3/4 mt-5">
            <div className="mb-8">
              <NavBar />
            </div>

            <div className="mx-3 lg:ml-6">
              <h1 className="text-3xl  font-semibold mb-2">Admin Profile</h1>
              <hr className="mb-3" />

              {/* profile display */}
              <div className="lg:flex space-y-2 lg:space-y-0 lg:space-x-2 lg:mr-3">
                {/* left */}
                <div className="lg:w-2/4">
                  <div className="border-2 rounded-lg p-2 bg-white cursor-pointer">
                    <div className="flex justify-between mx-2">
                      <div>
                        <h1 className="font-semibold text-lg">Profile</h1>
                      </div>
                      <div>
                        <button className="border-1 rounded-md p-2 bg-indigo-500 text-white">
                          Edit
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-2.5">
                      <img
                        src={profile}
                        alt="image"
                        className="w-16 h-16 rounded-md mr-4 cursor-pointer object-top object-cover"
                      />
                      <h1 className="font-semibold">Bishal Pariyar</h1>
                      <h6 className="text-sm">24 Years , Bharatpur</h6>
                      <p className="text-center mx-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Exercitationem.
                      </p>
                    </div>

                    <div className="mt-3 space-y-2">
                      <div className="flex justify-start mx-4">
                        <div className="mx-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                            />
                          </svg>
                        </div>
                        <div>9807296187</div>
                      </div>

                      <div className="flex justify-start mx-4">
                        <div className="mx-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                          </svg>
                        </div>
                        <div>b@gmail.com</div>
                      </div>

                      <div className="flex justify-start mx-4">
                        <div className="mx-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                            />
                          </svg>
                        </div>
                        <div>21 March, 2000</div>
                      </div>

                      <div className="flex justify-start mx-4">
                        <div className="mx-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>Bharatpur, Chitwan</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="lg:w-3/4">
                  <div className="border-2 rounded-lg p-3 lg:px-5 bg-white cursor-pointer">
                    <form>
                      <div className="my-2 mb-5">
                        <p className="text-2xl mb-0 mr-4 font-semibold">
                          Profile Setting
                        </p>
                      </div>
                      <div className="lg:flex lg:justify-between lg:space-x-3">
                      {/* Name field */}
                      <div className="mb-6">
                        <label htmlFor="" className="font-medium text-xl">Your Name</label>
                        <input
                          name="name"
                          type="text"
                          className="mt-2 form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder=""
                        />
                      </div>
                      {/* Number field */}
                      <div className="mb-6">
                        <label htmlFor="" className="font-medium text-xl">Your Number</label>
                        <input
                          name="name"
                          type="text"
                          className="mt-2 form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder=""
                        />
                      </div>
                      </div>

                      <div className="lg:flex lg:justify-between lg:space-x-3">
                      {/* Email field */}
                      <div className="mb-6">
                        <label htmlFor="" className="font-medium text-xl">Your Email</label>
                        <input
                          name="name"
                          type="email"
                          className="mt-2 form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder=""
                        />
                      </div>
                      {/* Shop Name field */}
                      <div className="mb-6">
                        <label htmlFor="" className="font-medium text-xl">Shop Name</label>
                        <input
                          name="name"
                          type="text"
                          className="mt-2 form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder=""
                        />
                      </div>
                      </div>
                      {/* address */}
                      <div className="mb-6">
                        <label htmlFor="" className="font-medium text-xl">Shop Address</label>
                        <input
                          name="name"
                          type="text"
                          className="mt-2 form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder=""
                        />
                      </div>

                      <div className="grid lg:grid-cols-3 lg:gap-x-2">
                      {/* state */}
                      <div className="mb-6">
                        <label htmlFor="" className="font-medium text-xl">Province/State</label>
                        <input
                          name="name"
                          type="text"
                          className="mt-2 form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder=""
                        />
                      </div>
                      {/* country */}
                      <div className="mb-6">
                        <label htmlFor="" className="font-medium text-xl">Country</label>
                        <input
                          name="name"
                          type="text"
                          className="mt-2 form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder=""
                        />
                      </div>
                      {/* postal code  */}
                      <div className="mb-6">
                        <label htmlFor="" className="font-medium text-xl">Postal Code</label>
                        <input
                          name="name"
                          type="text"
                          className="mt-2 form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder=""
                        />
                      </div>
                      </div>
                    {/* save button */}
                      <div className="lg:text-left">
                        <button
                          type="submit"
                          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase        rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg           focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150            ease-in-out"
                        >
                          Save
                        </button>
                        
                      </div>
                      
                    </form>
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
