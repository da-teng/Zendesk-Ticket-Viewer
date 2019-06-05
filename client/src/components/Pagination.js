import React from "react";
import { Link } from "react-router-dom";
const Pagination = props => {
  return (
    <div className="pagination">
      {props.pages.map(value => {
        return (
          <Link to={`/page=${value}`} className="pagination__item" key={value}>
            {value}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
