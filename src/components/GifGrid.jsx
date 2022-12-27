import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    // console.log({isLoading});

    return (
        <>
            <h3>{ category }</h3>
            {
                // conditional in just one line
                isLoading && ( <h2>Cargando...</h2> )
            }
            
            <div className="card-grid">
                { images.map( (image) => (

                    <GifItem 
                        // unic key, this come in image
                        key={image.id}
                        // esparcir todas las propiedades que vienen en image
                        { ... image }
                    />

                ) ) }
            </div>
        </>
    );
};
