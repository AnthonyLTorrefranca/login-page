import {useState} from 'react'
import './Login.css'

const Login = () => {
    const userDetails = ([
        { username: "tony", password: "test"},
        { username: "simon", password: "test"},
        { username: "tian", password: "test"},
        { username: "john", password: "test"},
    ])
    const [UserStatus, setUserStatus] = useState('idle')
    const [FormValues, setFormValues] = useState({
        username: "",
        password: "",
    })
    const [Show, setShow] = useState(false)
    function HandleChange(e){
        const {name, value} = e.target
        setFormValues((prev)=> ({
            ...prev,
            [name]: value
        }))
    }
    function HandleSubmit(e){
        e.preventDefault()
       const userCheck = userDetails.find((user) => {
            return user.username === FormValues.username && user.password === FormValues.password
        })
        
        if (userCheck){
            setUserStatus('found')
            setTimeout(() => {
                setUserStatus('idle')
            }, 2000);
        }
            else{
                setUserStatus('notFound')
                setTimeout(() => {
                    setUserStatus('idle')
                }, 2000);
        }
    }
return (
   <section className="loginInfoContainer">
        {UserStatus === "found" && <h1 className='correctKey'>Welcome Back, {FormValues.username}!!</h1>}
        {UserStatus === "notFound" && <h1 className='incorrectKey'>User not found!!</h1>}
        {UserStatus === "idle" && <h1>Welcome Back!</h1>} 
        <p>login to continue your shopping journey.</p>
        <section className='loginInfo'>
            <form onSubmit={HandleSubmit}>
                <label htmlFor="username" className='InputLabel'>Enter username</label>
                <section>
                    <input type="text" 
                        name='username'
                        value={FormValues.username}
                        placeholder='Enter username'
                        onChange={HandleChange}/>
                </section>
                <label htmlFor="password" className='InputLabel'>Enter password</label>
                <section className='passwordContainer'>
                    <input type={Show ? "text" : "password"} 
                        name='password'
                        value={FormValues.password}
                        placeholder='Enter password'
                        onChange={HandleChange}/>
                    <button type='button' onClick={() =>setShow(!Show)}>👁️</button>
                </section>
                    <button type='submit' className='loginBtn'>Login</button>
            </form>
        <section className="socials">
            <button className='continueWithSocials'>Continue with Google</button>
            <button className='continueWithSocials'>Continue with Facebook</button>
        </section>
        </section>
   </section>
  )
}

export default Login
