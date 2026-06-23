import { useState, useEffect } from 'react'
import './Login.css'

export default function Login() {
    const [ShowPswd, setShowPswd] = useState(false)
    const [FormValues, setFormValues] = useState({
        username: "",
        password: "",
    })
    const [Appear, setAppear] = useState({
        ifUserFound: false,
        emptyUsername: false,
        emptyPassword: false,
    })
    const userDetails = ([
        {username: "simon", password:"test"},
        {username: "tony", password:"test"},
        {username: "tian", password:"test"},
        {username: "john", password:"test"},
    ])
    const userCheck = userDetails.find((user) =>{
        return user.username === FormValues.username && user.password === FormValues.password;
    })
    useEffect(()=> {
        if (Appear){
            const timer = setTimeout( () =>
                setAppear({
                    ifUserFound: false,
                    emptyUsername: false,
                    emptyPassword: false,
                }), 2000)
                return () => clearTimeout(timer);

    }}, [Appear]);

    function handleChange(e){
        const { name, value } = e.target
        setFormValues(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    function handleSubmit(e){
        e.preventDefault()
        const username = FormValues.username === "";
        const password = FormValues.password === "";
        
        if (username){
            setAppear(
                (prev) => ({ ...prev, 
                    emptyUsername: true}
                ))
                return
            }
        else if (password){
            setAppear(
                (prev) => ({ ...prev, 
                emptyPassword: true}
            ))
            return
        }
        else if(!userCheck){
            setAppear(
                (prev) => ({ ...prev,
                    ifUserFound: true
                })
            )
            return
        }

        setFormValues({
            username: "",
            password: "",
        })
    }
    function showPassword(){
        setShowPswd(!ShowPswd)
    }
  return (
    <section className="loginInfoContainer">
        <form onSubmit={handleSubmit} className="loginInfo">
            <h1 className="welcomeHeading">Welcome Back!</h1>
            <p>login to continue your shopping journey.</p>
            { Appear.ifUserFound && <h2>User not found!</h2>}
            { Appear.emptyUsername && <h2>Please provide Username!</h2>}
            { Appear.emptyPassword && <h2>Please provide Password!</h2>}
            <p>Enter Username</p>
                <section>
                    <input type="text"
                        name='username'
                        value={FormValues.username}
                        onChange={handleChange}
                        placeholder="Enter Username" />
                </section>
            <p>Enter Password</p>
                <section className="passwordContainer">
                    <input type={ShowPswd? "text" : "password"}
                        name='password'
                        value={FormValues.password}
                        onChange={handleChange}
                        placeholder="Enter Password" />
                    <button onClick={showPassword} type='button'>👁️</button>
                </section>
            <button type='submit' className='loginBtn'>Login</button>
        </form> 
    </section>
  )
}
