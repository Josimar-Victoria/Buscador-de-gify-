import React from 'react'
import { Link } from 'wouter'
import '../Styles/category.css'

export const Category = ({name, option}) => {
    return (
        <div className='category'>
            <h3 className='category-title'>
                Tendencias
            </h3>
            <ul className='category-list'>
                {option.map((singleOption) => (
                    <li key={singleOption}>
                        <Link className='category-link' 
                        to={`/search/${singleOption}`}>
                        {singleOption}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
