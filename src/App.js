import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Redirect,Switch} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";


function App() {
    return (

        <Router>
            <div className="App">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 ">

                            <Sidebar/>


                        </div>
                        <div className="col-lg-9 app__main-content">

                            {/*    Navbar*/}
                            <Navbar/>

                            <Switch>

                            <Route exact path={"/"}>
                                <About/>
                            </Route>
                            <Route path={"/projects"}>
                                <Projects/>
                            </Route>
                            <Route path={"/resume"}>
                                <Resume/>
                            </Route>
                            <Route>
                                <Redirect to={'/'} />
                            </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
