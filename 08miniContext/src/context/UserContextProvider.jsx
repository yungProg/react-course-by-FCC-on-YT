import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState("")
    const [userAgain, setUserAgain] = useState("")

    return (
        <UserContext.Provider value={{user, setUser, userAgain, setUserAgain}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider