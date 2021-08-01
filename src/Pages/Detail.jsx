import { Gifs } from '../Components/Gifs';
import { useGlobalGifs } from '../Hooks/useGlobalGifs';
export const Detail = ({params}) => {
    
    const gifs = useGlobalGifs()
    
    console.log(gifs);
    const gif = gifs.find(singleGifs => 
        singleGifs.id === params.id)

        console.log(gif);

    return <Gifs {...gif}/>
        

}
