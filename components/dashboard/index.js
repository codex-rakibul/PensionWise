import React, { useState, useEffect } from 'react';
import PensionHolder from './pension-holder';
import JuniorOfficer from './junior-officer';
import GeneralOfficer from './general-officer';
import HeadOfficer from './head-officer';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function DashboardCom() {
  const [localStorage_user_id, setLocalStorage_user_id] = useState();
  const router = useRouter();
  const dispatch = useDispatch();

  // Check For User Route
  const allUser = useSelector((state) => state.allUserReducer);

   // Get userId form Localhost
  useEffect(() => {
    const userAuth_LocalStorageData = JSON.parse(localStorage.getItem('user_id'));
    console.log('Navbar---------', userAuth_LocalStorageData);
    setLocalStorage_user_id(userAuth_LocalStorageData);
  }, [allUser]);

  // Find the user with the matching userId
  const matchingUser = allUser.allUserData.find((user) => user.userId === localStorage_user_id);

  // Conditional rendering based on the user's role
  let componentToRender = null;

  // Checking user role
  if (matchingUser) {
    switch (matchingUser.role) {
      case 'user':
        componentToRender = <PensionHolder />;
        break;
      case 'junior-officer':
        componentToRender = <JuniorOfficer />;
        break;
      case 'general-officer':
        componentToRender = <GeneralOfficer />;
        break;
      case 'head-officer':
        componentToRender = <HeadOfficer />;
        break;
      default:
        componentToRender = null;
        break;
    }
  }
  return <div className='ss:overflow-y-hidden overflow-y-auto '>{componentToRender}</div>;
}
export default DashboardCom;
