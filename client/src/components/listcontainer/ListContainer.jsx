import React,{useState} from 'react'
import { useQuery } from "@apollo/client";

import {GET_IMAGES_BY_QUERY} from "../../gql/index"
import FetchNav from "../fetchnav/FetchNav";
import ImgList from "../imglist/ImgList";


const List = ({ query }) => {
    const [page, setPage] = useState(1);
    const { data, loading, error } = useQuery(GET_IMAGES_BY_QUERY, {
      variables: {
        input: { q: query, from: page},
      },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :({JSON.stringify(error)}</p>;

    const imgList=data.getImgs

    return (
      <>
        <FetchNav setPage={setPage} page={page} />
        <ImgList imgList={imgList}/>
        
      </>
    );
  };


export default List