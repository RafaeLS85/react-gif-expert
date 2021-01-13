import React, { useState } from 'react';
import  { AddCategory }  from './components/AddCategory';
import  { GifGrid }  from './components/GifGrid';



export const GifExpertApp = () => {
  

    const [ categories, setCategories ] = useState(['One Punch']); 

    // const handleAdd = () => {             
    //     setCategories( cate => [ ...cate, 'HunterXHunter' ] ) // ...cate con el operador de los tres puntos tomamos el valor anterior del array.
    // }

    return(
         <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />           
           <hr />

           {/* <button onClick={ handleAdd }>Agregar</button> */}
           <ol>

                {/* {
                    categories.map( (category, i)=> {
                        //el key no debe ser el indice del map, y debe ser unico.
                        return <li key={ i }>{ category }</li>
                    })
                } */}
                 {
                    categories.map( category => (                       
                         <GifGrid  
                         category = { category }
                         key = { category }                         
                         />
                    ))                  
                }

           </ol>
          
         </>
    )
}


