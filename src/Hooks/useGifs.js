import { useContext, useEffect, useState } from 'react'
import { getGifs } from '../Services/getGifs';
import GifsContext from '../Components/Context/GifsContext'
export const useGifs = ({ keyword} = {keyword: null}) => {
    const [loading, setloading] = useState(false)
    const { gifs, setGifs } = useContext(GifsContext)

    useEffect(() => {
        setloading(true)
        // recuperamos la keyword del localStorage
        const keywordToUse = keyword ||
        localStorage.getItem('lastKeyword') || 'messi'
        getGifs({ keyword: keywordToUse})
        .then((gifs) => {
            setGifs(gifs)
            setloading(false)
            //guardamos la keyword en el localStorage
            localStorage.setItem('lastKeyword', keyword)
        });
    },[keyword, setGifs]);

    return { loading, gifs}
}
