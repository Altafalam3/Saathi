import React, { useState} from 'react';
import './loginpage.css'
import { useNavigate } from 'react-router-dom'
import { account } from '../../services/appwriteConfig'


const LoginPage = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password : ''
  });
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
  
    try {
      const loggedUser = await account.createEmailSession(userDetails.email, userDetails.password);
      console.log(loggedUser);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    };
  }


  return (
    <div className="login_page">
      <div className="login_container">
        <form action="" >
          <div className="login_email">
          <label htmlFor="Email">Email</label>
            <input type="email" onChange= {(e) => {
              setUserDetails({
                ...userDetails,
                email: e.target.value,
              })
            }} />
          </div>
          <div className="login_password">
          <label htmlFor="">password</label>
            <input type="password" onChange= {(e) => {
              setUserDetails({
                ...userDetails,
                password: e.target.value,
              })
            }}/>
          </div>
          <div className="login_button">
            <button type='submit' onClick={(e)=> loginUser(e)} type='submit' >Log In</button>
          </div>
          <div className="logout_button">
            <button type='submit'  type='submit' >Log out</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage