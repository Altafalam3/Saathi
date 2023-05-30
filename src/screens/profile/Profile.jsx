import React, {useEffect,useState} from 'react'

import { account }  from '../../services/appwriteConfig'

import {  useNavigate, Link } from 'react-router-dom'

const Profile = () => {
       const [userDetails, setUserDetails] = useState();
       const navigate = useNavigate();
       useEffect( () => {
              const getData = account.get();
              getData.then(
                     function (response) {
                            setUserDetails(response)
                     },
                     function (error) {
                            console.log(error);
                     }
              )
       }, [userDetails]);
       console.log(userDetails);
       // const handleLogout = async () => {
       //        try {
       //               await account.deleteSession("currentUser");
       //               navigate('/')
       //        } catch (error) {
       //               console.log(error);
       //        }
        
       // }
  return (
         <>
               
                {userDetails ? (
                        <>
                <h3>UID : { userDetails.email}</h3>
                              </>
                ) : (
                       <div>Please login</div>
                )}
                
         </>
         
  )
}

export default Profile