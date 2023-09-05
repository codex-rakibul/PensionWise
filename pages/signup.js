import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from '@/app/feature/allUsers/alluserSlice';
import { useRouter } from "next/router";
import { addPensionForm } from '@/app/feature/pensionData/pensionFormSlice';

export default function Signup()  {
  const router = useRouter();
  const [loginError, setLoginError] = useState(false);
  const loginData = useSelector((state) => state.allUserReducer);
  const dispatch = useDispatch();
  
  // const userData = useSelector((state) => state.userReducer);
  const formikSignUP = useFormik({
    initialValues: {
      userId: "",
      name: "",
      email: "",
      password: "",
      cpassword:"",
      agreeTerms: false, 
    },

    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "Name must have at least 2 characters")
        .required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, "Password at least 6 characters")
        .required(),
      cpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      agreeTerms: yup
        .boolean()
        .oneOf([true], "You must agree to the terms and conditions"),
    }),

    onSubmit: (values, { resetForm }) => {
      const person = {
        ...values,
        userId: uuidv4(),
        role: "user",
      };
      const pensionForm ={
        userId:person.userId,
        apply_status:"no", //no, apply, done, reject
        form_status: {
            junior_officer:"waitting", // success, processing, waitting, cancelled
            general_officer:"waitting", 
            head_offficer:"waitting", 
        },
        rejection_msg:"",
        fullName:"",
        fathers_name:"",
        mothers_name:"",
        postal_code:"",
        nid_number:"",
        retried_address:"",
        join_date:"",
        retried_date:"",
        basic_salary:"",
        phone_no:"",
        total_pension:"",
      }
      localStorage.setItem("user_id", JSON.stringify(person.userId));
      // Store All User
      dispatch(addUser(person));
      // Store Pension Form Data
      // dispatch(addPensionForm(pensionForm))

      // console.log("userData", person);
      // console.log("pensionFormData", pensionForm);

      const { name, email, password, cpassword, userId } = values;
      router.push("/");
      message.success("Successfully submitted...Now yon can login");
      resetForm({ values: { userId: "", name: "", email: "", password: "",cpassword:"" } });
    },
  });
  const srenderNameError = formikSignUP.touched.name &&
  formikSignUP.errors.name && (
    <span className="text-indigo-300">{formikSignUP.errors.name}</span>
  );
const srenderEmailError = formikSignUP.touched.email &&
  formikSignUP.errors.email && (
    <span className="text-indigo-300">{formikSignUP.errors.email}</span>
  );
  const srenderPasswordError =
  (formikSignUP.touched.password && formikSignUP.errors.password) ||
  (formikSignUP.touched.cpassword && formikSignUP.errors.cpassword) ? (
    <span className="text-indigo-300">
      {formikSignUP.errors.password || formikSignUP.errors.cpassword}
    </span>
  ) : null;
  const srenderAgreeTermsError =
  formikSignUP.touched.agreeTerms &&
  formikSignUP.errors.agreeTerms && (
    <span className="text-indigo-300">
      {formikSignUP.errors.agreeTerms}
    </span>
  );
    const renderData = (
        (
          <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <div className='bg-white flex justify-center items-center lg:pt-32 py-24'>
            <section className=" ">
            <div className="flex flex-col items-center justify-center px-6 md:py-8 mx-auto lg:py-0">
            <div className="w-full  rounded shadow border md:mt-0 xl:p-0 bg-gray-600 border-gray-700">
              <div className="p-10 space-y-4 md:space-y-6">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                  Create a new account
                </h1>
                <form className="space-y-2 md:space-y-4 " onSubmit={formikSignUP.handleSubmit}>
                  <div className=''>
                        <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-white"
                        >
                        Your Name
                        </label>
                        <input
                         type="text"
                         name="name"
                         id="name"
                         onChange={formikSignUP.handleChange}
                         value={formikSignUP.values.name}
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="abc"
                        />
                  </div>
                  {srenderNameError}
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
                      onChange={formikSignUP.handleChange}
                      value={formikSignUP.values.email}
                      className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder=""
                      
                    />
                  </div>
                  {srenderEmailError}
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
                        onChange={formikSignUP.handleChange}
                        value={formikSignUP.values.password}
                        placeholder="••••••••"
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                        name="cpassword"
                        id="cpassword"
                        onChange={formikSignUP.handleChange}
                        value={formikSignUP.values.cpassword}
                        placeholder="••••••••"
                        className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required=""
                        />
                    </div>
                  </div>
                  {srenderPasswordError}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        checked={formikSignUP.values.agreeTerms}
                        onChange={formikSignUP.handleChange}
                        onBlur={formikSignUP.handleBlur}
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="agreeTerms"
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        I agree with the{" "}
                        <Link href={"/"} className="font-medium text-gray-300">
                          terms and conditions
                        </Link>
                      </label>
                    </div>
                  </div>
                  {srenderAgreeTermsError}
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
