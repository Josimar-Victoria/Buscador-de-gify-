import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { ListOfGifs } from '../Components/ListOfGifs'
import { Spinner } from '../Components/Spinner'
import { useGifs } from '../Hooks/useGifs'

const POPULAR_GIFS = ['Scarface', 'Matrisx', 'Morty']

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
                <input placeholder='Search a gifs here ...' type="text" onChange={handleChange} value={keyword} />
                <button>Buscar!</button>
            </form>
            return <>
    {loading
        ? <Spinner/>
        :<ListOfGifs gifs={gifs}/>
    }
    </>
            <h3 className="App-title">Los gifs mas populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGifs) => (
                    <li key={popularGifs}>
                        <Link to={`/search/${popularGifs}`}>Gifs de {popularGifs}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
