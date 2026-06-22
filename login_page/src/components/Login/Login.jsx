import { useState } from "react"
import './Login.css'

export default function Login() {
    const [formValue, setFormValue] = useState({
        username: "",
        password: "",
    }) 
    const [ShowPswd, setShowPswd] = useState(false)
    function handleChange(e){
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }
    const userDetail = [
        { username: "tony", password: "test" },
        { username: "simon", password: "test" },
        { username: "john", password: "test" },
        { username: "tian", password: "test" },
        { username: "dave", password: "test" },
    ]
    function handleSubmit(e){
        e.preventDefault()
        const foundUser = userDetail.find((user) => {
            return user.username === formValue.username.toLowerCase() && user.password === formValue.password;
        })
        if (!foundUser){
            alert("User not found!")
            return
        } 
        alert(`Welcome back, ${formValue.username}`)
    }
  return (
    <section className="loginInfo">
        <h1>Welcome Back!</h1>
        <p>Login to continue your shopping journey.</p>
        <section>
            <form onSubmit={handleSubmit}>
                <section>
                    <p>Enter username</p>
                    <input required type="text" 
                        name="username" 
                        value={formValue.username} 
                        onChange={handleChange}
                        placeholder="Enter Username" />
                </section>
                    <p>Enter password</p>
                <section className="passwordContainer">
                    <input required type={ShowPswd ? "text" : "password"} 
                        name="password" 
                        value={formValue.password} 
                        onChange={handleChange}
                        placeholder="Enter Password" />
                    <button type="button" onClick={() => setShowPswd(!ShowPswd)}>👁</button>   
                </section>
            <button type="submit" className="loginBtn">Login</button>
            </form>
            <section className="social">
                <button className="continueWithSocials">Continue with Google</button>
                <button className="continueWithSocials">Continue with Facebook</button>
            </section>
        </section>
    </section>
  )
}
