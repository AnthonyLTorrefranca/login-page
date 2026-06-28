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
        inputFEmpty: false,
        idle: true
    })
    const IsFormEmpty = !FormValues.username.trim() && !FormValues.password.trim();
    const [ShowPswd,setShowPswd] = useState(false)
    
    useEffect(() => {
        let timer;
        if (IsFormEmpty){
                timer = setTimeout(() => {
                setUserStatus(prev => ({
                    ...prev,
                    userFound: false,
                    userNotFound: false,
                    inputFEmpty: false,
                    idle: true,
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
    }, [IsFormEmpty, UserStatus.userFound, UserStatus.userNotFound])

    function HandleShow(){
        setShowPswd(!ShowPswd)
    }
    function HandleChange(e){
        const {name,value} = e.target
        setFormValues(prev =>({
            ...prev,
            [name]: value
        }))
    }
    function HandleSubmit(e){
        e.preventDefault()
        const formvaluesUsername = FormValues.username
        const formvaluesPassword = FormValues.password
        
        if (IsFormEmpty){
            console.log("formEmpty")
            setUserStatus(prev => ({
                ...prev,
                userFound: false,
                userNotFound: false,
                inputFEmpty: true,
                idle: false
            }))
            return
        }
        
        const userCheck = userDetails.find(user => {
            return user.username === formvaluesUsername && user.password === formvaluesPassword
        })
        
        if (userCheck){
            console.log("userCheck")
            setUserStatus(prev => ({
                ...prev,
                userFound: true,
                userNotFound: false,
                inputFEmpty: false,
                idle: false
            }))
            return
        }
        else if (!userCheck){
            console.log("!userCheck")
            setUserStatus(prev => ({
                ...prev,
                userFound: false,
                userNotFound: true,
                inputFEmpty: false,
                idle: false
            }))
            return
        }
    }
    return (
        <section className='loginInfoContainer'>
        <section className='loginInfo'>
            {UserStatus.userFound && <h2 className='correctKey'>Welcome Back, {FormValues.username}!</h2>}
            {UserStatus.userNotFound && <h2 className='incorrectKey'>Error! No user found.</h2>}
            {UserStatus.inputFEmpty && <h2>Please enter your credentials first.</h2>}
            {UserStatus.idle && <h2>Login to continue your shopping journey!</h2>}
            <form onSubmit={HandleSubmit}>
                <label className='InputLabel' htmlFor='username'>Enter Username</label>
                <section>
                    <input type="text"
                        id='username'
                        name="username"
                        value={FormValues.username}
                        onChange={HandleChange}
                        placeholder='Enter Username'
                     />
                </section>
                <label className='InputLabel' htmlFor='password'>Enter Password</label>
                <section className='passwordContainer'>
                    <input type={ShowPswd ? "text" : "password"}
                        id='password'
                        name="password"
                        value={FormValues.password}
                        onChange={HandleChange}
                        placeholder='Enter Password'
                     />
                    <button type='button' onClick={HandleShow}>👁️</button>
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