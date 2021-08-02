import React, { useState } from 'react'
import {  useLocation } from 'wouter'
import { ListOfGifs } from 'Components/ListOfGifs'
import { Spinner } from 'Components/Spinner'
import { useGifs } from 'Hooks/useGifs'
import { LazyTrending } from 'Components/TrendingSearches/LazyTrending'

export const Home = () => {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation]= useLocation()
    const { loading, gifs } = useGifs()

    const handleSumit = (e) => {
    e.preventDefault()
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`)
    console.log(path);
    }
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }
    return (
    <>
        <form onSubmit={handleSumit}>
            <input 
            placeholder='Search a gifs here ...' 
            type="text" onChange={handleChange} 
            value={keyword} />
            <button>Buscar!</button>
        </form>
        
        <div className='App-main'>
            <div className='App-results'>
                <h3 className='App-title'>Ultima Busqueda</h3>
                {loading
                ? <Spinner/>
                :<ListOfGifs gifs={gifs}/>
                }
            </div>
            <div className='App-category'>
                <LazyTrending/>
            </div>
        </div>
        
    </>
)
}
