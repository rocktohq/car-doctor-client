import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <main className="max-w-screen-xl mx-auto px-3">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
      <Toaster></Toaster>
    </>
  )
}

export default MainLayout
