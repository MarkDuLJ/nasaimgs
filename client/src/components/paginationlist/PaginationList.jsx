import React,{useState} from 'react'
import PaginationBar from "../paginationbar/PaginationBar";
import ImgList from "../imglist/ImgList";
const PaginationList = ({imgList}) => {
    const itemsPerPage=10
    const [currentPage, setCurrentPage] = useState(1)
    const idxOfLastItem=currentPage*itemsPerPage
    const idxOfFirstItem=idxOfLastItem-itemsPerPage
    const currentItems = imgList.slice(idxOfFirstItem,idxOfLastItem)
  return (
    <div>
      <PaginationBar
        itemsPerPage={itemsPerPage}
        totalLength={imgList.length}
        onPageChange={pageNum=>setCurrentPage(pageNum)}
      />
      <ImgList imgList={currentItems} />
    </div>
  );
}

export default PaginationList