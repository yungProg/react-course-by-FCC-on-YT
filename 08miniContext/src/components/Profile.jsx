import { useContext } from "react"
import UserContext from "../context/UserContext"

function Profile() {

    const {user} = useContext(UserContext)
    const {userAgain} = useContext(UserContext)

    return (
        <div>
            Profile Name: {user.username} {" "}
            Email : {userAgain.email}
        </div>
    )
}

export default Profile