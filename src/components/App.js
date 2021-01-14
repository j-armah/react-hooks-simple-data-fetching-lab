// create your App component here
import React, { useEffect, useState } from 'react'

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [image, setImage] = useState("")

    useEffect( () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(r => r.json())
            .then(data => {
                console.log(data.message)
                setImage(data.message)
                setIsLoaded(!isLoaded)
            })
    }, [])

    if (!isLoaded) return <p>Loading...</p>

    return (
        <img src={image} alt="A Random Dog"/>
    )
}

export default App