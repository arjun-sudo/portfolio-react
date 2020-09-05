import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 ">

                            <Sidebar/>


                    </div>
                    <div className="col-lg-9 app__main-content">

                    {/*    Navbar*/}
                    <Navbar/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
