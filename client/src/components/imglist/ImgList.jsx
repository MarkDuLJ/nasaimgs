import React from 'react'
import "./ImgList.css";
const ImgList = ({imgList}) => {
  return (
    <div className="grid-container">
      {imgList.map(({ title, description, href }, i) => (
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
  );
}

export default ImgList