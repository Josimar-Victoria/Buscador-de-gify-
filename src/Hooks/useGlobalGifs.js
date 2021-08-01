import  { useContext } from 'react'
import GifsContext from '../Components/Context/GifsContext'

export const useGlobalGifs = () => {
    return useContext(GifsContext).gifs
    
}
