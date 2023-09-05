import React, { useEffect, useState } from 'react'
import {
    DeleteOutlined,
    CheckOutlined,
    EyeOutlined,
    SettingOutlined,
    NotificationOutlined
  } from "@ant-design/icons";
  import { Steps,Table, message } from "antd";
  import { useRouter } from "next/router";
  import { useDispatch, useSelector } from "react-redux";
import {updateHeadOfficerStatus } from '@/app/feature/pensionData/pensionFormSlice';
import { updateJuniorOfficerComplains } from '@/app/feature/juniorOfficer/juniorOfficerSlice';
import { updateGeneralOfficerComplains } from '@/app/feature/generalOfficer/generalOfficerSlice';

function HeadOfficer() {
    const [toggle, setToggle] = useState(false);
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

    // All Junior Officer Data
    const allJuniorOfficer = useSelector((state) => state.alljuniorOfficerDataReducer);

    // Get userId form Localhost
    useEffect(() => {
        const userAuth_LocalStorageData = JSON.parse(localStorage.getItem('user_id'));
        console.log('Navbar---------', userAuth_LocalStorageData);
        setLocalStorage_user_id(userAuth_LocalStorageData);
    }, [allUser]);


    // Match User Id
    const matchingData = allGeneralOfficer.allGeneralOfficerData.find((user) => user.userId === localStorage_user_id)
    // console.log("-----------", matchingData);

    // Accepts Action
    const handleAcceptForm = (userId) => {
        // Dispatch the action to update the form_status
        dispatch(updateHeadOfficerStatus({ userId, status: "success" }));
        message.success('Form has been accepted successfully');
      };
      
    // Delete Action
    const handleDeleteForm = (userId) =>{

    }

    // Complains on Junior Officer
    const handleJuniorOfficerComplains = (userId) => {
        dispatch(updateJuniorOfficerComplains(userId));
        message.success('Complaint has been recorded successfully');
    }
    // Complains on General Officer
    const handleGeneralOfficerComplains = (userId) => {
        dispatch(updateGeneralOfficerComplains(userId));
        message.success('Complaint has been recorded successfully');
    }
    // Setting Junior Officer
    const handleSettingJuniorOfficer = () =>{
        
    }
    // Setting Grneral Officer
    const handleSettingGeneralOfficer = () =>{
        
    }
 
    // View Pension Holder Form Proccess 
    const handleViewData = () =>{
        setToggle(!toggle);
    }

    // Pension Holder Data
    const dataSource = allPensionForm.allPensionFormData
    .filter((formData) => formData?.apply_status === "apply" && formData?.form_status.junior_officer === "success" && formData?.form_status.general_officer === "success" && formData?.form_status.head_offficer === "waitting") // Filter by apply_status
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
          <div className="grid grid-cols-3">
            <CheckOutlined onClick={() => handleAcceptForm(record.userId)} />
            <DeleteOutlined
              style={{ color: "red" }}
              onClick={() => handleDeleteForm(record.movieData)}
            />
            <EyeOutlined style={{ color: "teal" }}
              onClick={() => handleViewData(record.userId)}/>
          </div>
        );
      },
    },
    ];

    // Junior Officer Data
    const dataSource2 = allUser.allUserData
    .filter((formData) => formData?.role === "junior-officer") 
    .map((formData, index) => {
    return {
      id: index,
      name: formData?.name, // Add other fields as needed
      email: formData?.email,
      userId:formData?.userId,
      // ...
    };
    });
    
     const columns2 = [
    { title: "Name", dataIndex: "name" },
    { title: "email", dataIndex: "email" },
    {
      title: "Actions",
      render: (record) => {
        return (
          <div className="grid grid-cols-3 gap-2">
            <NotificationOutlined onClick={() => handleJuniorOfficerComplains(record.userId)} />
            <DeleteOutlined
              style={{ color: "red" }}
              onClick={() => handleDeleteForm(record.userId)}
            />
            <SettingOutlined onClick={() => handleSettingJuniorOfficer(record.userId)} />
          </div>
        );
      },
    },
    ];

    // General Officer Data
    const dataSource3 = allUser.allUserData
    .filter((formData) => formData?.role === "general-officer") 
    .map((formData, index) => {
    return {
      id: index,
      name: formData?.name, // Add other fields as needed
      email: formData?.email,
      userId:formData?.userId,
      // ...
    };
    });

    
     const columns3 = [
    { title: "Name", dataIndex: "name" },
    { title: "email", dataIndex: "email" },
    {
      title: "Actions",
      render: (record) => {
        return (
          <div className="grid grid-cols-3 gap-2">
            <NotificationOutlined onClick={() => handleGeneralOfficerComplains(record.userId)} />
            <DeleteOutlined
              style={{ color: "red" }}
              onClick={() => handleDeleteForm(record.userId)}
            />
            <SettingOutlined onClick={() => handleSettingGeneralOfficer(record.userId)} />
          </div>
        );
      },
    },
    ];

    //All Procces step
    const description1 = 'Junior Officer verifed your application.';
    const description2 = 'General Officer Checking your application.';
    const description3 = 'Waiting. . .';

    // Pension process System
    const pensionProcess =(
        <div className='py-32 px-12'>
            <div className='pb-12 text-2xl font-semibold text-gray-500'>
                Tracking on Pension Holder application
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

    return (
        <>
            {/*Container*/}
            <div className="container w-full mx-auto py-32">
                <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                    <h2 className='text-xl'>Pension Holder Form Data:</h2>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                        rowKey={(record) => record.id}
                        className="hoverable-table"
                    ></Table>
                    {toggle && pensionProcess}

                    <h2 className='pt-20 text-xl'>Junior Officer Form Data:</h2>
                    <Table
                        dataSource={dataSource2}
                        columns={columns2}
                        pagination={false}
                        rowKey={(record) => record.id}
                        className="hoverable-table"
                    ></Table>

                    <h2 className='pt-20 text-xl'>General Officer Form Data:</h2>
                    <Table
                        dataSource={dataSource3}
                        columns={columns3}
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

export default HeadOfficer