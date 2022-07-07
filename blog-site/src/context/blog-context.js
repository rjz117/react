import { createContext, useState } from "react";

export const BlogContext = createContext({
  blogs: [],
  addBlog: () => {
    /* */
  },
  addToC: (_form) => {
    /* */
  },
  removeBlog: (_id) => {
    /* */
  },
});

const BlogContextProvider = (props) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "asdasd",
      description: "asdasd",
      auther: "rj",
      image: "",
      tags: [
        { value: "Java", label: "Java" },
        { value: "Version8", label: "Version8" },
        { value: "ReactJs", label: "ReactJs" },
        { value: "HTML", label: "HTML" },
      ],
      releaseDate: "07/07/2022",
    },
  ]);

  const addBlogHandler = (form) => {
    fetch("https://react-b8154-default-rtdb.firebaseio.com/blogFrom.json", {
      method: "POST",
      body: JSON.stringify(form),
    });
  };

  const addBlogConHandler = (form) => {
    setBlogs((prev) => {
      return [...prev, form];
    });
  };

  const removeBlogHAndler = async (id) => {
    const respones = await fetch(
      "https://react-b8154-default-rtdb.firebaseio.com/blogFrom.json"
    );
    const data = await respones.json();
    let blgdata = [];
    for (let i in data) {
      blgdata.push(data[i]);
    }
    const bdata = blgdata.filter((blg) => blg.id !== id);
    console.log(bdata);
    // bdata.forEach(element => {
    //   addBlogHandler(element)
    // })
  };

  const removeBlogConHandler = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };
  const contextValue = {
    blogs: blogs,
    addBlog: addBlogHandler,
    addToC: addBlogConHandler,
    removeBlog: removeBlogHAndler,
    removeToC: removeBlogConHandler,
  };
  return (
    <BlogContext.Provider value={contextValue}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
