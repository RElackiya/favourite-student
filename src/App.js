import Context from "./components/Context"
import Favstudents from "./components/Favstudents"
import Listofstudents from "./components/Listofstudents"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Link } from "react-router-dom"
const App=()=>{
  return(<>
  <Context>

    <BrowserRouter>
    <nav className="bg-black flex gap-20 text-white items-center" style={{width:"100%",height:'100px'}}>
    <p className=" pl-8"> <Link to={"/"}>List Of Students</Link></p>
    <p className=" pl-8 " > <Link to={"/favstudents"}>Favourite Students</Link></p>
    </nav>
    <Routes>
      
      <Route path="/" element={<Listofstudents></Listofstudents>}></Route>
      <Route path="/favstudents" element={<Favstudents></Favstudents>}></Route>
      
    </Routes>
    </BrowserRouter>
    </Context>
    </>
  
  )
}

export default App;
