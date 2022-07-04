import { useRef, useState } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const emptyMeet = {
  title: "",
  image: "",
  address: "",
  description: "",
};

function NewMeetupForm(props) {
  const [newMeetForm, setNewMeetForm] = useState(emptyMeet);

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const inputChangeHanler = (event) => {
    const { name, value } = event.target;
    setNewMeetForm((prevMeetForm) => {
      return { ...prevMeetForm, [name]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(newMeetForm);
    props.onAddMeetup(newMeetForm);
    setNewMeetForm(emptyMeet)
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            name="title"
            required
            id="title"
            ref={titleInputRef}
            value={newMeetForm.title}
            onChange={inputChangeHanler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            name="image"
            required
            id="image"
            ref={imageInputRef}
            value={newMeetForm.image}
            onChange={inputChangeHanler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            required
            id="address"
            ref={addressInputRef}
            value={newMeetForm.address}
            onChange={inputChangeHanler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            required
            rows="5"
            ref={descriptionInputRef}
            value={newMeetForm.description}
            onChange={inputChangeHanler}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
