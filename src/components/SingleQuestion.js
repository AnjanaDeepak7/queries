import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const SingleQuestion = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="query" key={id}>
      <div className="qa-container">
        <h4 className="question">{title}</h4>
        {showInfo && <p className="answer">{info}</p>}
      </div>
      <button className="btn" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <CiCircleMinus /> : <CiCirclePlus />}
      </button>
    </article>
  );
};

export default SingleQuestion;
