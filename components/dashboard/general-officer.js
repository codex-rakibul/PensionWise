import React, { useEffect, useState } from 'react'
import {
    DeleteOutlined,
    CheckOutlined,
  } from "@ant-design/icons";
  import { Button, Table, message } from "antd";
  import { useRouter } from "next/router";
  import { useDispatch, useSelector } from "react-redux";
import { updateGenarelOfficerStatus } from '@/app/feature/pensionData/pensionFormSlice';

function GeneralOfficer() {
    const [localStorage_user_id, setLocalStorage_user_id] = useState();
    const router = useRouter();
    const dispatch = useDispatch();
    // Check For User Route
    const allUser = useSelector((state) => state.allUserReducer);

    // Pension Form Data
    const allPensionForm = useSelector((state) => state.allFormReducer);
    // console.log("allpensionForm----",allPensionForm);

    // All General Officer Data
    const allGeneralOfficer = useSelector((state) => state.allGeneralOfficerDataReducer);

    // Get userId form Localhost
    useEffect(() => {
        const userAuth_LocalStorageData = JSON.parse(localStorage.getItem('user_id'));
        console.log('Navbar---------', userAuth_LocalStorageData);
        setLocalStorage_user_id(userAuth_LocalStorageData);
    }, [allUser]);


    // Match User Id
    const matchingData = allGeneralOfficer.allGeneralOfficer.find((user) => user.userId === localStorage_user_id)
    // console.log("-----------", matchingData);

    // Accepts Action
    const handleAcceptForm = (userId) => {
        // Dispatch the action to update the form_status
        dispatch(updateGenarelOfficerStatus({ userId, status: "success" }));
        message.success('Form has been accepted successfully');
      };
      
    // Delete Action
    const handleDeleteForm = () =>{

    }

    const dataSource = allPensionForm.allPensionFormData
    .filter((formData) => formData?.apply_status === "apply" && formData?.form_status.junior_officer === "success" && formData?.form_status.general_officer === "waitting") // Filter by apply_status
    .map((formData, index) => {
    return {
      id: index,
      nid_number: formData?.nid_number, // Add other fields as needed
      fullName: formData?.fullName,
      status: formData?.form_status.junior_officer,
      userId:formData?.userId,
      // ...
    };
  });

  const columns = [
    { title: "NID", dataIndex: "nid_number" },
    { title: "Name", dataIndex: "fullName" },
    { title: "Status", dataIndex: "status" },
    {
      title: "Actions",
      render: (record) => {
        return (
          <div className="grid grid-cols-2">
            <CheckOutlined onClick={() => handleAcceptForm(record.userId)} />
            <DeleteOutlined
              style={{ color: "red" }}
              onClick={() => handleDeleteForm(record.movieData)}
            />
          </div>
        );
      },
    },
  ];

    return (
        <>
            {/*Container*/}
            <div className="container w-full mx-auto py-32">
                <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                <div>
                    <h1 className='py-12 text-gray-700 text-2xl'>Your Total Complains :{` ${matchingData?.complains}`}</h1>
                </div>
                <h2 className='text-xl'>Pension Holder Form Data:</h2>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    rowKey={(record) => record.id}
                    className="hoverable-table"
                ></Table>
                </div>
            </div>
            {/*/container*/}
        </>
    )
}

export default GeneralOfficer
