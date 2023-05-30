import React,{useState} from 'react'
import './signuppage.css'
import { account }  from '../../services/appwriteConfig'

import {  useNavigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom';


const SignupPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const signupUser = async (e) => {
    e.preventDefault();
    
    try {
     
      const newUser = await account.create(
        userDetails.name,
        userDetails.email,
        userDetails.password
      );
      
      account.createEmailSession(userDetails.email, userDetails.password);
      console.log(newUser);
      navigate("/profile");
       
    } catch (error) {
      console.log(userDetails)
      console.log(error);
    }
  };
  return (
    <div className="signup_page">
      <div className="signup_container">
        <form action="" >
          <div className="signup_name">
          <label htmlFor="name">Name</label>
            <input type="text" onChange={(e) => {
              setUserDetails({
                ...userDetails,
                name : e.target.value
              })}} />
          </div>
          <div className="signup_email">
          <label htmlFor="Email">Email</label>
            <input type="email" onChange={(e) => {
              setUserDetails({
                ...userDetails,
                email : e.target.value
              })}} />
          </div>
          <div className="signup_password">
          <label htmlFor="">password</label>
            <input type="password" onChange={(e) => {
              setUserDetails({
                ...userDetails,
                password : e.target.value
              })}} />
          </div>
          <div className="signup_button">
            <button onClick={(e)=> signupUser(e)} type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupPage