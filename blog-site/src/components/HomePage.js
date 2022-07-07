import React, { Fragment, useContext } from "react";
import classes from "./HomePage.module.css";
import BlogList from "./BlogList";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/blog-context.js";
import { UserContext } from "../context/user-context";

const HomePage = () => {
  const blogCtx = useContext(BlogContext);
  const userCtx = useContext(UserContext);
  const login = userCtx.isLoggedin;

  const myBlogs = blogCtx.blogs;
  let SingleBlog;
  if (myBlogs.length === 0) {
    SingleBlog = <h1>No Blog</h1>;
  } else {
    SingleBlog = myBlogs.map((blog) => {
      let tag = "";
      for (let t of blog.tags) {
        tag += " " + t.value;
      }
      return (
        <div className={classes.BlogList} key={`${blog.id}div`}>
          <Link
            to={`./${blog.id}`}
            key={`${blog.id}link`}
            className={classes.bloglist}
          >
            <BlogList
              key={`${blog.id}`}
              bid={blog.id}
              title={blog.title}
              auther={blog.auther}
              tags={tag}
            />
          </Link>
          {login && (
            <Link to={`./edit/${blog.id}`}>
              <button>edit</button>
            </Link>
          )}
          <br />
          {login && (
            <button onClick={blogCtx.removeToC.bind(null, blog.id)}>
              delete
            </button>
          )}
        </div>
      );
    });
  }

  return (
    <Fragment>
      <main className={classes.main}>
        <div>{SingleBlog}</div>
        {/* <div>
          <Table striped bordered hover className="mytable">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Auther</th>
                <th>Tags</th>
                {login && <th>Buttons</th>}
              </tr>
            </thead>
            {blogTable}
          </Table>
        </div> */}
      </main>
    </Fragment>
  );
};

export default HomePage;
