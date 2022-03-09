import React from "react";
import UserNames from "./UserNames.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Details from "./Details.js"
import Photos from "./Photos.js"


function App() {

  return (
       <>
            <Router>
            <Routes>
                    <Route exact path="/" 
                        element={<UserNames/>} />
  
                    <Route path='/Details/:userID'
                        element={<Details/>} />
            
            <Route path='/photos/:id'
            element={<Photos/>} />

        </Routes>
            </Router>
        </>
  )

}

export default App