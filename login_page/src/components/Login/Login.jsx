import { useState } from 'react'
import './Login.css'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [seePassword, setSeePassword] = useState(false)
    function handle_submit(e){
        e.preventDefault()
        console.log(email, password)
    }
return (
    <>
    <div className="login_info">
        <h1>Welcome Back!</h1>
        <p>Login to continue your shopping journey.</p>
        <form onSubmit={handle_submit}>
            {/* email */}
                <p>Email:</p>
                <input onChange={(e) =>
                    setEmail(e.target.value)}
                    type="text" placeholder="Email or Username"/>
            {/* password */}
                <p>Password:</p>
                <input onChange={(e) => setPassword(e.target.value)}
                    type={seePassword ?  "text" :  "password"} 
                    placeholder="Password"/>
            <button className="seePswd" 
                    onClick={() => setSeePassword(true)}
                    value={seePassword} 
                    type="button">See Password</button>
            <button className="login_btn">Login</button>
                <p>or</p>
            <button type="button">Continue with Google</button>
            <button type="button">Continue with Facebook</button>
                <p>Don't have an account? <a href="#" target='_blank'>Sign up.</a></p>
        </form>
    </div>
    </>
)
}
