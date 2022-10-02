import React from 'react'
//todo:need to deal page<1 and page>totalpage
const FetchNav = ({setPage,page}) => {
  return (
    <div style={{ dispaly: "flex", justifyContent: "space-between" }}>
      <nav style={{ dispaly: "flex", justifyContent: "space-between" }}>
        <button onClick={() => setPage((pre) => pre - 1)}> prev</button>
        <span>NASAapi Page{page}</span>
        <button onClick={() => setPage((pre) => pre + 1)}> next</button>
      </nav>
    </div>
  );
}

export default FetchNav
