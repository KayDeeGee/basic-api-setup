import { useEffect, useState } from 'react'
import './App.css'
import api from '../utils/api';


function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        api.post('/test')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <>
        </>
    )
}

export default App
