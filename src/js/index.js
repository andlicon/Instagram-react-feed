//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
// componentes
import NavBarBuscar from './components/NavBarBuscar.jsx';
import NavBarPrincipal from './components/NavBarPrincipal.jsx'

//import your own components
import Home from "./pages/Home.jsx";

const App = () => {
    return(
        <div className='home'>
            <NavBarBuscar />
            <Home />
            <NavBarPrincipal />
        </div>
    );
};


//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
