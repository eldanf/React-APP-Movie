
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams} from "react-router-dom"
import { FaStar } from 'react-icons/fa';

function Moviedetales() {
    let [movie, setmovie] = useState([])
  const param =useParams()

  const getmovie = async () => {
    let res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=66eb3bde9cca0487f03e78b512b451e4&language=ar`)
    setmovie(res.data)
  
  }//getmovie

  useEffect(()=>{
   getmovie()
   } , [])

  return (
    <section className="py-5 my-5">
    <div className="container ">
        <div className="card p-5 w-75 mx-auto my-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className=" rounded w-100 "/>
                </div>
              
                <div className="col-md-8">
                    <div className='display-6'>
                        <h3>{movie.original_title}</h3>
                        <h4>انتاج :    {movie.release_date}</h4>
                        <h4>التقيم :    {movie.vote_average}   <FaStar className=" text-warning mb-1"/></h4> 
                        <p className="mt-4"> {movie.overview} </p>
                        <a href="detales.html" className="btn btn-dark btn-lg mt-5">مشاهده الفيلم </a>
                    </div>
                </div>
            </div>
            
          
        </div>
    </div>
</section>
  )
}

export default Moviedetales