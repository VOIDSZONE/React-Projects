import React, { useState } from "react";

const Card = ({ id, name, info, price, image, removeCard }) => {
  const [readMore, setReadMore] = useState(false);

  const description = readMore ? info : `${info.substring(0, 200)}...`;

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="card">
      <img src={image} alt="name" className="image" />

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">Rs.{price}</h4>
          <h4 className="tour-name">{name}</h4>

          <div className="description">
            {description}

            <span className="read-more" onClick={readMoreHandler}>
              {readMore ? "Show less" : "Read More"}
            </span>
          </div>
        </div>
      </div>
      <button className="btn-red" onClick={() => removeCard(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Card;
