import { useEffect, useState } from "react"
import './Login.css'

export default function Login() {
    const userDetails = ([
        { username: "tian", password: "test"},
        { username: "john", password: "test"},
        { username: "simon", password: "test"},
        { username: "tony", password: "test"},
    ])
    const [FormValues, setFormValues] = useState({
        username: "",
        password: ""    
    })
    const [UserStatus, setUserStatus] = useState({
        userFound: false,
        userNotFound: false,
    })
    const [show, setShow] = useState(false)
    
    useEffect(() =>{
        let timer;
        if (UserStatus.userFound){
            timer = setTimeout(() => {
                setUserStatus(prev => ({
                    ...prev,
                    userFound: false
                }))
            }, 2000);
        } 
        else if (UserStatus.userNotFound){
            timer = setTimeout(() => {
                setUserStatus(prev => ({
                    ...prev,
                    userNotFound: false
                }))
            }, 2000);
        }
        return ()=> clearTimeout(timer)
    }, [UserStatus.userFound, UserStatus.userNotFound])

    function handleShow(){
        setShow(!show)
    }
    function handleChange(e){
        const {name, value} = e.target
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }))
    }
    function handleSubmit(e){
        e.preventDefault()
        const userCheck = userDetails.find((user) =>{
            return user.username === FormValues.username && user.password === FormValues.password;
        })
        if (userCheck){
            setUserStatus(prev => ({
                ...prev,
                userFound: true,
                userNotFound:false
            }))
        }
        else if (!userCheck){
            setUserStatus(prev =>({
                ...prev,
                userFound: false,
                userNotFound: true
            }))
        }
    }
    
  return (
    <section className="loginInfoContainer">
      <section className="loginInfo">
        <h1 className="welcomeHeading">Welcome Back!</h1>
        <p>login to continue your shopping journey.</p>
        {UserStatus.userFound && <h2 className="correctKey">Welcome back, {FormValues.username}</h2>}
        {UserStatus.userNotFound && <h2 className="incorrectKey">Enter correct credentials!</h2>}
        <form onSubmit={handleSubmit}>
            <p>Enter Username</p>
            <section>
                <input type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={FormValues.username}
                    onChange={handleChange}
                     />
            </section>
            <p>Enter Password</p>
            <section className="passwordContainer">
                <input type={show ? "text" : "password"}
                    name="password"
                    placeholder="Enter Password"
                    value={FormValues.password}
                    onChange={handleChange}
                     />
                <button type="button" onClick={handleShow}>👁️</button>
            </section>
            <button type="submit" className="loginBtn">Login</button>
        </form>
      </section>
      <section className="social">
        <button className="continueWithSocials">Continue with Google</button>
        <button className="continueWithSocials">Continue with Facebook</button>
      </section>
    </section>
  )
}
