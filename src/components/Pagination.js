import React, { useState } from "react";

export default function Pagination(props) {
  // const [activePaginate, setactivePaginate] = useState(1);
  console.log(props.currentPage);

  const handleClickPaginate = (e, item) => {
    e.preventDefault();
    // var activeClass = activePaginate === item ? 'active' : '';
    // e.target.classList.add(activeClass)
    props.hanleClick(item);
  };
  const handleClickPrev = (e) => {
    e.preventDefault();
    props.handlePrev();
  };
  const handleClickNext = (e) => {
    e.preventDefault();
    props.handleNext();
  };
  return (
    <div>
      <ul className="pagination">
        <li className="item_paginate">
          <a href="" className="link_paginate" onClick={handleClickPrev}>
            Prev
          </a>
        </li>
        {props.paginate.map((item) => (
          <li className="item_paginate" key={item.toString()}>
            <a
              href=""
              className={
                (props.currentPage === item ? "active" : "") + " link_paginate"
              }
              onClick={(e) => handleClickPaginate(e, item)}
            >
              {item}
            </a>
          </li>
        ))}
         <li className="item_paginate">
          <a href="" className="link_paginate" onClick={handleClickNext}>
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}
