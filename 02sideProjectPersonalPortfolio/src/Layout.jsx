import {Outlet} from "react-router-dom"
import Header from "./routes/header/Header"
import Footer from "./routes/Footer/Footer"

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout