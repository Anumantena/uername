import React from "react";
import UserNames from "./UserNames.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Details from "./Details.js"


function App() {

  return (
       <>
            <Router>
            <Routes>
                    <Route exact path="/" 
                        element={<UserNames/>} />
  
                    <Route exact path="/Details.js" 
                        element={<Details/>} />
        </Routes>
            </Router>
        </>
  )

}

export default App