import axios from 'axios'

const baseURL ="https://images-api.nasa.gov"
const axiosNASA=axios.create({baseURL})

export const getSearchImages= async (text,pageNum=1)=>{
    const res = await axiosNASA.get(`/search?q=${text}&media_type=image&page=${pageNum}`)
    //todo: deal res.status
    return res.data
}