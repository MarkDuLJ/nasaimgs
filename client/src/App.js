import React,{useState} from 'react'


import './App.css';
import SearchBar from './components/SearchBar';
import ListContainer from './components/listcontainer/ListContainer';
/* 
  todos:
  1, decorate whole pages
  2, create client side pagination because 100 items is huge
  3, truncate description because of length
  4, server side pagination need to determin first page and last page

*/

function App() {
//seperate q, from in different layers since NASAapi doen't have limit and offset
  const [query, setQuery] = useState("")


  return (
    <div>
      <div style={{display:"flex", justifyContent:"center"}}><h2>Brigit Takeout Challenge</h2></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SearchBar query={query} onChange={setQuery} />
      </div>
      <ListContainer query={query} />

    </div>
  );
}

export default App;
