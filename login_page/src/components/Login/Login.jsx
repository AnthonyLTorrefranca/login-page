import { useState } from 'react'
import './Login.css'

export default function Login() {
    const [showPswd, setShowPswd] = useState(false)
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        pswd: "",
    });
    function handleSubmit(e){
        e.preventDefault()
        console.log(formValues)
    }
return (
    <section className='login_info'>
        <div className='welcome_heading'>
            <h1>Welcome Back!</h1>
            <p>Login to continue your shopping journey.</p>
        </div>
        <form onSubmit={handleSubmit}>
            <section className='nameContainer'>
                <p>Enter your name:</p>
                <input 
                    placeholder='Enter name' 
                    type="text"
                    name="name"
                    onChange={(e) =>
                        setFormValues({
                            ...formValues,
                            name: e.target.value})
                    } />
            </section>
            <section className='emailContainer'>
                <p>Enter your email:</p>
                <input 
                    placeholder='Enter email or username' 
                    type="text"
                    name="email"
                    onChange={(e) =>
                        setFormValues({
                            ...formValues,
                            email: e.target.value})
                    } />
            </section>
            <p>Enter password:</p>
            <section className="passwordContainer">
                <input 
                    placeholder='Enter password' 
                    type={showPswd ? "text" : "password"}
                    name="pswd"
                    onChange={(e) => setFormValues({
                        ...formValues,
                        pswd: e.target.value,})
                    } />
                <button type="button" onClick={()=> setShowPswd(!showPswd)}>👁</button>
            </section>
            <button className='login_btn'>Log In</button>
        </form>
    </section>
)
}
