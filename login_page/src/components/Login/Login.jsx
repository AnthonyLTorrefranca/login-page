import { useState } from "react"
import './Login.css'

export default function Login() {
    const [ShowPswd, setShowPswd] = useState(false)
    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
    })
    const userDetails = [
        { username: "tony", password: "test" },
        { username: "simon", password: "test" },
        { username: "john", password: "test" },
        { username: "tian", password: "test" },
        { username: "david", password: "test" },
    ]
    function handleChange(e){
        const { name, value } = e.target;
        setFormValues(prev =>({
            ...prev,
            [name]: value
        }))
    }
    function handleSubmit(e){
        e.preventDefault();
        const userInput = formValues.username
        const passInput = formValues.password
        
        if (userInput === "" || passInput === ""){
        alert("Please enter credentials!")
            return
        }
        const userInfo = userDetails.find((user) =>{
            return user.username === formValues.username && user.password === formValues.password
        })
        if (!userInfo){
            alert("No account found!")
            return
        }
        alert(`Welcome back, ${userInput}`)
        }
  return (
    <section className="loginInfo">
      <h1 className="welcomeHeading">Welcome back!</h1>
      <p>login to continue your shopping journey.</p>
      <form onSubmit={handleSubmit}>
        <p>Enter username</p>
        <section>
            <input type="text" 
                name="username"
                value={formValues.username}
                onChange={handleChange}
                placeholder="Enter username" />                
        </section>
        <p>Enter password</p>
        <section className="passwordContainer">
            <input type={ShowPswd ? "text" : "password"} 
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Enter password" />                
            <button type="button" onClick={()=> setShowPswd(!ShowPswd)}>👁</button>
        </section>
        <button type="submit" className="loginBtn">Login</button>
      </form>
      <section className="social">
        <button className="continueWithSocials">Continue with Google</button>
        <button className="continueWithSocials">Continue with Facebook</button>
      </section>
    </section>
  )
}
