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
      <h2>Hello</h2>
      <SearchBar query={query} onChange={setQuery} />
      <ListContainer query={query} />

    </div>
  );
}

export default App;
