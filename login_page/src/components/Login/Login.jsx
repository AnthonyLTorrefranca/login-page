import { useState } from 'react';
import './Login.css'

export default function Login() {
    const [showPswd, setShowPswd] = useState(false);
    const [formValues, setFormValues] = useState({ 
        username: "", 
        password: "", 
    });
    
    const users = [
        {username: "tony", password: "test"},
        {username: "simon", password: "test"},
        {username: "john", password: "test"},
        {username: "dave", password: "test"},
        {username: "david", password: "test"},
    ]
    function handleChange(e){

    }
    function handleSubmit(e){
        e.preventDefault()
        if (formValues.username !== users.username || formValues.password !== users.password ) {
            alert("No user details found!")
            return
        }  
        else {
            alert(`Welcome back, ${formValues.username}`)
        }
        setFormValues({
            username: "",
            password: "",
        })
    }
return (
    <section className='loginInfo'>
        <section>
        </section>
        <p>Login to continue your shopping journey.</p>
        <form onSubmit={handleSubmit}>
            <p>Enter username</p>
                <section>
                    <input type="text" required
                    placeholder='Enter username'
                    name="username"
                    value={formValues.username}
                    onChange={handleChange} />
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
