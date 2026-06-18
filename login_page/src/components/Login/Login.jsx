import { useState } from "react";
import './Login.css'

const Login = () => {
    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
    })
    const [showPswd, setShowPswd] = useState(false)
    function handleSubmit(e){
        e.preventDefault()
        console.log(JSON.stringify(formValues))
        setFormValues({
        username: "",
        password: "",
    })
    }
return (
    <section className="loginInfo">
        <h1>Welcome Back!</h1>
        <p>Login to continue your shopping journey</p>
        <form onSubmit={handleSubmit}>
            <p>Enter username</p>
                <section className="usernameContainer">
                    <input 
                        type="text" 
                        value={formValues.username}
                        placeholder="Enter username"
                        name="username" 
                        onChange={(e) => setFormValues(prev =>({
                            ...prev, username: e.target.value}))} />
                </section>
            <p>Enter password</p>
                <section className="passwordContainer">
                    <input 
                        value={formValues.password}
                        type={showPswd ? "text" : "password"} 
                        placeholder="Enter password"
                        name="password" 
                        onChange={(e) => setFormValues(prev =>({
                            ...prev, password: e.target.value}))} />
                    <button type="button" onClick={()=> setShowPswd(!showPswd)}>👁</button>
                </section>
                    <button className="loginBtn">Login</button>
        </form>
            <p>or</p>
        <section className="social">
            <button className="continueWithSocials">Continue with Google</button>
            <button className="continueWithSocials">Continue with Facebook</button>
        </section>
            <p>Don't have an account? <a href="#">Sign up.</a></p>
    </section>
)
}

export default Login
