import axios from "axios"
import { useState, useEffect } from "react"
import FormEntry from '../components/formEntry'

const Login = ({ setToken }) => {
    // states
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [credentials, setCredentials] = useState({})

    // handlers
    const handleChangeName = (event) => {
        console.log('username', event.target.value)
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        console.log('password', event.target.value)
        setPassword(event.target.value)
    }

    const getCredentials = (event) => {
        event.preventDefault()
        const newCredentials = {
            name: username,
            pass: password
        }
        console.log('credentials', newCredentials)
        setCredentials(newCredentials)            
        axios
            .get("http://localhost:3001/user/auth")
            .then(response => console.log(response.data))
        setUsername('')
        setPassword('')
    }

    // rendering
    return (
        <div className='loginPage'>
            <form onSubmit={getCredentials}>
                <FormEntry
                    name={'Username'}
                    userEntry={username}
                    setUserEntry={handleChangeName}
                />
                <FormEntry
                    name={'Password'}
                    userEntry={password}
                    setUserEntry={handleChangePassword}
                />
                <button type="submit"> Connect </button>
            </form>
        </div>
    )
}

export default Login;