import React, { useState } from 'react'

export const AddCategory = () => {

    const[ inputValue, setinputValue ] = useState('Hola Mundo');

    const handleInputChange = ( e ) => {
        setinputValue(e.target.value);
    }     

    return(
        <>

        <input
            type="text"
            value={inputValue}
            onChange={ handleInputChange }
        />
        
        </>
    )
}