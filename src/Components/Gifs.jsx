import React from "react";
import { Link } from "wouter";
import 'Styles/gifs.css'

export const Gifs = ({title, id, url}) => {

return (
    <div className="gif">
        <Link to={`/search/gif/${id}`} className="gif">
            <h4>{title}</h4>
            <img loading='lazy' src={url} alt={id} />
        </Link>
    </div>
);
};
