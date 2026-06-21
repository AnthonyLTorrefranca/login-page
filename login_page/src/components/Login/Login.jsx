import { useState } from 'react';
import './Login.css'

export default function Login() {
    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
    })
    const [showPswd, setShowPswd] = useState(false)
    function handleSubmit(e){
        e.preventDefault()
        console.log(JSON.stringify(formValues))
        const username = formValues.username
        const password = formValues.password
        const users = {
            username: "tony",
            password: "test",
        }
        if (username !== users.username || password !== users.password) {
            console.log("User not found")
            return
        }  
        else {
            console.log(`Welcome back ${username}`)
        }
        setFormValues({
            username: "",
            password: "",
        })
        e.preventDefault()
    }
return (
    <section className='loginInfo'>
        <h1 className='welcomeHeading'>Welcome back!</h1>
        <p>Login to continue your shopping journey.</p>
        <form onSubmit={handleSubmit}>
            <p>Enter username</p>
                <section>
                    <input type="text" required
                    placeholder='Enter username'
                    value={formValues.username}
                    onChange={(e) => setFormValues(prev =>({
                        ...prev,
                        username: e.target.value, 
                    }))} />
                </section>
            <p>Enter password</p>
                <section className='passwordContainer'>
                    <input type={showPswd ? "text" : "password" } required
                    placeholder='Enter password' 
                    value={formValues.password}
                    onChange={(e) => setFormValues(prev =>({
                        ...prev,
                        password: e.target.value, 
                    }))} />
                    <button type='button' onClick={()=> setShowPswd(!showPswd)}>👁</button>
                </section>
            <button className='loginBtn'>Login</button>
        </form>
        <section className='social'>
            <button className="continueWithSocials">Continue with Google</button>
            <button className="continueWithSocials">Continue with Facebook</button>
        </section>
    </section>
)}
