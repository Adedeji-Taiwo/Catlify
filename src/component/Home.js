import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import Main from "./Main";
import About from '../component/About';
import Dummy from '../component/Dummy';
import Footer from '../component/Footer';
import { Routes, Route } from 'react-router-dom';



const Home = () => {
     const [data, setData] = useState([]);
     const [filter, setFilter] = useState([]);
     const [isLoading, setIsLoading] = useState(true);


     useEffect(() => {

        getCatData();
    }, [])


     const getCatData = async () => {
            const catUrl = "https://api.thecatapi.com/v1/breeds";
            const imgUrl = "https://api.thecatapi.com/v1/images/search?breed_id=";
           try {
            const catsResponse = await axios.get(catUrl)
            const cats = catsResponse.data
            
            await Promise.allSettled(cats.map(async (cat) => {
                const response = await axios.get(`${imgUrl}${cat.id}`)
                cat.url = response.data[0].url // data is an array with a single object        
            }))

            setData(cats);
            setIsLoading(false);

            
            } catch (error) {
            console.log(error)
            }
        }



    const handleClick = (e) => {
    
      const byOrigin = e.target.value;
      let filteredCat = [];

     if(e.target.value === "all") {
       filteredCat = data;
     }
     else {
       filteredCat = data.filter(cat => cat.origin === byOrigin);
     }

     setFilter(filteredCat)
    }


    const date = new Date().getFullYear();

    return(   
    <div className="container">
            <Header data = {data} isLoading = {isLoading}/>
            
            <Routes>
                <Route path = "/" element = {<Main data = {data} filter = {filter} isLoading = {isLoading} handleClick = {handleClick}/>}/>
                <Route path = "about" element = {<About />}/>
                <Route path = "dummy" element = {<Dummy />}/>
            </Routes>

            <Footer date={date}/>
    </div>
    )}

export default Home;


