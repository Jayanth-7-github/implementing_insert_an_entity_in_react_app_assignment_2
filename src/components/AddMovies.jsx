import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import MovieCard from './MovieCard'

const AddMovies = () => {
    const Nav=useNavigate()

    const [title,setTitle]=useState("")
    const [director,setDirector]=useState("")
    const [genre,setGenre]=useState("")
    const [releaseYear,setReleaseYear]=useState("")
    const [synopsis,setSynopsis]=useState("")
    const [posterUrl,setPosterUrl]=useState("")

    const Submit=(e)=>{
        e.preventDefault()
        console.log(title,director,genre,releaseYear,synopsis,posterUrl)
        let id=MovieCard.length+1;
        // MovieCard.push({id,title,director,genre,releaseYear,synopsis,posterUrl})
        console.log({id,title,director,genre,releaseYear,synopsis,posterUrl})
        setTitle("")
        setDirector("")
        setGenre("")
        setReleaseYear("")
        setSynopsis("")
        setPosterUrl("")
        alert("movie added")
    }

  return (
    <div>
        <button onClick={()=>{Nav("/")}}>Cancel</button>


        <form onSubmit={Submit}>
        <label>Title</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <label>Director</label>
        <input type="text" value={director} onChange={(e)=>setDirector(e.target.value)} />
        <label>Genre</label>
        <input type="text" value={genre} onChange={(e)=>setGenre(e.target.value)} />
        <label>ReleaseYear</label>
        <input type="text" value={releaseYear} onChange={(e)=>setReleaseYear(e.target.value)} />
        <label>Synopsis</label>
        <input type="text" value={synopsis} onChange={(e)=>setSynopsis(e.target.value)} />
        <label>PosterUrl</label>
        <input type="text" value={posterUrl} onChange={(e)=>setPosterUrl(e.target.value)} />
        <button type='submit'>Submit</button>

        </form>

    </div>
  )
}

export default AddMovies
