import React, { useState } from "react";

import classes from "./AddMovie.module.css";

const emptyForm = {
  title: "",
  openingText: "",
  releaseDate: "",
};
function AddMovie() {
  const [newForm, setNewForm] = useState(emptyForm);

  const inputChangeHanler = (event) => {
    const { name, value } = event.target;
    setNewForm((prevMeetForm) => {
      return { ...prevMeetForm, [name]: value };
    });
  };


  function submitHandler(event) {
    event.preventDefault();
    addMovieHandler(newForm);
    setNewForm(emptyForm)
  }

  const addMovieHandler = async (movie) => {
    const response = await fetch("https://react-b8154-default-rtdb.firebaseio.com/movie.json", {
      method : 'POST',
      body : JSON.stringify(movie),
      headers : {
        'content-type' : 'aplication/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <form onSubmit={submitHandler} className="myform">
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={newForm.title}
          onChange={inputChangeHanler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="openingText">Opening Text</label>
        <textarea
          rows="5"
          name="openingText"
          value={newForm.openingText}
          onChange={inputChangeHanler}
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input
          type="date"
          name="releaseDate"
          value={newForm.releaseDate}
          onChange={inputChangeHanler}
        />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
