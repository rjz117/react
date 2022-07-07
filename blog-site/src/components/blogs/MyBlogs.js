import React, { Fragment, useContext } from "react";
import { UserContext } from "../../context/user-context";
import { BlogContext } from "../../context/blog-context";
import classes from "./MyBlogs.module.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const MyBlogs = () => {
  const blogCtx = useContext(BlogContext);
  const userCtx = useContext(UserContext);
  const login = userCtx.isLoggedin;
  const user = userCtx.user;
  let SingleBlog;
  let blogTable;

  const myBlogs = blogCtx.blogs.filter((blog) => {
    return blog.auther === user;
  });
  if (myBlogs.length === 0) {
    return;
  } else {
    blogTable = myBlogs.map((blog, index) => {
      let tag = "";
      for (let t of blog.tags) {
        tag += " " + t.value;
      }
      return (
        <tbody key={index}>
          <tr>
            <th>{index}</th>
            <th>
              <Link to={`/home/${blog.id}`}>{blog.title}</Link>
            </th>
            <th>{blog.auther}</th>
            <th>{tag}</th>
            {login && (
              <th>
                <Link to={`/home/edit/${blog.id}`}>
                  <Button>edit</Button>
                </Link>
                <br></br>
                <Button onClick={blogCtx.removeToC.bind(null, blog.id)}>
                  delete
                </Button>
              </th>
            )}
          </tr>
        </tbody>
      );
    });

    return (
      <Fragment>
        <main className={classes.main}>
          <div>{SingleBlog}</div>
          <div>
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
          </div>
        </main>
      </Fragment>
    );
  }
};

export default MyBlogs;
