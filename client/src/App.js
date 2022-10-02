import React,{useState} from 'react'


import './App.css';
import SearchBar from './components/SearchBar';
import List from './components/list/List';
/* 
  todos:
  1, decorate whole pages
  2, create client side pagination because 100 items is huge
  3, truncate description because of length

*/

function App() {
//seperate q, from in different layers since NASAapi doen't have limit and offset
  const [query, setQuery] = useState("")


  return (
    <div>
      <h2>Hello</h2>
      <SearchBar query={query} onChange={setQuery} />
      <List query={query} />

    </div>
  );
}

export default App;
