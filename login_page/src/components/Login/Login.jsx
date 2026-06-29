import {useState, useEffect} from 'react'
import './Login.css'

const Login = () => {
    const userDetails = [
        { username: "tony", password: "test"},
        { username: "simon", password: "test"},
        { username: "tian", password: "test"},
        { username: "john", password: "test"},
    ]
    const [Show, setShow] = useState(false)
    const [FormValues, setFormValues] = useState({
        username: "",
        password: ""
    })
    const [UserStatus, setUserStatus] = useState({
        userFound: false,
        userNotFound: false,
        idle: true
    })

    const userCheck = userDetails.find(user => {
        return FormValues.username === user.username && FormValues.password === user.password
    })
    useEffect(()=> {
        let timer;
        if (userCheck){
            timer = setTimeout(() => {
                setUserStatus(prev=> ({
                    ...prev,
                    userFound: false,
                    idle: true
                }))
            }, 2000);
        }   
        else{
            timer = setTimeout(() => {
                setUserStatus(prev => ({
                    ...prev,
                    userNotFound: false,
                    idle: true
                }))
            }, 2000);
        }
        return ()=> clearTimeout(timer)
    }, [userCheck])
    
    function HandleSubmit(e){
        e.preventDefault()
        
        if (userCheck){
            console.log("true")
            setUserStatus(prev=>({
                ...prev,
                userFound: true,
                userNotFound: false,
                idle: false
            }))
        }
        else{
            setUserStatus(prev=>({
                ...prev,
                userFound: false,
                userNotFound: true,
                idle: false                
            }))
        }
    }
    function HandleChange(e){
        const { name, value } = e.target
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const idle = UserStatus.idle
    const userFound = UserStatus.userFound
    const userNotFound = UserStatus.userNotFound
return (
    <section className='loginInfoContainer'>
        <section className="loginInfo">
            {idle && <h1>Welcome back!</h1>}
            {userFound && <h1 className='correctKey'>Welcome back, {FormValues.username}!</h1>}
            {userNotFound && <h1 className='incorrectKey'>User not Found!</h1>}
            <p>login to continue your shopping journey.</p>
            <form onSubmit={HandleSubmit}>
                <label htmlFor='username' className='InputLabel'>Enter username</label>
                    <section>
                        <input type="text" 
                            placeholder='Enter Username'
                            name='username'
                            value={FormValues.username}
                            onChange={HandleChange} />
                    </section>
                <label htmlFor='password' className='InputLabel'>Enter password</label>
                    <section className='passwordContainer'>
                        <input type={Show ? "text" : "password"} 
                            placeholder='Enter Password'
                            name='password'
                            value={FormValues.password}
                            onChange={HandleChange} />
                        <button type='button' onClick={()=> setShow(!Show)}>👁️</button>
                    </section>
                <button className='loginBtn'>Login</button>
            </form>
        </section>
            <section className='socials'>
                <button className='continueWithSocials'>Continue with Google</button>
                <button className='continueWithSocials'>Continue with Facebook</button>
            </section>
    </section>
  )
}

export default Login
