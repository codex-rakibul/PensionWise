import Head from 'next/head';
import Link from 'next/link'
import React from 'react'

export default function signup() {
    const renderData = (
        (
            <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <div className='bg-white flex justify-center items-center lg:pt-32 md:py-24 py-12'>
            <section className=" ">
            <div className="flex flex-col items-center justify-center px-6 md:py-8 mx-auto lg:py-0">
            <div className="w-full  rounded shadow border md:mt-0 xl:p-0 bg-gray-500 border-gray-700">
              <div className="p-10 space-y-4 md:space-y-6">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                  Create a new account
                </h1>
                <form className="space-y-2 md:space-y-4 " action="#">
                  <div className='flex gap-2'>
                    <div className=''>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                        >
                        First Name
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
                        Last Name
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
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="pensionwise@company.com"
                      required=""
                    />
                  </div>
                  <div className='flex gap-2'>
                  <div>
                        <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-white"
                        >
                        Password
                        </label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required=""
                        />
                   </div>
                    <div>
                        <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-white"
                        >
                        Confirm Password
                        </label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    Sign Up
                  </button>
                  <p className="text-sm font-light text-white ">
                  Already have an account yet?{" "}
                    <Link
                      href={"/signin"}
                      className="font-medium text-gray-300"
                    >
                      Sign In
                    </Link>
                  </p>
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
