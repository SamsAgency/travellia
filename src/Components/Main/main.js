import React from 'react'
import Column1 from './Column1/Column1';
import "./main.css"
import Navbar from './Navbar/navbar';
import Column2 from './Column2/Column2';

function Home() {
    return (
        <div className="main">
            <Navbar/>
            <div className="columns">
                <div className="column1">
                    <Column1/>
                </div>
                <div className="column2">
                    <Column2/>
                </div>
                
            </div>
        </div>
    )
}

export default Home
