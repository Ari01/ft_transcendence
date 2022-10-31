import {useEffect} from 'react'
import axios from 'axios'

const Login = () => {
    useEffect(() => {
        axios
            .get('https://api.intra.42.fr/oauth/authorize')
            .then(response => console.log(response.data))
    }, [])

    return (<div>Hello World</div>)
}

export default Login