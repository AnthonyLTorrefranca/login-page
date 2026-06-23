import { useState} from 'react'
import './Login.css'

export default function Login() {
    const [ShowPswd, setShowPswd] = useState(false)
    const [FormValues, setFormValues] = useState({
        username: "",
        password: "",
    })
    const [Appear, setAppear] = useState(false)
    const userDetails = ([
        {username: "simon", password:"test"},
        {username: "tony", password:"test"},
        {username: "tian", password:"test"},
        {username: "john", password:"test"},
    ])
    const userCheck = userDetails.find((user) =>{
        return user.username === FormValues.username && user.password === FormValues.password;
    })

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
        if (username || password){
            alert("Please enter credentials.") 
        }
        else if(!userCheck){
            setAppear(!false)
        }
        // else if{

        // }
        // else if{

        // }
    }
    function showPassword(){
        setShowPswd(!ShowPswd)
    }
  return (
    <section className="loginInfoContainer">
        <form onSubmit={handleSubmit} className="loginInfo">
            <h1 className="welcomeHeading">Welcome Back!</h1>
            <p>login to continue your shopping journey.</p>
            { Appear && <h2>User not found!</h2>}
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
                    <button onClick={showPassword}>👁️</button>
                </section>
            <button type='submit' className='loginBtn'>Login</button>
        </form> 
    </section>
  )
}
