import React from "react"
import Header from '../component/Header';
import Main from "./Main";
import About from '../component/About';
import Dummy from '../component/Dummy';
import Footer from '../component/Footer';
import { Routes, Route } from 'react-router-dom';



const Home = () => {
    const date = new Date().getFullYear();
    return(   
    <div className="container">
            <Header />
            
            <Routes>
                <Route path = "/" element = {<Main />}/>
                    <Route path = "about" element = {<About />}/>
                    <Route path = "dummy" element = {<Dummy />}/>
            </Routes>

            <Footer date={date}/>
    </div>
    )}

export default Home;


