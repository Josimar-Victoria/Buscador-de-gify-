import { useContext, useEffect, useState } from 'react'
import { getGifs } from '../Services/getGifs';
import GifsContext from '../Components/Context/GifsContext'

 const  INITIAL_PAGE = 0

export const useGifs = ({ keyword} = {keyword: null}) => {

    const [loading, setloading] = useState(false)
    const { gifs, setGifs } = useContext(GifsContext)
    const [ page, setPage ] = useState(INITIAL_PAGE)
    const [loadingNexterpage, setLoadingNexterPage ] = useState(false)
            // recuperamos la keyword del localStorage
            const keywordToUse = keyword ||
            localStorage.getItem('lastKeyword') || 'random'
            
    useEffect(() => {
        setloading(true)
        getGifs({ keyword: keywordToUse})
        .then((gifs) => {
            setGifs(gifs)
            setloading(false)
            //guardamos la keyword en el localStorage
            localStorage.setItem('lastKeyword', keyword)
        });
    },[keyword, setGifs, keywordToUse]);
    
    useEffect(() => {
        if(page === INITIAL_PAGE) return
        setLoadingNexterPage(true)
        getGifs({keyword: keywordToUse, page})
        .then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setLoadingNexterPage(false)
        })
    },[keywordToUse, page, setGifs])

    return { loading, loadingNexterpage ,gifs, setPage}
}
