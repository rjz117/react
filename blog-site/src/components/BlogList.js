import React from "react";
import classes from "./BlogList.module.css";

const BlogList = (props) => {
 
  return (
    <div className={classes["BlogList-list"]}>
      <p>title : {props.title}</p>
      <p>Auther : {props.auther}</p>
      <p>tags : {props.tags}</p>
    </div>
  );
};

export default BlogList;
