import { useEffect } from "react"
import axios from "axios"

const HomePage = () => {
    const handleClick = () => {
        axios
            .get('http://localhost:3001/api/auth/login')
            .then (response => console.log(response))
    }

    return (
        <div className='HomePage' >
            Welcome to 42Pong !
            <button onClick={handleClick} > 42 auth </button>
        </div>
    )
}

export default HomePage