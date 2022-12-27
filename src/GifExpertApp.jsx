import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory ) =>{

        if (categories.includes(newCategory)) return;

        // console.log(newCategory);
        // setCategories([ ...categories, 'Valorant']);
        setCategories( [ newCategory, ...categories ] );
        // console.log("usestate")

    };

    return (

        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                // propiedad o props "onAddCategory es la funcion en la que se inserta la nueva categoria que proviene del componente AddCategory"
                onNewCategory={ event => onAddCategory(event) } 
            /> 

            { 
                // "categories" funcion definida como useState o estado actual del componente al inicio del mismo
                categories.map( (category) => ( 
                    // .map recorre el arreglo de categorias insertando la llave correspondiente a cada categoria de la lista
                    <GifGrid 
                        key={ category }
                        category={ category } 
                    />
                ) )
            }
        </>

    )

};

