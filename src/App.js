import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Head from './components/Head'
import Movielist from './components/Movielist'
import Footer from './components/Footer'
import axios from 'axios'
import Moviedetales from './components/Moviedetales';

export default function App() {
  let [movies, setmovies] = useState([])
  let [pagecount, setpagecount] = useState([0])

  useEffect(() => {
    getallmovies()
  }
    , [])

  const getallmovies = async () => {
    let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=66eb3bde9cca0487f03e78b512b451e4&language=en-US`)
    console.log('data here', res.data);
    setmovies(res.data.results)
    setpagecount(res.data.total_pages)
  }//getallmovies

  const getpage = async (page) => {
    let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=66eb3bde9cca0487f03e78b512b451e4&language=en-US&page=${page}`)
    console.log('data here', res.data);
    setmovies(res.data.results)
    setpagecount(res.data.total_pages)
  }//getpage

  const search = async (word) => {
    if(word===""){
       getallmovies()    }
      else{
        let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5ec279387e9aa9488ef4d00b22acc451&language=en-US&query=${word}`)
        console.log('data here', res.data);
        setmovies(res.data.results)
        setpagecount(res.data.total_pages)
      }//search

     
    }
   

  return (
    <div>
      <Head search={search}/>
      <BrowserRouter>
        <Routes>
         <Route path='/'element={ <Movielist movies={movies} getpage={getpage} pagecount={pagecount}/> }/>
         <Route path='/movie/:id'element={<Moviedetales/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    
  
    </div>
  )
}

