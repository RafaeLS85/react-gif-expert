import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {
  

    const [ categories, setCategories ] = useState(['One Punch','Samurai X','Dragon Ball']);


    // const handleAdd = () => {
    //     // setCategories([ ...categories, 'HunterXHunter' ])      
    //     setCategories( cate => [ ...cate, 'HunterXHunter' ] ) 
    // }

    return(
         <>
            <h2>GifExpertApp</h2>
            <AddCategory />
           <hr />

           {/* <button onClick={ handleAdd }>Agregar</button> */}
           {
               categories.map( x=> {
                   //el key no debe ser el indice del map, y debe ser unico
                   return <li key={ x }>{ x }</li>
               })
           }
         </>
    )
}