import { Outlet, useNavigation} from "react-router-dom"
import Footer from "../footer/Footer"
import Header from "./header/Header"
import Loading from "../loader/Loading"


function Home() {
   const Navigation = useNavigation()
  return (
   
    <div className="flex flex-col justify-between min-h-screen">
        <header className="top-0 left-0 right-0 z-10 sticky">
        <Header></Header>
        </header>
        {
          Navigation.state === "loading" ? <Loading></Loading> :
          <main className="h-full my-5">
        <Outlet />
        </main>
        }
        
        
       <footer>
         <Footer></Footer>
       </footer>
        
    </div>
  )
}

export default Home