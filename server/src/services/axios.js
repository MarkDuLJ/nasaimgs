import axios from 'axios'

// query string: https://images-api.nasa.gov/search?q=earth&media_type=image&page=2
// default "media_type": "image"
const baseURL ="https://images-api.nasa.gov"
const axiosNASA=axios.create({baseURL})

export const getNASAImages= async (text,pageNum=1)=>{
    const res = await axiosNASA.get(`/search?q=${text}&media_type=image&page=${pageNum}`)
    //todo: deal res.status
    return res.data
}