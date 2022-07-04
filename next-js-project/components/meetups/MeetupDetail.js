import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  const meet = props.singleMeet;

  return (
    <section className={classes.detail}>
      <img
        src={meet.image}
        alt={meet.title}
      />
      <h1>{meet.title}</h1>
      <address>{meet.address}</address>
      <p>{meet.description}</p>
    </section>
  );
};

export default MeetupDetail;
