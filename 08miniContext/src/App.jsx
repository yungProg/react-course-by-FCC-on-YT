import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css"
import Login1 from "./components/Login1";

function App() {
    return (
        <UserContextProvider>
            <h1>Welcome</h1>
            
            <Profile /><Login />
            <Login1 />
        </UserContextProvider>
    )
}

export default App