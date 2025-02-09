import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [ inputValue, setinputValue ] = useState('');//si no agregamos las comillas el valor de inicio va a ser undefined.

    const handleInputChange = ( e ) => {
        setinputValue(e.target.value); //valor del string dentro del evento.
    }     


    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if(inputValue.trim().length > 2){
            
            setCategories( cate => [  inputValue, ...cate ] );
            setinputValue('');
        }


    }

    return(
            
        <form onSubmit={ handleSubmit } >
             <input
            type="text"
            value={inputValue}
            onChange={ handleInputChange }
            />
        </form>       
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
