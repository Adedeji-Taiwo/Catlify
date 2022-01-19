import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cat from './Cats';
import Loading from './Loader';
import Button from './Button';



const Main = () => {
     const [data, setData] = useState([]);
     const [filter, setFilter] = useState([]);
     const [isLoading, setIsLoading] = useState(true);


     useEffect(() => {
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


        getCatData();
    }, [])


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

    
    const renderAll =  data.map((cat) =>  <Cat image = {cat.url} cat={cat} key={cat.id}/>)
    const renderFiltered =  filter.map((cat) =>  <Cat image = {cat.url} cat={cat} key={cat.id}/>)
    
    return (
        <main>
            {
              isLoading ? ( <Loading /> ) :
              <div className='wrapper'>
               <div className='country-buttons'>
               {
                  [...new Set(data.map((cat) => { return cat.origin }))]
                  .map((country) => <Button key = {country} onClick={handleClick} value = {country} text = {`${country.toUpperCase()} (${data.filter(cat => cat.origin === country).length})`}/>)              
              }

                <Button value= "all" onClick={handleClick} text = {`ALL`}/>
               </div>

                { filter.length === 0 ?   (<>{renderAll}</>) :  
                  <>{renderFiltered}</>
                
              }
            </div>
          }
      </main>
    )
}

export default Main;
