import { useState } from "react"
import './Login.css'

export default function Login() {
    const [ShowPswd, setShowPswd] = useState(false) 
    const [FormValues, setFormValues] = useState({
        username: "",
        password: "",
    })
    const userDetails = [
        { username: "simon", password: "test" },
        { username: "tony", password: "test" },
        { username: "tian", password: "test" },
        { username: "john", password: "test" },
    ]
    const userFound = userDetails.find((user) => {
        return user.username === FormValues.username && user.password === FormValues.password;
    })

    function handleChange(e){
        const {name, value} = e.target;
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
            alert("Please provide details!")
            return
        }
        else if (!userFound){
            alert("User not found!")
            return
        }
        alert(`Welcome back, ${FormValues.username}`)
    }
    function showPass(){
        setShowPswd(!ShowPswd)
    }
return (
<>
    <section className="loginInfoContainer">
        <h1 className="welcomHeading">Welcome Back!</h1>
        <p>login to continue with your shopping journey.</p>
        <form onSubmit={handleSubmit} className="loginInfo">
            <p>Enter username</p>
                <section>
                    <input type="text"
                        placeholder="Enter username" 
                        name="username"
                        value={FormValues.username}
                        onChange={handleChange} />
                </section>
            <p>Enter username</p>
                <section className="passwordContainer">
                    <input type={ShowPswd ? "text" : "password"}
                        placeholder="Enter password" 
                        name="password"
                        value={FormValues.password}
                        onChange={handleChange} />
                    <button type="button" onClick={showPass}>👁️</button>
                </section>
                    <button className="loginBtn" type="submit">Login</button>

            <seciton className="social">
                <button className="continueWithSocials">Continue with Google</button>
                <button className="continueWithSocials">Continue with Facebook</button>
            </seciton>
        </form>
    </section>
</>
  )
}
