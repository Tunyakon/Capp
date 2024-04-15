// import { useState } from 'react'
import { Route, Router } from 'react-router-dom';
import './App.css'
import Headbar from './layout/Headbar.jsx';
import Sidebar from './layout/Sidebar.jsx';
// import Navbar from './layout/Navbar.jsx';
// import Sidebar from './layout/SidebarData.jsx';
import { CssBaseline, Box } from "@mui/material";
function App() {

  return (
    <> 
    <h1>Hi</h1>
    {/* <div className='App'>
        <CssBaseline />
        <Sidebar />
        <main className="content">
        <Headbar />
        <div className="content_body">
            <Box m="20px">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/match" element={<Match />} />
                <Route path="/message" element={<Message />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Personality_Database" element={<Perdata />} />
                <Route path="/Personality_Test" element={<Pertest />} />
                <Route path="/Resources" element={<Resource />} />
              </Routes>
            </Box>
          </div>
        </main>
    </div> */}
    </>
  )
}

export default App;
