import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./Pages/AllMeetups";
import NewMeetupsPage from "./Pages/NewMeetup";
import Favorites from "./Pages/Favorites";
import Layout from "./Components/Layout/Layout";

function App() {
  return <div>
    <Layout>
    <Routes>
    <Route path="/" element={<AllMeetupsPage />}/>
    <Route path="/new-meet-up" element={<NewMeetupsPage />}/>
    <Route path="/favorites" element={<Favorites />}/>
    </Routes>
    </Layout>
  </div>
  ;
}

export default App;


