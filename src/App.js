import "./App.css";
import SideBar from "./Components/SideBar";

import Menu from "./Components/Menu";
import Help from "./Components/Help";
import Profile from "./Components/Profile";
import ComingSoon from "./Components/ComingSoon";
import Chat from "./Components/Chat";
import Modal from "./Components/Modal";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SeatsShow from "./pages/Seats";

function App() {
  return (
    <>
      <div className="App">

        <Router>
          <SideBar />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/seat" element={<SeatsShow />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/update/:id" element={<Modal />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
