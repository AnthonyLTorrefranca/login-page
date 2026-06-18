import { useState } from "react";
import './Login.css'

export default function Login() {
    const [seePswd, setSeePswd] = useState(false)
    const [formValue, setFormValue] = useState({
        username: "",
        password: "",
    })
    function handleSubmit(e){
        e.preventDefault()
        console.log(formValue)
    }
return (
    <section className="loginInfo">
        <h1>Welcome Back!</h1>
            <p>Login to continue your shopping journey</p>
        <form onSubmit={handleSubmit}>
            <p>Enter username</p>
            <section className="usernameContainer">
                <input placeholder="Enter username"
                    name="username" 
                    type="text" 
                    onChange={(e) => setFormValue(({ ...formValue, username: e.target.value }))}/>
            </section>
                <p>Enter password</p>
            <section className="passwordContainer">
                <input placeholder="Enter password"
                    name="password" 
                    type={seePswd ? "text" : "password"} 
                    onChange={(e) => setFormValue(({ ...formValue, password: e.target.value }))}/>
            <button 
                type="button"
                onClick={()=> setSeePswd(!seePswd)}>👁</button>
            </section>
                <button type="submit" className="loginBtn">Login</button>
        </form>
            <p>or</p>
        <section>
            <button className="continueWithSocials">Continue with Google</button>
            <button className="continueWithSocials">Continue with Facebook</button>
        </section>
        <p>Don't have an account? <a href="#">Sign up.</a></p>
    </section>
    )
}
