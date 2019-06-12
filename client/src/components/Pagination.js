import React from "react";
import PropTypes from "prop-types";
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

Pagination.propTypes = {
  pages: PropTypes.array
};
export default Pagination;
