import React from "react";
import classes from "./Paggination.module.css";

const Pagination: React.FC<{
  postsPerPage: number;
  totalPosts: number;
  paginate: (p: number) => void;
  cPage: number;
}> = ({ postsPerPage, totalPosts, paginate, cPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={classes.nav}>
      <ul className={classes.pagination}>
        {pageNumbers.map((number) => {
          let uiclass;
          if (number === cPage) {
            uiclass = `${classes["page-link"]} ${classes.selected}`;
          } else {
            uiclass = `${classes.pageitem}`;
          }
          return (
            <li key={number} className={uiclass}>
              <button className={uiclass} onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
