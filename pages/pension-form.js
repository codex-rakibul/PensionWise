import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import Head from "next/head";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addPensionForm } from "@/app/feature/pensionData/pensionFormSlice";

export default function PensionForm() {
  const [localStorage_user_id, setLocalStorage_user_id] = useState();
  const router = useRouter();
  const dispatch = useDispatch();

  // Pension Form Data
  const allPensionForm = useSelector((state) => state.allFormReducer);
  // console.log("allpensionForm----",allPensionForm);

  // Check For Login
  const loginData = useSelector((state) => state.allUserReducer);

  // Get User_id  in LocalStorage
  useEffect(() => {
    const userAuth_LocalStorageData = JSON.parse(localStorage.getItem('user_id'));
    // console.log('PensionForm_userId---------', userAuth_LocalStorageData);
    setLocalStorage_user_id(userAuth_LocalStorageData);
  }, [loginData]);

  // Match userId in PensionForm
  const matchingUser = allPensionForm.allPensionFormData.find((user) => user.userId === localStorage_user_id);
  // console.log("Form-----", matchingUser);

  const formikPensionForm = useFormik({
    // Pension Form Data
    initialValues: {
      fullName: "",
      fathersName: "",
      mothersName: "",
      postalCode: "",
      nidNumber: "",
      retiredAddress: "",
      joinDate: "",
      retiredDate: "",
      basicSalary: "",
      authorPhoneNo: "",
      agreeTerms: false,
    },

    // Checking Validation
    validationSchema: yup.object({
      fullName: yup.string().min(2, "Name must have at least 2 characters").required("Name is required"),
      fathersName: yup.string().required("Father's Name is required"),
      mothersName: yup.string().required("Mother's Name is required"),
      postalCode: yup.string().required("Postal Code is required"),
      nidNumber: yup.string().required("NID Number is required"),
      retiredAddress: yup.string().required("Retired Address is required"),
      joinDate: yup.string().required("Join Date is required"),
      retiredDate: yup.string().required("Retired Date is required"),
      basicSalary: yup.string().required("Basic Salary is required"),
      authorPhoneNo: yup.string().required("Author Phone No is required"),
      agreeTerms: yup.boolean().oneOf([true], "You must agree to the terms and conditions"),
    }),

    // Handle form submission here
    onSubmit: (values) => {
       // console.log("Submitted data:", values);

      // Checking user Authentication
      if(localStorage_user_id?.length > 0){
        // Checking user already apply to this pension form
        if(matchingUser?.apply_status ==="apply" || matchingUser?.apply_status ==="done"){
          message.error(`You ALready Apply`);
        }else{
          const pensionFormData = {
            userId:localStorage_user_id,
            apply_status:"apply", //no, apply, done, reject
            form_status: {
                junior_officer:"waitting", // success, processing, waitting, cancelled
                general_officer:"waitting", 
                head_offficer:"waitting", 
            },
            rejection_msg:"",
            // main Data
            fullName: values.fullName,
            fathersName:values.fathersName,
            mothersName: values.mothersName,
            postalCode: values.postalCode,
            nidNumber: values.nidNumber,
            retiredAddress: values.retiredAddress,
            joinDate: values.joinDate,
            retiredDate: values.retiredDate,
            basicSalary: values.basicSalary,
            authorPhoneNo: values.authorPhoneNo,
          };
          // Store Pension Form Data
          dispatch(addPensionForm(pensionFormData));
          router.push("/");
        }
      }else{
        message.error(`Please First SignIn with your account`);
        // message("Please First SignIn with your account");
        router.push("/signin");
      }
    },
  });

  const renderData = (
    <div>
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
                  <form onSubmit={formikPensionForm.handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="fullName" className="block text-white text-sm font-bold mb-2">
                          Author Full Name*
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          onChange={formikPensionForm.handleChange}
                          onBlur={formikPensionForm.handleBlur}
                          value={formikPensionForm.values.fullName}
                          className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                            formikPensionForm.touched.fullName && formikPensionForm.errors.fullName
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                        {formikPensionForm.touched.fullName && formikPensionForm.errors.fullName ? (
                          <div className="text-indigo-300 text-sm mt-2">{formikPensionForm.errors.fullName}</div>
                        ) : null}
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="fathersName" className="block text-white text-sm font-bold mb-2">
                          Father's Name*
                        </label>
                        <input
                          type="text"
                          name="fathersName"
                          id="fathersName"
                          onChange={formikPensionForm.handleChange}
                          onBlur={formikPensionForm.handleBlur}
                          value={formikPensionForm.values.fathersName}
                          className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                            formikPensionForm.touched.fathersName && formikPensionForm.errors.fathersName
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                        {formikPensionForm.touched.fathersName && formikPensionForm.errors.fathersName ? (
                          <div className="text-indigo-300 text-sm mt-2">{formikPensionForm.errors.fathersName}</div>
                        ) : null}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="mothersName" className="block text-white text-sm font-bold mb-2">
                          Mother's Name*
                        </label>
                        <input
                          type="text"
                          name="mothersName"
                          id="mothersName"
                          onChange={formikPensionForm.handleChange}
                          onBlur={formikPensionForm.handleBlur}
                          value={formikPensionForm.values.mothersName}
                          className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700  py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                            formikPensionForm.touched.mothersName && formikPensionForm.errors.mothersName
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                        {formikPensionForm.touched.mothersName && formikPensionForm.errors.mothersName ? (
                          <div className="text-indigo-300 text-sm mt-2">{formikPensionForm.errors.mothersName}</div>
                        ) : null}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="postalCode" className="block text-white text-sm font-bold mb-2">
                          Postal Code*
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          id="postalCode"
                          onChange={formikPensionForm.handleChange}
                          onBlur={formikPensionForm.handleBlur}
                          value={formikPensionForm.values.postalCode}
                          className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700  py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                            formikPensionForm.touched.postalCode && formikPensionForm.errors.postalCode
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                        {formikPensionForm.touched.postalCode && formikPensionForm.errors.postalCode ? (
                          <div className="text-indigo-300 text-sm mt-2">{formikPensionForm.errors.postalCode}</div>
                        ) : null}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="nidNumber" className="block text-white text-sm font-bold mb-2">
                          NID Number*
                        </label>
                        <input
                          type="text"
                          name="nidNumber"
                          id="nidNumber"
                          onChange={formikPensionForm.handleChange}
                          onBlur={formikPensionForm.handleBlur}
                          value={formikPensionForm.values.nidNumber}
                          className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                            formikPensionForm.touched.nidNumber && formikPensionForm.errors.nidNumber
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                        {formikPensionForm.touched.nidNumber && formikPensionForm.errors.nidNumber ? (
                          <div className="text-indigo-300 text-sm mt-2">{formikPensionForm.errors.nidNumber}</div>
                        ) : null}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="retiredAddress" className="block text-white text-sm font-bold mb-2">
                          Retired Address*
                        </label>
                        <input
                          type="text"
                          name="retiredAddress"
                          id="retiredAddress"
                          onChange={formikPensionForm.handleChange}
                          onBlur={formikPensionForm.handleBlur}
                          value={formikPensionForm.values.retiredAddress}
                          className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                            formikPensionForm.touched.retiredAddress && formikPensionForm.errors.retiredAddress
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                        {formikPensionForm.touched.retiredAddress && formikPensionForm.errors.retiredAddress ? (
                          <div className="text-indigo-300 text-sm mt-2">{formikPensionForm.errors.retiredAddress}</div>
                        ) : null}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="joinDate" className="block text-white text-sm font-bold mb-2">
                          Join Date*
                        </label>
                        <DatePicker
                          selected={formikPensionForm.values.joinDate}
                          onChange={(date) => formikPensionForm.setFieldValue("joinDate", date)}
                          onBlur={formikPensionForm.handleBlur}
                          name="joinDate"
                          id="joinDate"
                          className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                            formikPensionForm.touched.joinDate && formikPensionForm.errors.joinDate ? "border-red-500" : ""
                          }`}
                        />
                        {formikPensionForm.touched.joinDate && formikPensionForm.errors.joinDate ? (
                          <div className="text-indigo-300 text-sm mt-2">{formikPensionForm.errors.joinDate}</div>
                        ) : null}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="retiredDate" className="block text-white text-sm font-bold mb-2">
                          Retired Date*
                        </label>
                        <DatePicker
                          selected={formikPensionForm.values.retiredDate}
                          onChange={(date) => formikPensionForm.setFieldValue("retiredDate", date)}
                          onBlur={formikPensionForm.handleBlur}
                          name="retiredDate"
                          id="retiredDate"
                          className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                            formikPensionForm.touched.retiredDate && formikPensionForm.errors.retiredDate ? "border-red-500" : ""
                          }`}
                        />
                        {formikPensionForm.touched.retiredDate && formikPensionForm.errors.retiredDate ? (
                          <div className="text-indigo-300 text-sm mt-2">{formikPensionForm.errors.retiredDate}</div>
                        ) : null}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="basicSalary" className="block text-white text-sm font-bold mb-2">
                          Basic Salary*
                        </label>
                        <input
                          type="text"
                          name="basicSalary"
                          id="basicSalary"
                          onChange={formikPensionForm.handleChange}
                          onBlur={formikPensionForm.handleBlur}
                          value={formikPensionForm.values.basicSalary}
                          className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                            formikPensionForm.touched.basicSalary && formikPensionForm.errors.basicSalary
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                        {formikPensionForm.touched.basicSalary && formikPensionForm.errors.basicSalary ? (
                          <div className="text-indigo-300 text-sm mt-2">{formikPensionForm.errors.basicSalary}</div>
                        ) : null}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="authorPhoneNo" className="block text-white text-sm font-bold mb-2">
                          Author Phone No.*
                        </label>
                        <input
                          type="text"
                          name="authorPhoneNo"
                          id="authorPhoneNo"
                          onChange={formikPensionForm.handleChange}
                          onBlur={formikPensionForm.handleBlur}
                          value={formikPensionForm.values.authorPhoneNo}
                          className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                            formikPensionForm.touched.authorPhoneNo && formikPensionForm.errors.authorPhoneNo
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                        {formikPensionForm.touched.authorPhoneNo && formikPensionForm.errors.authorPhoneNo ? (
                          <div className="text-indigo-300 text-sm mt-2">{formikPensionForm.errors.authorPhoneNo}</div>
                        ) : null}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="agreeTerms" className="block text-white text-sm font-bold mb-2">
                          <input
                            type="checkbox"
                            id="agreeTerms"
                            name="agreeTerms"
                            onChange={formikPensionForm.handleChange}
                            onBlur={formikPensionForm.handleBlur}
                            checked={formikPensionForm.values.agreeTerms}
                            className="mr-2"
                          />
                          I agree with the terms and conditions
                        </label>
                        {formikPensionForm.touched.agreeTerms && formikPensionForm.errors.agreeTerms ? (
                          <div className="text-indigo-300 text-sm mt-2">{formikPensionForm.errors.agreeTerms}</div>
                        ) : null}
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded transition duration-300"
                      >
                        Apply
                      </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
  );

  return renderData;
}
