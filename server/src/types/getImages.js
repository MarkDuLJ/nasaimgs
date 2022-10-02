import {getNASAImages} from '../services/axios.js'

export default async (root, args, context, info) => {
    // return [
    //     {
    //         href:"this is href",
    //         description:"this is description",
    //         title:"this is title",
    //     }
    // ]

    const {q,from}=args.input

    // console.log("xxx", q, from)

    let imgList=[]
    try {
        if(q){
            const collection=await getNASAImages(q,from).then(res=>res.collection)
            // console.log(collection)

            if(collection&&collection.items?.length>0){
                //todo: deal items.length<100 when last page
                imgList=collection.items.map(item=>({
                    href:item.links?item.links[0]:"",
                    title: item.data ? item.data[0].title:"",
                    description: item.data ? item.data[0].description :"",
                }))
            }

        }
        
    } catch (error) {
        //todo:deal error
        console.log(error)
    }

    return imgList
}