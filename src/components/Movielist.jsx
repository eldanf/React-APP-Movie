import React from 'react'
import Moviecard from './Moviecard'
import Pajination from './Pajination'


function Movielist({movies , getpage , pagecount}) {
  return (
   <section className='py-5 mt-5'>
        <div className='container'>
            <div className='row'>
               {
                movies.length >=1 ? 
             ( movies.map((mov)=>{
                    return(<Moviecard key={mov.id} mov={mov}/>)
                  }))
             :"eror"
               }
               
              
                
            </div>
            <Pajination getpage={getpage} pagecount={pagecount}/>
        </div>
   </section>
  )
}

export default Movielist