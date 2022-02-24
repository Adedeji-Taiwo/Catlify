import React from 'react';
import Cat from './Cats';
import Loading from './Loader';
import Button from './Button';



const Main = ({data, filter, isLoading, handleClick}) => {
    
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
