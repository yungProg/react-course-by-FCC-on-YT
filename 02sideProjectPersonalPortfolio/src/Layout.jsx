import {Outlet} from "react-router-dom"
import Header from "./routes/Header/Header"
import Footer from "./routes/Footer/Footer"

function Layout() {
  return (
    <div>
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Layout