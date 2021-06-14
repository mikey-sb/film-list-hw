import React from 'react'
import Film from "./Film.js"

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return <Film name={film.name} url={film.url}>{film.text}</Film>
    })

    return (
        <div classNmae="film-list">
            <h1>Film List</h1>
            {filmNodes}
        </div>
    )

}

export default FilmList;