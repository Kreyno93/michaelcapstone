
import {BrowserRouter, Routes,Route} from "react-router-dom";
import MainPage from "./Components/Pages/MainPage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";


function App() {


    return (

        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/profilepage"} element={<ProfilePage/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App;
