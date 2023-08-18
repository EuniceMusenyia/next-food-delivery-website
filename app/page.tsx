import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Body from "./components/body";

export default function Home () {
  return(
    <main className="h-screen-full bg-white text-black">
    <Navbar/>
    <Body/>
    <Footer/>
    </main>
    

  )
  
}
