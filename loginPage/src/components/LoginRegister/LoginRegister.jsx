import React, { useState } from 'react'
import './LoginRegister.css'
import { FaUser, FaLock, FaEnvelope} from "react-icons/fa";
import {useFormik} from "formik";
import { signUpSchema } from '../../schema';



const initialValues = {
    // Name: "",
    // Password: "",
    name: "",
    email: "",
    password: "",
};

const LoginRegister = () => {
   
    const [formaction, setFormAction] = useState('');

    const registerLink = () => {
        setFormAction('active')
    };

    const loginLink = () => {
        setFormAction(' ')
    };
    
    const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }
    });


  return (
    <div className={`wrapper ${formaction}`}>
       <div className='form-box login'>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" autoComplete='off' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder='Username'/>
                <FaUser className='icon'/>
                { errors.name && touched.name ? (<p className='form-error'>{errors.name}</p>) : null }
            </div>
            <div className="input-box">
                <input type="password" autoComplete='off' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Password'/>
                <FaLock className='icon'/>
                { errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>) : null }
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </div>

            <button type='submit'>Login</button>

            <div className="register-link">
                <p>Don't have an account?<a href="#" onClick={registerLink}> Register</a></p>
            </div>
          </form>
       </div>

       <div className='form-box register'>
          <form onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
            <input type="text" autoComplete='off' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder='Username'/>
                <FaUser className='icon'/>
                { errors.name && touched.name ? (<p className='form-error'>{errors.name}</p>) : null }
            </div>
            <div className="input-box">
                <input type="email" autoComplete='off' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Email'/>
                <FaEnvelope className='icon'/>
                { errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null }
            </div>
            <div className="input-box">
            <input type="password" autoComplete='off'name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Password'/>
                <FaLock className='icon'/>
                { errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>) : null }
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />I agree to the terms & conditions</label>
            </div>

            <button type='submit'>Register</button>

            <div className="register-link">
                <p>Already have an account?<a href="#" onClick={loginLink}> Login</a></p>
            </div>

          </form>
       </div>
    </div>
  )
}

export default LoginRegister
