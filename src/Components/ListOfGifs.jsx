import { Gifs } from './Gifs'
import '../Styles/listOfGifs.css'
export const ListOfGifs = ({gifs}) => {

    return (
        <div className="listOfGifs">
            {
                gifs.map(({title, id, url}) => 
            <Gifs 
                title={title} 
                key={id}
                url={url}
                id={id}
            /> )
            }
        </div>
    )
}
