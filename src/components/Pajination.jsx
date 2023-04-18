import React from 'react'
import ReactPaginate from 'react-paginate'
function Pajination({getpage , pagecount}) {

  let pageclick=(data)=>{
    getpage(data.selected +1)
  }
  return (
    <>
    <ReactPaginate
        breakLabel="..."
        nextLabel="التالي >"
        onPageChange={pageclick}
        pageRangeDisplayed={5}
        pageCount={100}
        previousLabel="< السابق"

        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}

        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
       
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        
        activeClassName={'active'} 
       
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        
      />
    </>
  )
}

export default Pajination