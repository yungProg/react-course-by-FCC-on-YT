import { useContext, useState } from "react"
import UserContext from "../context/UserContext"

function Login1() {

    const [email, setEmail] = useState("")
    const [tel, setTel] = useState(null)

    const {setUserAgain} = useContext(UserContext) 

    function handleGo(e) {
        e.preventDefault()
        setUserAgain({email, tel})
    }

    return (
        <div>
            <input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            {" "}
             <input 
            type="tel" 
            placeholder="Telephone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            />
            {" "}
            <button onClick={handleGo}>Go</button>
        </div>
    )
}

export default Login1