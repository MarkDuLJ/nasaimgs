import React from 'react'

const SearchBar = ({query,onChange}) => {
  return (
    <div>
        <input type="text" placeholder='Search...'  onChange={(e)=>onChange(e.target.value)}/>
    </div>
  )
}

export default SearchBar