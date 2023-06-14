import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./Pages/AllMeetups";
import NewMeetupsPage from "./Pages/NewMeetup";
import Favorites from "./Pages/Favorites";
import MainNavigation from "./Components/Layout/MainNavigation";

function App() {
  return <div>
    <MainNavigation />
    <Routes>
    <Route path="/" element={<AllMeetupsPage />}/>
    <Route path="/new-meet-up" element={<NewMeetupsPage />}/>
    <Route path="/favorites" element={<Favorites />}/>
    </Routes>
  </div>
  ;
}

export default App;


