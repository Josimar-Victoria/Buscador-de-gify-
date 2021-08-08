import React, { useState } from 'react'
import { useLocation } from 'wouter'
import '../Styles/SearchForms.css'
const SearchForms = () => {
    
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation]= useLocation()

    const handleSumit = (e) => {
    e.preventDefault()
    if(keyword !== '') {
            //navegar a otra ruta
    pushLocation(`/search/${keyword}`)
    console.log(path);
    }
    }
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <>
            <form className="form" onSubmit={handleSumit}>
                <button className="btn_SearchForms">Buscar!</button>
                <input 
                placeholder='Search a gifs here ...' 
                type="text" onChange={handleChange} 
                value={keyword} />
            </form>
        </>
    )
}

export default SearchForms
