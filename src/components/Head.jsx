import React from 'react'
import logo from '../images/ana.png'
import { FaSearch } from 'react-icons/fa';
function Head({search}) {
let onsearch=(word)=>{
  search(word)
}
  return (
    <div>
      <header className="text-bg-dark text-white p-3 fixed-top">
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <a href="index.html">  <img src={logo}  alt="" className="w-75 "/></a>
                  
                </div>
                <div className="col-10">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1 text-primary"><FaSearch/></span>
                        <input type="text" onChange={(e)=>onsearch(e.target.value)} className="form-control form-control-lg" placeholder="اسم الفيلم "/> 
                      </div>
                </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Head