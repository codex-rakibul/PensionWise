import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Steps, message, theme } from 'antd';
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';

function PensionHolder() {
    const [localStorage_user_id, setLocalStorage_user_id] = useState();
    const router = useRouter();
    const dispatch = useDispatch();

    // Check For User Route
    const allUser = useSelector((state) => state.allUserReducer);

    // Pension Form Data
    const allPensionForm = useSelector((state) => state.allFormReducer);
    // console.log("allpensionForm----",allPensionForm);

    // Get userId form Localhost
    useEffect(() => {
        const userAuth_LocalStorageData = JSON.parse(localStorage.getItem('user_id'));
        console.log('Navbar---------', userAuth_LocalStorageData);
        setLocalStorage_user_id(userAuth_LocalStorageData);
    }, [allUser]);

    // Match userId in PensionForm
    const matchingUser = allPensionForm.allPensionFormData.find((user) => user.userId === localStorage_user_id);
    console.log("Form-----", matchingUser);

    //All Procces step
    const description1 = 'Junior Officer verifed your application.';
    const description2 = 'General Officer Checking your application.';
    const description3 = 'Waiting. . .';

    // Pension process System
    const pensionProcess =(
        <div className='py-32 px-12'>
            <div className='pb-12 text-2xl font-semibold text-gray-500'>
                Tracking on your application
            </div>
            <Steps
                current={1}
                items={[
                {
                    title: 'Finished',
                    description:description1,
                },
                {
                    title: 'In Progress',
                    description:description2,
                    subTitle: 'Left 00:00:08',
                },
                {
                    title: 'Waiting',
                    description:description3,
                },
            ]}
            />
        </div>
    )

    // Pension Application form
    const applySection = (
         <div>
            {/* Pension Service Item Start */}
            <div className="p-4 md:w-1/3 py-32">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="1em" viewBox="0 0 384 512"><path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z"/></svg>
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">
                            Apply for pension
                        </h2>
                    </div>
                    <div className="flex-grow">
                        <p className="leading-relaxed text-base">
                            Applying for pension is the foundation of your financial security in retirement. Your future self will thank you for applying for pension today.
                        </p>
                        <Link href={"/pension-form"} className="mt-3 text-indigo-500 inline-flex items-center">
                            Apply Now
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Pension Service Item End */}
        </div>
    )

    // Others Data
    const renderData = (
        <div className="container w-full mx-auto py-32">
                <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                {/*Console Content*/}
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                    {/*Metric Card*/}
                    <div className="bg-white border rounded shadow p-2">
                        <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded p-3 bg-green-600">
                            <i className="fa fa-wallet fa-2x fa-fw fa-inverse" />
                            </div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                            <h5 className="font-bold uppercase text-gray-500">
                             Download Your Application Form
                            </h5>
                        </div>
                        </div>
                    </div>
                    {/*/Metric Card*/}
                    </div>
                </div>
                {/*/ Console Content*/}
                </div>
        </div>
    )

    // Downlod Form
    const downloadForm =(
        <div>

        </div>
    )

    return <>
        {/* When user not apply pension form then show "applySection" section */}
        {(matchingUser?.apply_status ==="no" || matchingUser === undefined) ? applySection : ""}
        {/* When user apply pension form then show "pensionProcess" System */}
        {matchingUser?.apply_status ==="apply" ? pensionProcess : ""}
        {/* When process system done then show "pensionProcess" System */}
        {matchingUser?.apply_status ==="done" ? renderData : ""}
    </>;
}

export default PensionHolder
