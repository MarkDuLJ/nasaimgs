import React,{useState} from 'react'
import { useQuery } from "@apollo/client";

import {GET_IMAGES_BY_QUERY} from "../../gql/index"
import "./List.css"

const List = ({ query }) => {
    const [page, setPage] = useState(1);
    const { data, loading, error } = useQuery(GET_IMAGES_BY_QUERY, {
      variables: {
        input: { q: query, from: page},
      },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :({JSON.stringify(error)}</p>;

    console.log(data);

    return (
      <>
        <div style={{ dispaly: "flex", justifyContent: "space-between" }}>
          <nav style={{ dispaly: "flex", justifyContent: "space-between" }}>
            <button onClick={() => setPage((pre) => pre - 1)}> pre</button>
            <span>Page{page}</span>
            <button onClick={() => setPage((pre) => pre + 1)}> next</button>
          </nav>
        </div>
        <div className="grid-container">
          {data.getImgs.map(({ title, description, href }, i) => (
            <div key={i}>
              <h3>{title}</h3>
              <h3>{i}</h3>
              <img
                width="400"
                height="250"
                alt="location-reference"
                src={`${href}`}
              />
              <br />
              <b>About this location:</b>
              <p>{description}</p>
              <br />
            </div>
          ))}
        </div>
      </>
    );
  };


export default List