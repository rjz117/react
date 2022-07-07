import React, { useState, useContext } from "react";
import classes from "./AddBlog.module.css";
import { BlogContext } from "../context/blog-context";
import { UserContext } from "../context/user-context";
import Select, { components } from "react-select";
import {useNavigate} from 'react-router-dom';

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


const emptyForm = {
  title: "",
  description: "",
  image: "",
  tags: [],
};

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const AddBlog = (_props) => {
  const userCtx = useContext(UserContext);
  const blogCtx = useContext(BlogContext);

  const [form, setForm] = useState(emptyForm);

  const history = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const id = Math.random().toFixed(3) * 1000;
    const formData = {
      ...form,
      auther: userCtx.user,
      releaseDate: new Date().toLocaleDateString(),
      id: id,
    };
    blogCtx.addToC(formData);
    setForm(emptyForm);
    alert('blog has been published!');
    history('/home')
  };

  const selectBoxHandler = (eve) => {
    setForm((prev) => {
      return { ...prev, tags: eve};
    });
  }


  const changeHandler = async (event) => {
    if (event.target.name === "image") {
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

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={form.title} onChange={changeHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description" >Description Text</label>
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
        <input
          type="text"
          id="auther"
          name="auther"
          disabled
          value={userCtx.user}
        />
      </div>

      <label htmlFor="date">Image </label>
      <input type="file" id="image" name="image" onChange={changeHandler} />
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
        <h2 id="pdate">Publish Date : -</h2>
      </div>
      <div className={classes.control}>
        <button>Publish</button>
      </div>
    </form>
  );
};

export default AddBlog;
