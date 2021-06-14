import React from 'react'

const Film = ({name, url}) => {
    return (
        <div className="film">
        <h4><a href={url}>{name}</a></h4>

        </div>
    )
}

export default Film;