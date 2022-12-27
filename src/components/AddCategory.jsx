import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  
  // state
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {

    // console.log( target.value );
    setInputValue( target.value );

  }

  const onSubmit = (event) => {

    event.preventDefault();
    //no permite insertar elementos null y tampoco elementos con 1 caracter
    if( inputValue.trim().length <= 1 ) return;

    // primer forma de mandar el argumento al componente padre
    // setCategories( categories => [ inputValue, ...categories ]);
    // segunda forma de mandar el argumento al componente padre
    onNewCategory( inputValue.trim() );
    // limpia el input despues de insertar un elemento con la tecla enter
    setInputValue('');

  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

