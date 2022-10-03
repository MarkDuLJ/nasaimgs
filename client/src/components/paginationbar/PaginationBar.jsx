import React from 'react'

const PaginationBar = ({itemsPerPage,totalLength,onPageChange}) => {
    const pageNums=[]
    for (let i = 1; i <=Math.ceil(totalLength/itemsPerPage); i++) {
       pageNums.push(i)        
    }
  return (
    <nav className="navbar">
      <div className="reminder">click number to see more</div>
      <div className="navbar-links">
        <ul>
          {pageNums.map((n) => (
            <li>
              <a href="#" onClick={()=>onPageChange(n)}>
                {n}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default PaginationBar