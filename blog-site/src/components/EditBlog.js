import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogContext } from "../context/blog-context";
import classes from "./AddBlog.module.css";
import Select, { components } from "react-select";


const Group = (props) => (
  <div>
    <components.Group {...props} />
  </div>
);


let formOptions = [
  { value: 'Java', label: 'Java' },
  { value: 'Version8', label: 'Version8'},
  { value: 'ReactJs', label: 'ReactJs'},
  { value: 'HTML', label: 'HTML'},
];

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const EditBlog = () => {
  const history = useNavigate();
  const blogCtx = useContext(BlogContext);

  const myBlogs = blogCtx.blogs;
  const pamas = useParams();
  const bid = pamas.blogID;
  let singleBlog;
  for (let i of myBlogs) {
    if (String(i.id) === bid) {
      singleBlog = i;
    }
  }

  const [form, setForm] = useState(singleBlog);

  const selectBoxHandler = (eve) => {
    setForm((prev) => {
      return { ...prev, tags: eve};
    });
  }
  const changeHandler = async (event) => {
    if (event.target.name === "checkbox") {
      const { checked } = event.target;
      const box = event.target.id;
      setForm((prev) => {
        return { ...prev, tags: { ...prev.tags, [box]: checked } };
      });
    } else if (event.target.name === "image") {
      const file = event.target.files[0];
      const baseData = await getBase64(file);
      setForm((prev) => {
        return { ...prev, image: baseData };
      });
    } else {
      const { name, value } = event.target;
      setForm((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };


  const submitHandler = (event) => {
    event.preventDefault();
    blogCtx.removeToC(singleBlog.id);
    const formData = { ...form, releaseDate: singleBlog.releaseDate, id: singleBlog.id };
    blogCtx.addToC(formData);
    alert('form edited successfully.')
    history('/home');
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={changeHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description Text</label>
        <textarea
          rows="5"
          id="description"
          name="description"
          value={form.description}
          onChange={changeHandler}
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="auther">Auther</label>
        <input type="text" id="auther" name="auther" disabled value={form.auther} onChange={changeHandler}/>
      </div>

      <label htmlFor="image">Image Priview</label>
      <img src={form.image} style={{height : '100px'}} alt='no-img'/>
      <input type="file" id="image" name="image" onChange={changeHandler}/>
      <br />
      <br />
      <Select
        defaultValue={null}
        options={formOptions}
        components={{ Group }}
        onChange={selectBoxHandler}
        value={form.tags}
        isMulti
      />


      <div className={classes.control}>
        <h2 id="pdate">Publish Date : {form.releaseDate}</h2>
      </div>
      <div className={classes.control}>
        <button>submit Blog</button>
      </div>
    </form>
  );
};
export default EditBlog;

// value={form.tags[2]}
