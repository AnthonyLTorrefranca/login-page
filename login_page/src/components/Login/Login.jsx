import { useEffect, useState }from 'react'
import './Login.css'

export default function Login() {
    const userDetails = [
        { username: "tony", password: "test"},
        { username: "simon", password: "test"},
        { username: "tian", password: "test"},
        { username: "david", password: "test"},
    ]
    const [ShowPswd, setShowPswd] = useState(false)
    const [FormValues, setFormValues] = useState({
        username: "",
        password: ""
    })
    const [UserStatus, setUserStatus] = useState({
        userFound: false,
        userNotFound: false,
    })
    
    useEffect(() => {
        let timer;
        if (UserStatus.userFound){
            timer = setTimeout(() => {
                setUserStatus(prev =>({
                    ...prev,
                    userFound: false,
                })) 
            }, 2000);
        } 
        else if (UserStatus.userNotFound){
            timer = setTimeout(() => {
                setUserStatus(prev => ({
                    ...prev, 
                    userNotFound: false
                }))    
            }, 2000); 
        }
        return ()=> clearTimeout(timer)
    }, [UserStatus.userFound, UserStatus.userNotFound])

    function handleShow(){
        setShowPswd(!ShowPswd)
    }
    function handleChange(e){
        const {name, value} = e.target
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    function handleSubmit(e){
        e.preventDefault()
        const userCheck = userDetails.find((user) => {
            return user.username === FormValues.username && user.password === FormValues.password;
            }
        )
        if (userCheck){
            setUserStatus((prev) => ({
                ...prev,
                userFound: true,
                userNotFound: false
            }))
        }
        else if (!userCheck){
            setUserStatus(prev => ({
                ...prev,
                userFound: false,
                userNotFound: true
            }))
        }
    }
  return (
    <section className='loginInfoContainer'>
        <section className="loginInfo">
            <h1 className="welcomeHeading">Welcome Back!</h1>
            {UserStatus.userFound && <h3 className='correctKey'>User found!!</h3>}
            {UserStatus.userNotFound && <h3 className='errorKey'>User not found!!</h3>}
            <p>login to continue your shopping journey.</p>
            <form onSubmit={handleSubmit}>
                <p>Enter username</p>
                    <section>
                        <input type="text"
                            placeholder='Enter Password'
                            name='username'
                            value={FormValues.username}
                            onChange={handleChange} /> 
                    </section>
                <p>Enter password</p>
                    <section className='passwordContainer'>
                        <input type={ShowPswd ? "text" : "password"}
                            placeholder='Enter Password'
                            name='password'
                            value={FormValues.password}
                            onChange={handleChange} />
                        <button type='button' onClick={handleShow}>👁️</button>
                    </section>
                <button type='submit' className='loginBtn'>Login</button>
            </form>
            <section className="social">
                <button className='continueWithSocials'>Continue with Google</button>
                <button className='continueWithSocials'>Continue with Facebook</button>
            </section>
        </section>
    </section>
  )
}
