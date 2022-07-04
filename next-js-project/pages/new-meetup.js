import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";

const newmeetup = () => {
  const addMeetupHandler = async (newMeetup) => {
    const respose = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await respose.json();
    console.log(data);
  };
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Create Your Own Meetups!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default newmeetup;
