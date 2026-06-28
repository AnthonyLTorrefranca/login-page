import { useState, useEffect } from 'react'
import './Login.css'

export default function Login() {
    const userDetails = [
        { username: "tony", password: "test"},
        { username: "simon", password: "test"},
        { username: "tian", password: "test"},
        { username: "john", password: "test"},
    ]
    const [FormValues, setFormValues] = useState({
        username: "",
        password: "",
    })
    const [UserStatus, setUserStatus] = useState({
        userFound: false,
        userNotFound: false,
        idle: true
    })
    const isFormEmpty = !FormValues.username.trim() || !FormValues.password.trim();
    const [showPswd,setShowPswd] = useState(false)
    
    useEffect(() => {
        let timer;
        if (isFormEmpty){
                timer = setTimeout(() => {
                setUserStatus(prev => ({
                    ...prev,
                    idle: true,
                    userFound: false,
                    userNotFound: false
                }))
            }, 2000);
        }
        else if (UserStatus.userFound){
                timer = setTimeout(() => {
                setUserStatus((prev)=>({
                    ...prev,
                    idle: true,
                    userFound: false,
                }))
            }, 2000);
        }
        else if (UserStatus.userNotFound){
                timer = setTimeout(() => {
                setUserStatus((prev)=>({
                    ...prev,
                    idle: true,
                    userNotFound: false,
                }))
            }, 2000);
        } return ()=> clearTimeout(timer)
    }, [isFormEmpty, UserStatus.userFound, UserStatus.userNotFound])

    function handleShow(){
        setShowPswd(!showPswd)
    }
    function handleChange(e){
        const {name,value} = e.target
        setFormValues(prev =>({
            ...prev,
            [name]: value
        }))
    }
    function handleSubmit(e){
        e.preventDefault()
        const formvaluesUsername = FormValues.username
        const formvaluesPassword = FormValues.password
        
        const userCheck = userDetails.find(user => {
            return user.username === formvaluesUsername && user.password === formvaluesPassword
        })
        
        if (userCheck){
            console.log("userCheck")
            setUserStatus(prev => ({
                ...prev,
                userFound: true,
                userNotFound: false,
                idle: false
            }))
        }
        else if (!userCheck){
            console.log("!userCheck")
            setUserStatus(prev => ({
                ...prev,
                userFound: false,
                userNotFound: true,
                idle: false
            }))
        }
        else if (isFormEmpty){
            setUserStatus(prev => ({
                ...prev,
                idle: true
            }))
        }
    }
    return (
        <section className='loginInfoContainer'>
        <section className='loginInfo'>
            {/* <h1 className="welcomeHeader">Welcome back!</h1> */}
            {UserStatus.userFound && <h2 className='correctKey'>Welcome Back, {FormValues.username}!</h2>}
            {UserStatus.userNotFound && <h2 className='incorrectKey'>Error! No user found.</h2>}
            {UserStatus.idle && <h2>Login to continue your shopping journey!</h2>}
            <p>login to continue your shopping journey.</p>
            <form onSubmit={handleSubmit}>
                <p>Enter Username</p>
                <section>
                    <input type="text"
                        name="username"
                        value={FormValues.username}
                        onChange={handleChange}
                        placeholder='Enter Username'
                     />
                </section>
                <p>Enter Password</p>
                <section className='passwordContainer'>
                    <input type={showPswd ? "text" : "password"}
                        name="password"
                        value={FormValues.password}
                        onChange={handleChange}
                        placeholder='Enter Password'
                     />
                    <button type='button' onClick={handleShow}>👁️</button>
                </section>
                    <button className='loginBtn' type='submit'>Login</button>
            </form>
                <section className="socials">
                    <button className="continueWithSocials">Continue with Google.</button>
                    <button className="continueWithSocials">Continue with Facebook.</button>
                </section>
        </section>
    </section>
)}