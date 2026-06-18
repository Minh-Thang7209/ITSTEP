import { useState } from "react"

export default function App() {
    const [likes, setLikes] = useState(5)
    const [value, setValue] = useState('Text in input')
    function increament() {
        setLikes(likes + 1);
    }
    function decrement() {
        setLikes(likes - 1);
    }
    return <div>
        <h1>{likes}</h1>
        <h1>{value}</h1>
        <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
        />
        <button onClick={increament}>Increament</button>
        <button onClick={decrement}>Decreament</button>
    </div>
}