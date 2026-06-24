import { useState, useEffect } from 'react'
import './Login.css'

export default function Login() {
    //! mock data base
    const userDetails = ([
        {username: "tony", password: "test"},
        {username: "simon", password: "test"},
        {username: "david", password: "test"},
        {username: "tian", password: "test"},
    ])
    const [FormStatus, setFormStatus] = useState({
        userFound: false,
        userNotFound: false,
        showPswd: false,
    })
    const [FormValues, setFormValues] = useState({
        username: "",
        password: "",
    })
    const userCheck = userDetails.find(user =>{
        return user.username === FormValues.username && user.password === FormValues.password;
    })

    useEffect(()=>{
        let timer;
        if (FormStatus.userNotFound){
            timer = setTimeout(() => {
                setFormStatus(prev =>({
                    ...prev,
                    userFound: false,
                    userNotFound: false,
                }))
            }, 2000);
        }
        
        else if (FormStatus.userFound){
            timer = setTimeout(() => {
                setFormStatus(prev =>({
                    ...prev,
                    userFound: false,
                    userNotFound: false,
                }))
            }, 2000);
    return () => clearTimeout(timer)
}}, [FormStatus.userNotFound, FormStatus.userFound])
    
    function handleShow(){
        setFormStatus(prev =>({
            ...prev,
            showPswd: !prev.showPswd,
        }))
    }
    function handleChange(e){
        const {name, value} = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    function handleSubmit(e){
        e.preventDefault()
        if (!userCheck){
            setFormStatus(prev => ({
                ...prev,
                userFound: false,
                userNotFound: true,
            }))
        }
        else if (userCheck){
            setFormStatus( (prev) => ({
                ...prev,
                userFound: true,
                userNotFound: false,
            }))
        }
    }
  return (
    <>
    <section className='loginInfoContainer'>
        <h1 className="welccomHeading">Welcome Back!</h1>
        <p>Login to continue your shopping journey.</p>
    <form onSubmit={handleSubmit} className='loginInfo'>
    {FormStatus.userNotFound && <h2 className='errorKey'>User not found!</h2>}
    {FormStatus.userFound && <h2 className='correctKey'>Welcome Back, {FormValues.username}!</h2>}
        <p>Enter Username</p>
        <section>
            <input type="text"
                name='username'
                value={FormValues.username}
                onChange={handleChange}
                placeholder='Enter username' />
        </section>
        <p>Enter Password</p>
        <section className='passwordContainer'>
            <input type={FormStatus.showPswd ? "text" : "password"}
                name='password'
                value={FormValues.password}
                onChange={handleChange}
                placeholder='Enter password' />
            <button type='button' onClick={handleShow}>👁️</button>
        </section>
            <button className='loginBtn'>Login</button>
        <p>or</p>
        <section className="social">
            <button className='continueWithSocials'>Continue with Google</button>
            <button className='continueWithSocials'>Continue with Facebook</button>
        </section>
    </form>
    </section>
    </>
  )
}
