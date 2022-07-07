import React, { Fragment, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./BlogDetail.module.css";
import { BlogContext } from "../context/blog-context";


const BlogDetail = () => {
  const pamas = useParams();
  const bid = pamas.blogID;
  const blogCtx = useContext(BlogContext);
  const myBlogs = blogCtx.blogs;
  const history = useNavigate();
  let blogIdArray = [];
  for (let i of myBlogs) {
    blogIdArray.push(i.id);
  }
  const nextHandler = () => {
    const nextBlogID = blogIdArray[blogIdArray.indexOf(Number(bid)) + 1];
    history(`/home/${nextBlogID}`);
  };

  const previousHandler = () => {
    const nextBlogID = blogIdArray[blogIdArray.indexOf(Number(bid)) - 1];
    history(`/home/${nextBlogID}`);
  };

  let singleBlog;
  for (let i of myBlogs) {
    if (String(i.id) === bid) {
      singleBlog = i;
    }
  }

  let tag = "";
  for (let t of singleBlog.tags) {
      tag += " " + t.value;
  }
  const nextDisable =
    blogIdArray.indexOf(Number(bid)) < blogIdArray.length - 1 ? true : false;
  const previousDisable = blogIdArray.indexOf(Number(bid)) > 0 ? true : false;

  return (
    <Fragment>
      <div className={classes.container}>
        <img src={singleBlog.image} alt="no" />
        <h3>Title : {singleBlog.title}</h3>
        <p>Description : {singleBlog.description}</p>
        <h2>Auther : {singleBlog.auther}</h2>
        <h3>Tags : {tag}</h3>
        <h3>publishDate : {singleBlog.releaseDate}</h3>
        <button disabled={!previousDisable} onClick={previousHandler}>
          Previous
        </button>
        <button disabled={!nextDisable} onClick={nextHandler}>
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default BlogDetail;
