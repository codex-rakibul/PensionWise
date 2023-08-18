import Head from 'next/head';
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF} from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';
export default function signin() {
    const renderData = (
        <>
        <Head>
            <title>Sign in</title>
        </Head>
         <div className='bg-white h-screen flex justify-center items-center lg:pt-32'>
            <section className="">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full rounded shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-500 border-gray-700">
                    <div className="p-10 space-y-4 md:space-y-6">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                        Sign in to your account
                        </h1>
                        <form className="space-y-2 md:space-y-4" action="#">
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
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                                required=""
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                htmlFor="remember"
                                className="text-white"
                                >
                                Remember me
                                </label>
                            </div>
                            </div>
                            <a
                            href="#"
                            className="text-sm font-medium text-white hover:underline "
                            >
                            Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-gray-700 hover:bg-gray-800  font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Sign in
                        </button>
                        <p className="text-sm font-light text-white ">
                            Don’t have an account yet?{" "}
                            <Link
                            href={"/signup"}
                            className="font-medium text-gray-300"
                            >
                            Sign up
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
  return renderData;
}
