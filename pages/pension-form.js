import Head from 'next/head';
import Link from 'next/link'
import React from 'react'

export default function pensionform() {
    const renderData = (
        (
            <>
            <Head>
                <title>Pension Form</title>
            </Head>
            <div className='bg-white  flex justify-center items-center lg:pt-32 pt-24 pb-6'>
            <section className="">
            <div className="flex flex-col items-center justify-center px-6 md:py-8 mx-auto lg:py-0">
            <div className="w-full  rounded shadow border md:mt-0 xl:p-0 bg-gray-500 border-gray-700">
              <div className="p-10 space-y-4 md:space-y-6">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                    Applying for pension is a commitment to<br/> your well-deserved retirement.
                </h1>
                <form className="space-y-2 md:space-y-4" action="#">
                  <div className='flex gap-6'>
                    <div className=''>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                        >
                        Author Full Name*
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="abc"
                        required=""
                        />
                    </div>
                    <div>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                        >
                        Father's Name*
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="abc"
                        required=""
                        />
                    </div>
                  </div>
                  <div className='flex gap-6'>
                    <div className=''>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                        >
                        Mother's Name*
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="abc"
                        required=""
                        />
                    </div>
                    <div>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                        >
                        Postal Code*
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="abc"
                        required=""
                        />
                    </div>
                  </div>
                  <div className='flex gap-6'>
                    <div className=''>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                        >
                        NID Number*
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="abc"
                        required=""
                        />
                    </div>
                    <div>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                        >
                        Retried Address*
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="abc"
                        required=""
                        />
                    </div>
                  </div>
                  <div className='flex gap-6'>
                    <div className=''>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                        >
                        Join Date*
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="abc"
                        required=""
                        />
                    </div>
                    <div>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                        >
                        Retried Date*
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="abc"
                        required=""
                        />
                    </div>
                  </div>
                  <div className='flex gap-6'>
                    <div className=''>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                        >
                        Basic Salary*
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="abc"
                        required=""
                        />
                    </div>
                    <div>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                        >
                        Author Phone No.*
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="abc"
                        required=""
                        />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          I agree with the <Link
                      href={"/"}
                      className="font-medium text-gray-300"
                    >
                       terms and conditions
                    </Link>
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-gray-700 hover:bg-gray-800    font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Apply
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
            </div>
            </>
        )
    )
  return renderData;
}
