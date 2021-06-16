import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {orginals,action,horror  } from "./url";
function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <RowPost url={orginals} title='NetFlix Orginals'/ >
            <RowPost url={action} title='Action' isSmall / >
            <RowPost url={horror} title='Horror' isSmall / >

        </div>
    );
}

export default App;
