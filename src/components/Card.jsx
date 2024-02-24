import React from "react";
import Button from './Button';

const Card = ({ data }) => {
    // console.log(data);
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={data.image} className="image" />
        </div>
        <h4 className="title">{data.title}</h4>                                
        <div className="description">
          <h4 className="title">{data.title}</h4>                                
          <p className="desc">{data.description}</p>
          <div className="buttons">
            <Button className="btn">
              <a href={data.link} className="demo" target="_blank">
                Demo
              </a>
            </Button>
            <Button className="btn">
              <a href={data.codeLink} target="_blank">Code</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;